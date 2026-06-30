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
/** Page that links to the spec — required as Referer or the CDN returns 404 (hotlink protection). */
const SPEC_REFERER =
  "https://developer.salesforce.com/docs/data/connectapi/references/spec";
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
  /** Fields to promote from optional to required (spec marks them optional but the API requires them). */
  makeRequired?: string[];
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
    note: "Spec bugs: dataLakeObjectInfo should accept single or array; mappings and sourceFields are not required for all connector types. Routing note: dataAccessMode='Direct_Access' is required for federated/BYOL connectors (Snowflake, Databricks, BigQuery, Iceberg) — without it the server returns `400 INTERNAL_ERROR: Unable to post Data Stream: DATA_CONNECTORS is not supported` even when the connector is GA. Direct_Access streams must also OMIT the top-level `datasource` field (otherwise: `DataSource name should be empty for External data streams`); the connection binding is established via connectorInfo.connectorDetails.name instead. advancedAttributes for Direct_Access streams uses GENERIC keys regardless of connector flavor: `database`/`schema`/`object` (Snowflake-shaped). For BigQuery this maps to project/dataset/table — sending the BigQuery-native key names returns `INVALID_ARGUMENT: database cannot be empty in advanced attr`. INCREMENTAL refresh on BigQuery requires acceleration enabled on the connection — without it, create returns `INVALID_ARGUMENT: acceleration should be enabled for incremental column`; use TOTAL_REPLACE if acceleration isn't configured.",
    makeOptional: ["mappings", "sourceFields"],
    fieldTypes: {
      dataLakeObjectInfo: "DataLakeObjectInputRepresentation | DataLakeObjectInputRepresentation[]",
    },
  },
  DataLakeObjectInputRepresentation: {
    note: "Spec bugs: recordModifiedFieldName and orgUnitIdentifierFieldName are not required for all DLO types",
    makeOptional: ["recordModifiedFieldName", "orgUnitIdentifierFieldName"],
  },
  DataConnectionInputRepresentation: {
    note: "`connectorType` casing is per-connector, NOT uniformly uppercase. Most connectors use a TitleCase token (e.g. \"Snowflake\", \"AmazonS3\"); some use an uppercase token (e.g. \"BIGQUERY\"). The authoritative accepted token for any connector is the descriptor name returned by GET `/ssot/connector-descriptors/{TYPE}`. Treat `connectorType` as a string and source the exact token from the connector descriptor rather than assuming a casing convention. Per-connector credential/parameter shapes are NOT documented in the spec; the connector descriptor at GET `/ssot/connector-descriptors/{TYPE}` is the authoritative source. BigQuery specifically needs: credentials = [{paramName: \"authenticationOption\", value: \"KeyPair\"}, {paramName: \"serviceAccountEmail\", value: <SA email>}, {paramName: \"privateKey\", value: <full SA JSON key file content>}]; parameters = [{paramName: \"projectId\", value: <GCP project>}]. Sending just the PEM body (or just the bare PEM) for `privateKey` fails the connection; the connector parses the JSON internally to extract project_id + private_key + client_email.",
  },
  DataObjectFieldInputRepresentation: {
    note: "Spec bugs: the DMO field endpoint expects `dataType` (not `type`) and the wire values are TitleCase from the data-model field type set — there is no `DateOnly`, and `Currency`/`ArrayOfFloats`/`ArrayOfTexts` are valid values the spec omits. `isDynamicLookup` is dereferenced unconditionally by the create/PATCH handler (omitting it errors), so it is effectively required. `description` is accepted but absent from the spec.",
    makeOptional: ["type"],
    addOptionalFields: {
      description: "string",
    },
    addRequiredFields: {
      dataType: '"Number" | "Text" | "Date" | "DateTime" | "Url" | "Phone" | "Email" | "Percent" | "Boolean" | "Currency" | "ArrayOfFloats" | "ArrayOfTexts"',
      isDynamicLookup: "boolean",
    },
  },
  SemanticSearchInputRepresentation: {
    note: "Spec bugs: processingType missing from spec but required by API; attachment/transcribe fields are only required for document/PDF search indexes, not structured DMO search. Input rejects output-only display-name fields (sourceDmoName, sourceDmoFieldName, relatedDmoName, relatedDmoFieldName) that GET responses include — round-tripping a GET shape into a POST returns `500 UNKNOWN_EXCEPTION` with no diagnostic body. Pass developer-name fields only.",
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
  ConnectionSchemaFieldInputRepresentation: {
    note: "Server NPEs (`Cannot invoke java.lang.CharSequence.length() because this.text is null`) when `label` is omitted from any field. Spec marks it optional but the upsert handler dereferences it unconditionally.",
    makeRequired: ["label"],
  },
  DataStreamFieldMappingInputRepresentation: {
    note: "Asymmetric input/output: POST input uses `sourceFieldLabel`, but GET responses echo `sourceFieldName` for the same field. Round-tripping GET→POST without renaming fails with JSON_PARSER_ERROR. Also: targetFieldReturntype is required by the create handler — when omitted, the mapping is silently dropped from the saved data stream with no error.",
    makeRequired: ["targetFieldReturntype"],
  },
  DataStreamSourceFieldInputRepresentation: {
    note: "Asymmetric input/output: POST input uses `dataType` (camelCase), but GET responses echo `datatype` (lowercase) for the same field. Round-tripping GET→POST without renaming fails with `JSON_PARSER_ERROR: Unrecognized field 'datatype'`.",
  },
  VectorEmbeddingInputRepresentation: {
    note: "Server NPEs when vectorEmbeddingRelatedFields is omitted, empty, or null. The list must be non-empty (typical minimum: a single entry pointing at the source DMO's primary key). Spec marks it optional.",
    makeRequired: ["vectorEmbeddingRelatedFields"],
  },

  // ── Connection / data-stream response coverage ──
  ConnectionRepresentation: {
    note: "Spec omits the common asset fields the wire returns. ConnectionRepresentation is an abstract asset whose base inheritance is dropped in the spec, so the generated type loses id/name/label/createdDate/createdBy/lastModifiedBy/lastModifiedDate/namespace/url. Subtype-specific fields (organizationId, alias, connectionStatus, etc.) remain modeled on the concrete subtypes.",
    addOptionalFields: {
      id: "string",
      name: "string",
      label: "string",
      createdDate: "string",
      namespace: "string",
      url: "string",
      createdBy: "CdpUserRepresentation",
      lastModifiedBy: "CdpUserRepresentation",
      lastModifiedDate: "string",
    },
  },

  // ── Identity resolution / data-stream enum casing (SCREAMING_SNAKE wire) ──
  DataStreamDetailedRepresentation: {
    note: "Spec enum casing is wrong: the wire emits and accepts SCREAMING_SNAKE values for dataAccessMode, dataStreamType, lastRunStatus, and status. The TitleCase forms in the spec are never on the wire. Also returns isEnabled and capabilities (a string→boolean map), both omitted by the spec.",
    fieldTypes: {
      dataAccessMode: '"INGEST" | "DIRECT_ACCESS"',
      dataStreamType:
        '"S3" | "MC" | "SFDC" | "SFDC_BUNDLE" | "SFDC_PACKAGE_KIT" | "MCDE" | "FILEUPLOAD" | "PACKAGE" | "PACKAGENDATAKIT" | "EVENTS" | "EVENTS_PACKAGE" | "INGESTAPI" | "INGESTAPI_PACKAGE" | "COMMERCE_BUNDLE" | "COMMERCE_DATA_KIT" | "MCIS" | "GOOGLE_CLOUD_STORAGE" | "CS" | "SFTP" | "CONNECTORSFRAMEWORK" | "AZURE_BLOB" | "EXTERNAL" | "S3_ARN" | "ACCOUNTENGAGEMENT"',
      lastRunStatus:
        '"NONE" | "PENDING" | "IN_PROGRESS" | "SUCCESS" | "FAILURE" | "CANCELLED" | "EXTRACTING"',
      status:
        '"PROCESSING" | "ACTIVE" | "ERROR" | "DELETING" | "NEEDS_ACTIVATION" | "INACTIVE"',
    },
    addOptionalFields: {
      isEnabled: "boolean",
      capabilities: "Record<string, boolean>",
    },
  },
  DataStreamRepresentation: {
    note: "Runtime list/get responses include `dataSource` although the spec omits it. The wire `status` is SCREAMING_SNAKE, not the TitleCase forms in the spec.",
    fieldTypes: {
      status:
        '"PROCESSING" | "ACTIVE" | "ERROR" | "DELETING" | "NEEDS_ACTIVATION" | "INACTIVE"',
    },
    addOptionalFields: {
      dataSource: "string",
    },
  },
  DataLakeObjectRepresentation: {
    note: "Spec omits capabilities (string→boolean map) and fields (an alias of dataLakeFieldInfoRepresentation); capabilities/timeToLive are only populated for automated-process callers. The wire `status` is SCREAMING_SNAKE, not the TitleCase forms in the spec.",
    fieldTypes: {
      status: '"PROCESSING" | "ACTIVE" | "ERROR" | "DELETING" | "INACTIVE"',
    },
    addOptionalFields: {
      capabilities: "Record<string, boolean>",
      fields: "DataLakeFieldRepresentation[]",
    },
  },
  DataStreamFrequencyRepresentation: {
    note: "Spec `frequencyType` enum is mis-cased and missing about half its members (e.g. BATCH). The wire uses SCREAMING_SNAKE internal names.",
    fieldTypes: {
      frequencyType:
        '"NONE" | "NOT_APPLICABLE" | "MINUTELY" | "MINUTES_5" | "MINUTES_15" | "MINUTES_30" | "HOURLY" | "EVERY_4_HOURS" | "EVERY_12_HOURS" | "DAILY" | "WEEKLY" | "MONTHLY" | "MONTHLY_RELATIVE" | "BATCH" | "STREAMING"',
    },
  },
  DataStreamFrequencyInputRepresentation: {
    note: "Spec `frequencyType` enum is mis-cased and missing about half its members (e.g. BATCH). The wire accepts the SCREAMING_SNAKE internal names.",
    fieldTypes: {
      frequencyType:
        '"NONE" | "NOT_APPLICABLE" | "MINUTELY" | "MINUTES_5" | "MINUTES_15" | "MINUTES_30" | "HOURLY" | "EVERY_4_HOURS" | "EVERY_12_HOURS" | "DAILY" | "WEEKLY" | "MONTHLY" | "MONTHLY_RELATIVE" | "BATCH" | "STREAMING"',
    },
  },
  RefreshConfigInputRepresentation: {
    note: "Spec types `frequency` as an array, but the wire expects a single DataStreamFrequencyInputRepresentation object.",
    fieldTypes: {
      frequency: "DataStreamFrequencyInputRepresentation",
    },
  },
  DataStreamPatchInputRepresentation: {
    note: "PATCH accepts a single DataLakeObjectInputRepresentation object (the dominant create shape) in addition to an array, mirroring the create input. Also accepts advancedAttributes (a string→string map) which the spec omits.",
    fieldTypes: {
      dataLakeObjectInfo:
        "DataLakeObjectInputRepresentation | DataLakeObjectInputRepresentation[]",
    },
    addOptionalFields: {
      advancedAttributes: "Record<string, string>",
    },
  },
  CdpIdentityResolutionMatchCriterionOutput: {
    note: "Spec `matchMethodType` enum is mis-cased (TitleCase). The wire uses all-lowercase display names on both responses and requests.",
    fieldTypes: {
      matchMethodType:
        '"exact" | "exactnormalized" | "fuzzy" | "fuzzylow" | "fuzzyhigh"',
    },
  },
  CdpIdentityResolutionReconciliationRuleOutput: {
    note: "Spec `ruleType` enum is mis-cased (TitleCase). The wire uses all-lowercase display names on both responses and requests.",
    fieldTypes: {
      ruleType: '"lastupdated" | "mostfrequent" | "sourcesequence"',
    },
  },
  CdpIdentityResolutionOutputRepresentation: {
    note: "Spec `configurationType` enum is mis-cased (TitleCase). The wire uses all-lowercase display names. The output also returns secondaryDmo, sourceIrDevName, isLimitedToSingleHousehold, isCaseSensitive, and filters — all optional/nullable and omitted by the spec. (filters lacks a dedicated output schema in the spec, so it is typed structurally.)",
    fieldTypes: {
      configurationType:
        '"individual" | "account" | "lead" | "entpuser" | "household"',
    },
    addOptionalFields: {
      secondaryDmo: "string",
      sourceIrDevName: "string",
      isLimitedToSingleHousehold: "boolean",
      isCaseSensitive: "boolean",
      filters: "Record<string, unknown>[]",
    },
  },

  // ── Segments ──
  CdpSegmentDbtInputRepresentation: {
    note: "Spec types `models` as a bare array, but the wire nests it one level under a list-wrapper object: { models: [ <model>, ... ] }. (The wrapper has no dedicated schema in the spec, so it is typed structurally over CdpSegmentDbtModelInputRepresentation.)",
    fieldTypes: {
      models: "{ models?: CdpSegmentDbtModelInputRepresentation[] }",
    },
  },
  CdpSegmentOutputRepresentation: {
    note: "Spec omits the audit fields the wire returns (since Spring '25): lastModifiedDate, createdDate (ISO-8601 strings) and lastModifiedBy, createdBy (user objects). All optional (null-suppressed).",
    addOptionalFields: {
      lastModifiedDate: "string",
      createdDate: "string",
      lastModifiedBy: "CdpUserRepresentation",
      createdBy: "CdpUserRepresentation",
    },
  },
  CdpSegmentContainerOutputRepresentation: {
    note: "Spec omits `totalSize` (total number of results) which the collection wrapper returns alongside segments/offset/orderByExpression. Optional (null-suppressed).",
    addOptionalFields: {
      totalSize: "number",
    },
  },

  // ── Data transforms ──
  RunHistoryOutputProgressRepresentation: {
    note: "Spec enums use Java constant-name casing; the wire emits the JSON values. status is SCREAMING_SNAKE; dataObjectType is camelCase and includes calculatedInsightObject (omitted by the spec).",
    fieldTypes: {
      status: '"PENDING" | "RUNNING" | "SUCCESS" | "ERROR"',
      dataObjectType:
        '"dataLakeObject" | "dataModelObject" | "calculatedInsightObject"',
    },
  },
  TransformValidationIssueRepresentation: {
    note: "Spec enums use Java constant-name casing; the wire emits the JSON values. errorSeverity is SCREAMING_SNAKE; errorCode is a SCREAMING_SNAKE set that may grow over time on this response-only field.",
    fieldTypes: {
      errorSeverity: '"WARNING" | "ERROR" | "FATAL"',
      errorCode:
        '"INVALID_INPUT_PAYLOAD" | "TYPE_VALIDATION_ERROR" | "NAME_VALIDATION_ERROR" | "INVALID_DATA_TRANSFORM_DEFINITION" | "DMO_OUTPUT_VALIDATION_ERROR" | "TAGS_VALIDATION_ERROR" | "DLO_NAME_DOES_NOT_EXIST" | "SQL_EXPRESSION_IS_NULL" | "STREAMING_TRANSFORM_CREATE_FORBIDDEN" | "TARGET_OBJECT_NAME_NULL" | "TARGET_DLO_NOT_FOUND" | "TARGET_DMO_NOT_FOUND" | "DATA_TRANSFORM_LIMIT_EXCEEDED" | "INVALID_DATA_TRANSFORM_REQUEST" | "TARGET_DLO_IS_REBUILDING" | "SOURCE_DLO_NOT_FOUND" | "INVALID_DATA_TRANSFORM_TAG" | "INVALID_DATA_TRANSFORM_CAPABILITY" | "INVALID_DATA_TRANSFORM" | "INVALID_DATA_TRANSFORM_DATA_OBJECTS" | "INVALID_DATA_TRANSFORM_DEF_MAPPING" | "RESTRICTED_DLO" | "INVALID_TARGET_DLO" | "INVALID_TARGET_DMO" | "INTERNAL_SERVICE_ERROR"',
    },
  },

  // ── Data model objects ──
  DataModelObjectInputRepresentation: {
    note: "The DMO endpoint binds `category` to an UPPERCASE enum (PROFILE, ENGAGEMENT, ...) that is broader than the spec's TitleCase list (which reflects the legacy DLO enum). Deserialization is case-insensitive, but responses always serialize UPPERCASE. Kept optional.",
    fieldTypes: {
      category:
        '"PROFILE" | "ENGAGEMENT" | "OTHER" | "UNASSIGNED" | "INSIGHTS" | "SEGMENT_MEMBERSHIP" | "ACTIVATION_AUDIENCE" | "CG_AUDIENCE" | "CLEAN_ROOM" | "VECTOR_EMBEDDING" | "CONTENT" | "AD_AUDIENCE_INSIGHTS" | "DIRECTORY_TABLE"',
    },
  },
  RelationshipFieldRepresentation: {
    note: "Spec copied the Java constant names for `type`; the wire serializes the Mkt-prefixed display names. Output-only.",
    fieldTypes: {
      type: '"MktDataModelField" | "MktCalculatedInsightField" | "SObjectField"',
    },
  },

  // ── Query SQL ──
  QuerySqlBaseRepresentation: {
    note: "Spec types `data` rows as object-wrapped row representations, but the REST response emits `data` as a JSON array of positional value arrays (scalar or null), ordered to match the metadata[] columns. The {row}-shaped QuerySqlRowRepresentation is REST-hidden and is not the element type of `data`.",
    fieldTypes: {
      data: "(string | number | boolean | null)[][]",
    },
  },
  QuerySqlRepresentation: {
    note: "Inherits the `data` shape from QuerySqlBaseRepresentation: the REST response emits `data` as a JSON array of positional value arrays, not object-wrapped rows.",
    fieldTypes: {
      data: "(string | number | boolean | null)[][]",
    },
  },
  QuerySqlPageRepresentation: {
    note: "Inherits the `data` shape from QuerySqlBaseRepresentation: the REST response emits `data` as a JSON array of positional value arrays, not object-wrapped rows.",
    fieldTypes: {
      data: "(string | number | boolean | null)[][]",
    },
  },
  QuerySqlStatusRepresentation: {
    note: "Spec omits `chunkCount` (an int64 on the wire) which is returned alongside completionStatus/expirationTime/progress/queryId/rowCount on both the nested status object and the get-query-status response. Optional (null-suppressed).",
    addOptionalFields: {
      chunkCount: "number",
    },
  },
  QuerySqlParameterItemRepresentation: {
    note: "Request input accepts BOTH the TitleCase Connect display name and the lowercase serialized alias for `type` (the lowercase alias for ArrayOfX is \"array\"). Responses emit TitleCase only.",
    fieldTypes: {
      type: '"ArrayOfX" | "BigInt" | "Bool" | "Char" | "Date" | "Double" | "Float" | "Integer" | "Numeric" | "Oid" | "SmallInt" | "Time" | "Timestamp" | "TimestampTZ" | "Unspecified" | "Varchar" | "array" | "bigint" | "bool" | "char" | "date" | "double" | "float" | "integer" | "numeric" | "oid" | "smallint" | "time" | "timestamp" | "timestamptz" | "unspecified" | "varchar"',
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
  const response = await fetch(SPEC_URL, {
    headers: { Referer: SPEC_REFERER },
  });
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

  // Validate overrides reference real schemas, and reject contradictions
  // between makeOptional/makeRequired (a single field appearing in both is
  // a config error and should fail loudly rather than silently last-wins).
  for (const [name, override] of Object.entries(SCHEMA_OVERRIDES)) {
    if (!schemas[name]) {
      throw new Error(
        `SCHEMA_OVERRIDES: schema "${name}" not found in spec — remove stale override`,
      );
    }
    const optional = new Set(override.makeOptional ?? []);
    for (const field of override.makeRequired ?? []) {
      if (optional.has(field)) {
        throw new Error(
          `SCHEMA_OVERRIDES.${name}: field "${field}" is in both makeOptional and makeRequired`,
        );
      }
    }
  }

  // Flatten allOf schemas + schemas with overrides
  const flattenedSchemas = new Map<string, string>();
  for (const name of schemaNames) {
    const override = SCHEMA_OVERRIDES[name];
    const props = collectFlatProperties(name, schemas, !!override);
    if (!props) continue;

    // Apply overrides. Each list referencing an existing-field name (the
    // make* and fieldTypes families) is validated against the flattened
    // property set — a stale field name fails generation, mirroring the
    // schema-name validation above. The add*Fields families are skipped
    // here because they're explicitly for fields NOT yet present.
    if (override) {
      const validateField = (kind: string, field: string): void => {
        if (!props[field]) {
          throw new Error(
            `SCHEMA_OVERRIDES.${name}.${kind}: field "${field}" not found on schema — remove stale override`,
          );
        }
      };
      for (const field of override.makeOptional ?? []) {
        validateField("makeOptional", field);
        props[field]!.required = false;
      }
      for (const field of override.makeRequired ?? []) {
        validateField("makeRequired", field);
        props[field]!.required = true;
      }
      for (const [field, type] of Object.entries(override.fieldTypes ?? {})) {
        validateField("fieldTypes", field);
        props[field]!.tsType = type;
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
