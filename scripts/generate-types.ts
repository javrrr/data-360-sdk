#!/usr/bin/env tsx
/**
 * Generates TypeScript types from the Data 360 Connect API OpenAPI spec.
 *
 * Produces three files:
 *   1. src/generated/openapi.yaml  — the fetched spec (committed for easy diffing)
 *   2. src/generated/openapi.d.ts  — full generated types (paths, components, operations)
 *   3. src/schemas.ts              — named re-exports, enum types, and discriminated unions
 *
 * Usage: npm run generate  (also runs generate-services.ts afterward)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import openapiTS, { astToString } from "openapi-typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SPEC_URL =
  "https://developer.salesforce.com/static/datacloud/connectapi/spec/cdp-connect-api-Swagger.yaml";
const SPEC_OUTPUT = path.resolve(ROOT, "src/generated/openapi.yaml");
const OPENAPI_OUTPUT = path.resolve(ROOT, "src/generated/openapi.d.ts");
const SCHEMAS_OUTPUT = path.resolve(ROOT, "src/schemas.ts");

// ────────────────────────────────────────────────────────────────────────────
// Schema type overrides
// ────────────────────────────────────────────────────────────────────────────

interface SchemaOverride {
  /** Why this override exists. Emitted as a JSDoc comment. */
  note: string;
  /** Fields to relax from required to optional (spec marks them required but the API doesn't). */
  makeOptional?: string[];
  /** Fields whose type should be replaced. Use type names from schemas.ts (not Schemas["..."]). */
  fieldTypes?: Record<string, string>;
  /** Optional fields to add when runtime responses include undocumented properties. */
  addOptionalFields?: Record<string, string>;
  /** Required fields to add when the API requires them but the spec omits them. */
  addRequiredFields?: Record<string, string>;
}

/**
 * Override specific schema re-exports in schemas.ts.
 *
 * Use this when the OpenAPI spec models a type incorrectly and the raw
 * generated type would mislead consumers. Overrides are applied on top of the
 * flattened schema properties — the generator reads the spec, flattens the
 * allOf chain, then patches the result with these overrides.
 *
 * Every override is validated: if the schema is removed from the spec,
 * generation fails so stale overrides don't silently persist.
 */
const SCHEMA_OVERRIDES: Record<string, SchemaOverride> = {
  DataStreamInputRepresentation: {
    note: "Spec bugs: dataLakeObjectInfo should accept single or array; mappings and sourceFields are not required for all connector types",
    makeOptional: ["mappings", "sourceFields"],
    fieldTypes: {
      dataLakeObjectInfo: "DataLakeObjectInputRepresentation | DataLakeObjectInputRepresentation[]",
    },
  },
  DataStreamRepresentation: {
    note: "Runtime list/get responses include `dataSource` although the spec omits it",
    addOptionalFields: {
      dataSource: "string",
    },
  },
  DataLakeObjectInputRepresentation: {
    note: "Spec bugs: recordModifiedFieldName and orgUnitIdentifierFieldName are not required for all DLO types",
    makeOptional: ["recordModifiedFieldName", "orgUnitIdentifierFieldName"],
  },
  DataObjectFieldInputRepresentation: {
    note: "Spec bugs: API expects `dataType` instead of `type` for field data type; isDynamicLookup missing but required for PATCH to work",
    makeOptional: ["type"],
    addRequiredFields: {
      dataType: '"Boolean" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url"',
      isDynamicLookup: "boolean",
    },
  },
  SemanticSearchInputRepresentation: {
    note: "Spec bugs: processingType missing from spec but required by API; attachment/transcribe fields are only required for document/PDF search indexes, not structured DMO search",
    makeOptional: [
      "attachmentDmoDeveloperName",
      "transcribeDmoDeveloperName",
      "transcribeDmoName",
      "transcribeDmoId",
    ],
    fieldTypes: {
      searchType: '"HYBRID" | "VECTOR"',
    },
    addRequiredFields: {
      processingType: '"NEAR_REALTIME" | "REALTIME"',
    },
  },
};

// ────────────────────────────────────────────────────────────────────────────
// Empty abstract input base normalization
// ────────────────────────────────────────────────────────────────────────────

