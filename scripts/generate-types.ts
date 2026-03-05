#!/usr/bin/env tsx
/**
 * Generates TypeScript types from the Data 360 Connect API OpenAPI spec.
 *
 * Produces two files:
 *   1. src/generated/openapi.d.ts  — full generated types (paths, components, operations)
 *   2. src/schemas.ts              — named re-exports for every schema in components.schemas
 *
 * Usage: npm run generate
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
const OPENAPI_OUTPUT = path.resolve(ROOT, "src/generated/openapi.d.ts");
const SCHEMAS_OUTPUT = path.resolve(ROOT, "src/schemas.ts");

async function main() {
  console.log(`Fetching spec from: ${SPEC_URL}`);

  // Step 1: Fetch the spec
  const response = await fetch(SPEC_URL);
  if (!response.ok) {
    console.error(`Failed to fetch spec: ${response.status} ${response.statusText}`);
    process.exit(1);
  }
  const specYaml = await response.text();

  // Step 2: Generate openapi.d.ts via openapi-typescript
  const ast = await openapiTS(new URL(SPEC_URL), {
    exportType: true,
  });

  const output = astToString(ast);

  fs.mkdirSync(path.dirname(OPENAPI_OUTPUT), { recursive: true });
  fs.writeFileSync(
    OPENAPI_OUTPUT,
    `// Auto-generated — DO NOT EDIT\n${output}`,
  );
  console.log(`Generated openapi.d.ts (${output.split("\n").length} lines)`);

  // Step 3: Read schema names and enums from the YAML spec
  interface PropDef { enum?: string[]; type?: string; properties?: Record<string, PropDef> }
  interface SchemaDef {
    properties?: Record<string, PropDef>;
    allOf?: Array<{ properties?: Record<string, PropDef> }>;
    oneOf?: Array<{ properties?: Record<string, PropDef> }>;
  }

  const spec = parse(specYaml) as {
    components?: { schemas?: Record<string, SchemaDef> };
  };

  const schemas = spec.components?.schemas ?? {};
  const schemaNames = Object.keys(schemas).sort();

  // Collect all properties from a schema, including those nested in allOf/oneOf
  function collectProperties(schema: SchemaDef): Record<string, PropDef> {
    const props: Record<string, PropDef> = { ...schema.properties };
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

  const schemasFile = `/**
 * Named type exports for all ${schemaNames.length} OpenAPI schemas and ${enumTypes.length} enum types.
 * Auto-generated — DO NOT EDIT. Run \`npm run generate\` to regenerate.
 *
 * Usage:
 *   import type { DataStreamInputRepresentation } from "data-360-sdk";
 *   import type { ActivationTargetPlatformType } from "data-360-sdk/schemas";
 */
import type { components } from "./generated/openapi.js";

type Schemas = components["schemas"];

// ── Schema types (${schemaNames.length}) ──

${schemaNames.map((name) => `export type ${name} = Schemas["${name}"];`).join("\n")}

// ── Enum types (${enumTypes.length}) ──

${enumTypes.map((e) => `export type ${e.name} = ${e.values.map((v) => `"${v}"`).join(" | ")};`).join("\n")}
`;

  fs.writeFileSync(SCHEMAS_OUTPUT, schemasFile);
  console.log(`Generated schemas.ts (${schemaNames.length} schemas + ${enumTypes.length} enums)`);
}

main().catch((err) => {
  console.error("Generation failed:", err);
  process.exit(1);
});