/**
 * openapi-typescript emits empty object schemas as `Record<string, never>`.
 * That becomes impossible when those schemas are abstract `allOf` bases used
 * for input models (`Record<string, never> & { ... }`).
 *
 * Keep this list intentionally narrow and data-driven.
 */
const EMPTY_ABSTRACT_INPUT_BASES = new Set<string>([
  "ConnectorDetailsConfig",
  "ConnectorPatchDetailsConfig",
  "CdpDataKitDeployComponentConfig",
  "CdpDataKitDeployBundleConfig",
  "FormulaParametersInputRepresentation",
]);

function normalizeEmptyAbstractInputBases(generated: string): string {
  return generated.replace(
    /^(\s*)([A-Za-z0-9_]+): Record<string, never>;/gm,
    (fullMatch, indent, typeName) => {
      if (!EMPTY_ABSTRACT_INPUT_BASES.has(typeName)) return fullMatch;
      return `${indent}${typeName}: {};`;
    },
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Spec type definitions (for reading the parsed YAML)
// ────────────────────────────────────────────────────────────────────────────

interface SpecPropDef {
  type?: string;
  enum?: string[];
  items?: { $ref?: string; type?: string };
  $ref?: string;
  oneOf?: Array<{ $ref?: string }>;
  properties?: Record<string, SpecPropDef>;
  additionalProperties?: SpecPropDef | boolean;
  allOf?: Array<{ $ref?: string }>;
}

interface SpecAllOfEntry {
  $ref?: string;
  type?: string;
  properties?: Record<string, SpecPropDef>;
  required?: string[];
  oneOf?: Array<{ $ref?: string }>;
}

interface SpecSchemaDef {
  properties?: Record<string, SpecPropDef>;
  allOf?: SpecAllOfEntry[];
  oneOf?: Array<{ properties?: Record<string, SpecPropDef> }>;
  required?: string[];
  type?: string;
}

// ────────────────────────────────────────────────────────────────────────────
// Discriminated union configuration
// ────────────────────────────────────────────────────────────────────────────

/**
 * "property" kind: a property on the source schema has a `oneOf` whose
 * concrete type depends on a sibling discriminator property.
 *
 * Example: ConnectorInputRepresentation.connectorDetails is discriminated
 * by ConnectorInputRepresentation.connectorType.
 */
interface PropertyDiscriminatedUnion {
  kind: "property";
  exportName: string;
  sourceSchema: string;
  discriminatorProp: string;
  discriminatedProp: string;
  mapping: Record<string, string>;
}

/**
 * "schema" kind: the source schema's `oneOf` lists subtypes that inherit
 * common base properties and add their own extensions.
 *
 * Example: ConnectionInputRepresentation has a oneOf of connection subtypes,
 * each extending the base with additional properties.
 */
interface SchemaDiscriminatedUnion {
  kind: "schema";
  exportName: string;
  sourceSchema: string;
  discriminatorProp: string;
  mapping: Record<string, string>;
}

type DiscriminatedUnionConfig =
  | PropertyDiscriminatedUnion
  | SchemaDiscriminatedUnion;

/**
 * Discriminated union definitions.
 *
 * Each entry defines a mapping from discriminator literal values to target
 * schemas. The generator validates these against the spec's oneOf entries
 * and emits strict TypeScript discriminated unions.
 *
 * When the spec changes:
 *   - If a schema in `mapping` is removed/renamed → generation fails (hard error)
 *   - If a new schema is added to the spec's oneOf → generation warns (soft warning)
 *   - To fix: update the mapping and regenerate
 */
const DISCRIMINATED_UNIONS: DiscriminatedUnionConfig[] = [
  // DataStream connector input — discriminates connectorDetails by connectorType
  {
    kind: "property",
    exportName: "DataStreamConnectorInput",
    sourceSchema: "ConnectorInputRepresentation",
    discriminatorProp: "connectorType",
    discriminatedProp: "connectorDetails",
    mapping: {
      DataConnector: "DataConnectorDetailsConfig",
      IngestApi: "IngestApiConnectorDetailsConfig",
      SalesforceDotCom: "CrmConnectorDetailsConfig",
      SalesforceMarketingCloud: "SalesforceMarketingCloudConnectorDetailsConfig",
      StreamingApp: "StreamingConnectorDetailsConfig",
    },
  },

  // Connection create input — discriminates subtypes by connectorType
  {
    kind: "schema",
    exportName: "ConnectionCreateInput",
    sourceSchema: "ConnectionInputRepresentation",
    discriminatorProp: "connectorType",
    mapping: {
      IngestApi: "IngestApiConnectionInputRepresentation",
      SalesforceDotCom: "CrmConnectionInputRepresentation",
      SalesforceMarketingCloud: "MarketingCloudConnectionInputRepresentation",
      StreamingApp: "StreamingAppConnectionInputRepresentation",
      // DCF data connectors — all use the DataConnection input shape
      AwsRdsPostgres: "DataConnectionInputRepresentation",
      AzureBlob: "DataConnectionInputRepresentation",
      Databricks: "DataConnectionInputRepresentation",
      Gcs: "DataConnectionInputRepresentation",
      Sftp: "DataConnectionInputRepresentation",
      AmazonS3: "DataConnectionInputRepresentation",
      Redshift: "DataConnectionInputRepresentation",
      Snowflake: "DataConnectionInputRepresentation",
      BigQuery: "DataConnectionInputRepresentation",
      AzureSql: "DataConnectionInputRepresentation",
    },
  },

  // Connection update input — discriminates patch subtypes by connectorType
  {
    kind: "schema",
    exportName: "ConnectionUpdateInput",
    sourceSchema: "ConnectionInputRepresentation",
    discriminatorProp: "connectorType",
    mapping: {
      SalesforceMarketingCloud: "MarketingCloudConnectionPatchInputRepresentation",
      StreamingApp: "StreamingAppConnectionPatchInputRepresentation",
    },
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Discriminated union helpers
// ────────────────────────────────────────────────────────────────────────────

function refToName(ref: string): string {
  return ref.split("/").pop()!;
}

/** Convert an OpenAPI property definition to a TypeScript type string. */
function specPropToTS(prop: SpecPropDef): string {
  if (prop.enum) return prop.enum.map((v) => `"${v}"`).join(" | ");
  if (prop.$ref) return `Schemas["${refToName(prop.$ref)}"]`;
  // Nested allOf (e.g., status: { allOf: [{ $ref: "..." }] })
  if (prop.allOf) {
    const ref = prop.allOf.find((e) => e.$ref);
    if (ref?.$ref) return `Schemas["${refToName(ref.$ref)}"]`;
  }
  if (prop.type === "string") return "string";
  if (prop.type === "integer" || prop.type === "number") return "number";
  if (prop.type === "boolean") return "boolean";
  if (prop.type === "array") {
    if (prop.items?.$ref) return `Schemas["${refToName(prop.items.$ref)}"][]`;
    if (prop.items?.type === "string") return "string[]";
    if (prop.items?.type === "integer" || prop.items?.type === "number")
      return "number[]";
    return "unknown[]";
  }
  if (prop.type === "object") {
    if (prop.additionalProperties && typeof prop.additionalProperties === "object") {
      return `{ [key: string]: ${specPropToTS(prop.additionalProperties)} }`;
    }
    if (prop.additionalProperties === true) return "{ [key: string]: unknown }";
    return "Record<string, never>";
  }
  return "unknown";
}

/** Collect all $ref names from oneOf entries across a schema's allOf/properties. */
function collectOneOfRefs(
  schema: SpecSchemaDef,
  propertyName?: string,
): Set<string> {
  const refs = new Set<string>();

  if (propertyName) {
    // Property-level oneOf (e.g., connectorDetails.oneOf)
    const allProps: Record<string, SpecPropDef> = { ...schema.properties };
    for (const entry of schema.allOf ?? []) {
      Object.assign(allProps, entry.properties);
    }
    const prop = allProps[propertyName];
    for (const item of prop?.oneOf ?? []) {
      if (item.$ref) refs.add(refToName(item.$ref));
    }
  } else {
    // Schema-level oneOf (inside allOf entries)
    for (const entry of schema.allOf ?? []) {
      for (const item of entry.oneOf ?? []) {
        if (item.$ref) refs.add(refToName(item.$ref));
      }
    }
  }

  return refs;
}

/**
 * Validate all DISCRIMINATED_UNIONS configs against the spec.
 * Throws on hard errors (missing schemas), warns on drift (uncovered oneOf entries).
 */
function validateDiscriminatedUnions(
  schemas: Record<string, SpecSchemaDef>,
): void {
  // Track schema-level oneOf coverage across all configs sharing a sourceSchema
  const oneOfCoverage = new Map<string, { refs: Set<string>; covered: Set<string> }>();

  for (const config of DISCRIMINATED_UNIONS) {
    const source = schemas[config.sourceSchema];
    if (!source) {
      throw new Error(
        `DISCRIMINATED_UNIONS "${config.exportName}": source schema "${config.sourceSchema}" not found in spec`,
      );
    }

    // Validate all mapping targets exist
    for (const target of new Set(Object.values(config.mapping))) {
      if (!schemas[target]) {
        throw new Error(
          `DISCRIMINATED_UNIONS "${config.exportName}": mapping target "${target}" not found in spec`,
        );
      }
    }

    if (config.kind === "property") {
      // Validate the discriminated property has a oneOf with the expected refs
      const oneOfRefs = collectOneOfRefs(source, config.discriminatedProp);
      if (oneOfRefs.size === 0) {
        throw new Error(
          `DISCRIMINATED_UNIONS "${config.exportName}": no oneOf found on "${config.sourceSchema}.${config.discriminatedProp}"`,
        );
      }
      const mappingTargets = new Set(Object.values(config.mapping));
      for (const target of mappingTargets) {
        if (!oneOfRefs.has(target)) {
          throw new Error(
            `DISCRIMINATED_UNIONS "${config.exportName}": mapping target "${target}" not in oneOf of "${config.discriminatedProp}"`,
          );
        }
      }
      // Warn about uncovered oneOf entries
      for (const ref of oneOfRefs) {
        if (!mappingTargets.has(ref)) {
          console.warn(
            `⚠ "${config.exportName}": oneOf entry "${ref}" not covered by mapping — add it to DISCRIMINATED_UNIONS`,
          );
        }
      }
    }

    if (config.kind === "schema") {
      // Track oneOf coverage for cross-config validation
      if (!oneOfCoverage.has(config.sourceSchema)) {
        oneOfCoverage.set(config.sourceSchema, {
          refs: collectOneOfRefs(source),
          covered: new Set(),
        });
      }
      const entry = oneOfCoverage.get(config.sourceSchema)!;
      for (const target of new Set(Object.values(config.mapping))) {
        entry.covered.add(target);
      }
    }
  }

  // Warn about uncovered schema-level oneOf entries
  for (const [sourceSchema, { refs, covered }] of oneOfCoverage) {
    for (const ref of refs) {
      if (!covered.has(ref)) {
        console.warn(
          `⚠ "${sourceSchema}" oneOf entry "${ref}" not covered by any DISCRIMINATED_UNIONS config — add it or consumers must use raw types`,
        );
      }
    }
  }
}

/**
 * Generate TypeScript discriminated union type definitions.
 * Returns a string to be appended to schemas.ts.
 */
function generateDiscriminatedUnions(
  schemas: Record<string, SpecSchemaDef>,
): string {
  const lines: string[] = [];
  const count = DISCRIMINATED_UNIONS.length;

  lines.push(`// ── Discriminated union types (${count}) ──`);
  lines.push("");

  for (const config of DISCRIMINATED_UNIONS) {
    if (config.kind === "property") {
      lines.push(
        `/** Discriminated union — narrows \`${config.discriminatedProp}\` by \`${config.discriminatorProp}\`. */`,
      );
      lines.push(`export type ${config.exportName} =`);

      const entries = Object.entries(config.mapping);
      for (let i = 0; i < entries.length; i++) {
        const [literal, targetSchema] = entries[i];
        const sep = i === 0 ? "  " : "| ";
        lines.push(
          `  ${sep}{ ${config.discriminatorProp}: "${literal}"; ${config.discriminatedProp}: Schemas["${targetSchema}"] }`,
        );
      }
      lines.push(";");
      lines.push("");
    }

    if (config.kind === "schema") {
      // Collect base common properties from the sourceSchema's allOf
      const source = schemas[config.sourceSchema];
      const baseAllOfEntry = source.allOf?.find(
        (entry) => entry.properties && !entry.$ref,
      );
      const baseProps = baseAllOfEntry?.properties ?? source.properties ?? {};
      const baseRequired = new Set(
        baseAllOfEntry?.required ?? source.required ?? [],
      );

      // Group mapping entries by target schema (multiple literals may share a schema)
      const schemaToLiterals = new Map<string, string[]>();
      for (const [literal, targetSchema] of Object.entries(config.mapping)) {
        const existing = schemaToLiterals.get(targetSchema);
        if (existing) {
          existing.push(literal);
        } else {
          schemaToLiterals.set(targetSchema, [literal]);
        }
      }

      lines.push(
        `/** Discriminated union — narrows by \`${config.discriminatorProp}\`. */`,
      );
      lines.push(`export type ${config.exportName} =`);

      let first = true;
      for (const [targetSchema, literals] of schemaToLiterals) {
        const sep = first ? "  " : "| ";
        first = false;

        // Collect extension properties from the target schema's allOf
        const target = schemas[targetSchema];
        const extAllOfEntry = target?.allOf?.find(
          (entry) => entry.properties && !entry.$ref,
        );
        const extProps = extAllOfEntry?.properties ?? {};
        const extRequired = new Set(extAllOfEntry?.required ?? []);

        // Build property strings
        const propStrings: string[] = [];

        // Discriminator property with literal type
        const literalType =
          literals.length === 1
            ? `"${literals[0]}"`
            : literals.map((l) => `"${l}"`).join(" | ");
        propStrings.push(`${config.discriminatorProp}: ${literalType}`);

        // Base properties (except discriminator)
        for (const [propName, propDef] of Object.entries(baseProps)) {
          if (propName === config.discriminatorProp) continue;
          const tsType = specPropToTS(propDef);
          const optional = baseRequired.has(propName) ? "" : "?";
          propStrings.push(`${propName}${optional}: ${tsType}`);
        }

        // Extension properties
        for (const [propName, propDef] of Object.entries(extProps)) {
          const tsType = specPropToTS(propDef);
          const optional = extRequired.has(propName) ? "" : "?";
          propStrings.push(`${propName}${optional}: ${tsType}`);
        }

        lines.push(`  ${sep}Simplify<{ ${propStrings.join("; ")} }>`);
      }

      lines.push(";");
      lines.push("");
    }
  }

  return lines.join("\n");
}

// ────────────────────────────────────────────────────────────────────────────
// Schema flattening (allOf chain resolution)
// ────────────────────────────────────────────────────────────────────────────

interface FlatProp {
  tsType: string;
  required: boolean;
}

/**
 * Recursively walk a schema's allOf chain and collect all properties into
 * a flat record. Later properties override earlier ones (e.g., a required
 * field in a child overrides an optional field in the parent).
 *
 * When `force` is true, also handles plain schemas (no allOf) by reading
 * their direct properties. Used for schemas with SCHEMA_OVERRIDES.
 */
function collectFlatProperties(
  schemaName: string,
  schemas: Record<string, SpecSchemaDef>,
  force = false,
): Record<string, FlatProp> | null {
  const schema = schemas[schemaName];
  if (!schema) return null;

  // Skip schemas with oneOf (complex unions — can't flatten)
  const hasOneOf = schema.allOf?.some((e) => e.oneOf);
  if (hasOneOf) return null;

  // Plain schema (no allOf) — only flatten if forced (for overrides)
  if (!schema.allOf) {
    if (!force || !schema.properties) return null;
    const props: Record<string, FlatProp> = {};
    const required = new Set(schema.required ?? []);
    for (const [propName, propDef] of Object.entries(schema.properties)) {
      props[propName] = {
        tsType: specPropToTS(propDef),
        required: required.has(propName),
      };
    }
    return Object.keys(props).length > 0 ? props : null;
  }

  const props: Record<string, FlatProp> = {};

  for (const entry of schema.allOf) {
    if (entry.$ref) {
      // Recurse into the referenced schema
      const refName = refToName(entry.$ref);
      const parentProps = collectFlatProperties(refName, schemas);
      if (parentProps) {
        Object.assign(props, parentProps);
      } else {
        // Parent is a simple schema (no allOf) — collect its direct properties
        const parent = schemas[refName];
        if (parent?.properties) {
          const parentRequired = new Set(parent.required ?? []);
          for (const [propName, propDef] of Object.entries(parent.properties)) {
            props[propName] = {
              tsType: specPropToTS(propDef),
              required: parentRequired.has(propName),
            };
          }
        }
      }
    }

    // Collect inline properties from this allOf entry
    if (entry.properties) {
      const entryRequired = new Set(entry.required ?? []);
      for (const [propName, propDef] of Object.entries(entry.properties)) {
        const existing = props[propName];
        let tsType = specPropToTS(propDef);

        // When both parent and child define an enum for the same property,
        // TypeScript intersection narrows to common values. Match that behavior.
        if (existing && propDef.enum && existing.tsType.startsWith('"')) {
          const parentValues = new Set(
            existing.tsType.split(" | ").map((v) => v.trim().replace(/^"|"$/g, "")),
          );
          const childValues = propDef.enum;
          const intersection = childValues.filter((v) => parentValues.has(v));
          if (intersection.length > 0 && intersection.length < childValues.length) {
            tsType = intersection.map((v) => `"${v}"`).join(" | ");
          }
        }

        props[propName] = {
          tsType,
          // A property is required if this level says so, or if it was already
          // required from a parent and this level doesn't demote it
          required: entryRequired.has(propName) || (existing?.required ?? false),
        };
      }
    }
  }

  // Also collect top-level required from the schema itself
  if (schema.required) {
    for (const name of schema.required) {
      if (props[name]) props[name].required = true;
    }
  }

  return Object.keys(props).length > 0 ? props : null;
}

/** Convert a flat property record to a TypeScript object type string. */
function flattenProps(props: Record<string, FlatProp>): string {
  const propStrings = Object.entries(props).map(([name, { tsType, required }]) => {
    const opt = required ? "" : "?";
    return `  ${name}${opt}: ${tsType};`;
  });
  return `{\n${propStrings.join("\n")}\n}`;
}

// ────────────────────────────────────────────────────────────────────────────
// Main
// ────────────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`Fetching spec from: ${SPEC_URL}`);

  // Step 1: Fetch the spec and save it to the repo for diffing
  const response = await fetch(SPEC_URL);
  if (!response.ok) {
    console.error(`Failed to fetch spec: ${response.status} ${response.statusText}`);
    process.exit(1);
  }
  const specYaml = await response.text();

  fs.mkdirSync(path.dirname(SPEC_OUTPUT), { recursive: true });
  fs.writeFileSync(SPEC_OUTPUT, specYaml);
  console.log(`Saved spec to ${path.relative(ROOT, SPEC_OUTPUT)}`);

  const spec = parse(specYaml) as {
    components?: { schemas?: Record<string, SpecSchemaDef> };
  };

  // Step 2: Generate openapi.d.ts via openapi-typescript
  const ast = await openapiTS(spec as Parameters<typeof openapiTS>[0], {
    exportType: true,
  });

  const output = astToString(ast);
  const normalizedOutput = normalizeEmptyAbstractInputBases(output);

  fs.mkdirSync(path.dirname(OPENAPI_OUTPUT), { recursive: true });
  fs.writeFileSync(
    OPENAPI_OUTPUT,
    `// Auto-generated — DO NOT EDIT\n${normalizedOutput}`,
  );
  console.log(`Generated openapi.d.ts (${normalizedOutput.split("\n").length} lines)`);

  // Step 3: Read schema names and enums from the YAML spec
  const schemas = spec.components?.schemas ?? {};
  const schemaNames = Object.keys(schemas).sort();

  // Collect all properties from a schema, including those nested in allOf/oneOf
  function collectProperties(schema: SpecSchemaDef): Record<string, SpecPropDef> {
    const props: Record<string, SpecPropDef> = { ...schema.properties };
    for (const item of schema.allOf ?? []) {
      Object.assign(props, item.properties);
    }
    for (const item of schema.oneOf ?? []) {
      Object.assign(props, item.properties);
    }
    return props;
  }

  // Extract enum types from schema properties
  // Naming: strip "Representation"/"InputRepresentation" suffix, PascalCase the property name
  const enumTypes: { name: string; values: string[] }[] = [];
  const seenEnumNames = new Set<string>();

  for (const [schemaName, schema] of Object.entries(schemas)) {
    const props = collectProperties(schema);
    for (const [propName, prop] of Object.entries(props)) {
      if (prop.enum && prop.type === "string") {
        const base = schemaName
          .replace(/InputRepresentation$/, "")
          .replace(/Representation$/, "");
        const enumName = `${base}${propName.charAt(0).toUpperCase()}${propName.slice(1)}`;

        // Deduplicate by name — keep the superset (most values)
        if (seenEnumNames.has(enumName)) {
          const existing = enumTypes.find((e) => e.name === enumName);
          if (existing && prop.enum.length > existing.values.length) {
            existing.values = prop.enum;
          }
          continue;
        }
        seenEnumNames.add(enumName);

        // Skip if it conflicts with a schema name
        if (schemas[enumName]) continue;

        enumTypes.push({ name: enumName, values: prop.enum });
      }
    }
  }

  enumTypes.sort((a, b) => a.name.localeCompare(b.name));

  // Step 4: Flatten schemas, apply overrides, and generate discriminated unions

  // Validate overrides reference real schemas
  for (const name of Object.keys(SCHEMA_OVERRIDES)) {
    if (!schemas[name]) {
      throw new Error(
        `SCHEMA_OVERRIDES: schema "${name}" not found in spec — remove stale override`,
      );
    }
  }

  // Flatten allOf schemas + schemas with overrides
  const flattenedSchemas = new Map<string, string>();
  for (const name of schemaNames) {
    const override = SCHEMA_OVERRIDES[name];
    const props = collectFlatProperties(name, schemas, !!override);
    if (!props) continue;

    // Apply overrides
    if (override) {
      for (const field of override.makeOptional ?? []) {
        if (props[field]) props[field].required = false;
      }
      for (const [field, type] of Object.entries(override.fieldTypes ?? {})) {
        if (props[field]) props[field].tsType = type;
      }
      for (const [field, type] of Object.entries(override.addOptionalFields ?? {})) {
        if (!props[field]) {
          props[field] = { tsType: type, required: false };
        }
      }
      for (const [field, type] of Object.entries(override.addRequiredFields ?? {})) {
        if (!props[field]) {
          props[field] = { tsType: type, required: true };
        }
      }
    }

    const flat = flattenProps(props);
    flattenedSchemas.set(name, flat);
  }

  validateDiscriminatedUnions(schemas);
  const discriminatedUnionTypes = generateDiscriminatedUnions(schemas);

  console.log(
    `Flattened ${flattenedSchemas.size} allOf schemas, validated ${DISCRIMINATED_UNIONS.length} discriminated union configs`,
  );

  // Step 5: Write schemas.ts
  const schemasFile = `/**
 * Named type exports for all ${schemaNames.length} OpenAPI schemas, ${enumTypes.length} enum types,
 * and ${DISCRIMINATED_UNIONS.length} discriminated union types.
 * Auto-generated — DO NOT EDIT. Run \`npm run generate\` to regenerate.
 *
 * Usage:
 *   import type { DataStreamInputRepresentation } from "data-360-sdk";
 *   import type { ActivationTargetPlatformType } from "data-360-sdk/schemas";
 */
import type { components } from "./generated/openapi.js";

type Schemas = components["schemas"];

/** Flatten intersections into a single object type for readable IntelliSense hovers. */
type Simplify<T> = { [K in keyof T]: T[K] } & {};

// ── Schema types (${schemaNames.length}) ──

${schemaNames.map((name) => {
    const flat = flattenedSchemas.get(name);
    const override = SCHEMA_OVERRIDES[name];
    if (flat && override) {
      return `/** @override ${override.note} */\nexport type ${name} = ${flat}`;
    }
    if (flat) {
      return `export type ${name} = ${flat}`;
    }
    return `export type ${name} = Schemas["${name}"];`;
  }).join("\n")}

// ── Enum types (${enumTypes.length}) ──

${enumTypes.map((e) => `export type ${e.name} = ${e.values.map((v) => `"${v}"`).join(" | ")};`).join("\n")}

${discriminatedUnionTypes}
`;

  fs.writeFileSync(SCHEMAS_OUTPUT, schemasFile);
  console.log(
    `Generated schemas.ts (${schemaNames.length} schemas + ${enumTypes.length} enums + ${DISCRIMINATED_UNIONS.length} discriminated unions)`,
  );
}

main().catch((err) => {
  console.error("Generation failed:", err);
  process.exit(1);
});
