/**
 * Compile-time type assertions for generated schema intersections.
 *
 * This file is included in `npm run typecheck` via tsconfig includes.
 */
import type {
  CdpDataKitDeployBundleConfigForIngestApi,
  CdpDataKitDeployComponentConfigForDLO,
  CdpIdentityResolutionMatchCriterionOutput,
  CdpIdentityResolutionOutputRepresentation,
  CdpIdentityResolutionReconciliationRuleOutput,
  ConnectionCreateInput,
  ConnectionUpdateInput,
  ConnectorInputRepresentation,
  DataLakeObjectInputRepresentation,
  DataModelObjectInputRepresentation,
  DataObjectFieldInputRepresentation,
  DataStreamConnectorInput,
  DataStreamDetailedRepresentation,
  DataStreamInputRepresentation,
  DataStreamRepresentation,
  IngestApiConnectorDetailsConfig,
  FormulaParametersInputRepresentation,
  QuerySqlBaseRepresentation,
} from "../src/schemas.js";
import type {
  DataStreamCreateInput,
} from "../src/resources/data-streams.js";

// ── Existing schema intersection checks ──

export const connectorInputTypecheck: ConnectorInputRepresentation = {
  connectorType: "IngestApi",
  connectorDetails: {
    name: "foo",
    events: ["Bar"],
  },
};

// IngestApiConnectorPatchDetailsConfig was consolidated into
// IngestApiConnectorDetailsConfig in the spec — no separate patch shape now.
export const connectorPatchTypecheck: IngestApiConnectorDetailsConfig = {
  events: [],
  name: "patch-target",
};

export const dataKitComponentTypecheck: CdpDataKitDeployComponentConfigForDLO = {
  apiName: "My_DLO",
  dataSpaceName: "default",
};

export const dataKitBundleTypecheck: CdpDataKitDeployBundleConfigForIngestApi = {
  connectorName: "MyConnector",
};

// SqlFormulaParametersInputRepresentation was renamed to
// FormulaParametersInputRepresentation; the fields[] array dropped from the
// shape — only `expressionType` remains. The expression now lives elsewhere.
export const formulaParametersTypecheck: FormulaParametersInputRepresentation = {
  expressionType: "Sql",
};

// ── DataStreamInputRepresentation: dataLakeObjectInfo override ──

declare const rawDataStreamInput: Omit<DataStreamInputRepresentation, "dataLakeObjectInfo">;
declare const dloInput: DataLakeObjectInputRepresentation;

// Single DLO accepted on the raw type (spec override)
export const rawSingleDlo: DataStreamInputRepresentation = {
  ...rawDataStreamInput,
  dataLakeObjectInfo: dloInput,
};

// Array DLO still accepted
export const rawArrayDlo: DataStreamInputRepresentation = {
  ...rawDataStreamInput,
  dataLakeObjectInfo: [dloInput],
};

// Runtime responses include `dataSource` even though the spec currently omits it
export const dataStreamResponseDataSourceTypecheck: DataStreamRepresentation = {
  dataSource: "DataConnector",
  dataLakeObjectInfo: {} as DataStreamRepresentation["dataLakeObjectInfo"],
  recordId: "a0A000000000001",
  status: "ACTIVE",
};

// Canonical raw field remains `datasource`
export const rawCanonicalDatasource: DataStreamInputRepresentation = {
  ...rawDataStreamInput,
  datasource: "DataConnector",
  dataLakeObjectInfo: dloInput,
};

// ── DataStreamCreateInput ──

declare const baseDataStreamInput: Omit<DataStreamInputRepresentation, "connectorInfo">;

// Single DLO + discriminated connector
export const dataStreamCreateInputTypecheck: DataStreamCreateInput = {
  ...baseDataStreamInput,
  connectorInfo: { connectorType: "IngestApi", connectorDetails: { events: ["Foo"], name: "bar" } },
  dataLakeObjectInfo: dloInput,
};

// Array DLO still works
export const dataStreamCreateInputArrayDlo: DataStreamCreateInput = {
  ...baseDataStreamInput,
  connectorInfo: { connectorType: "DataConnector", connectorDetails: { name: "my-connector" } },
  dataLakeObjectInfo: [dloInput],
};

// Canonical create payload field is `datasource` (matches API request bodies)
export const dataStreamCreateCanonicalDatasource: DataStreamCreateInput = {
  ...baseDataStreamInput,
  datasource: "DataConnector",
  connectorInfo: { connectorType: "DataConnector", connectorDetails: { name: "my-connector" } },
  dataLakeObjectInfo: dloInput,
};

// Raw ConnectorInputRepresentation accepted as escape hatch for unknown connectors
export const dataStreamCreateRawConnector: DataStreamCreateInput = {
  ...baseDataStreamInput,
  connectorInfo: { connectorType: "FutureConnector" } satisfies ConnectorInputRepresentation,
  dataLakeObjectInfo: dloInput,
};

// ── DataStreamConnectorInput: discriminated union narrowing ──

export const ingestApiConnector: DataStreamConnectorInput = {
  connectorType: "IngestApi",
  connectorDetails: { events: ["Foo"], name: "bar" },
};
export const dataConnector: DataStreamConnectorInput = {
  connectorType: "DataConnector",
  connectorDetails: { name: "my-dc" },
};

// Narrowing: connectorType check narrows connectorDetails
function assertNarrowing(input: DataStreamConnectorInput) {
  if (input.connectorType === "IngestApi") {
    const _details: IngestApiConnectorDetailsConfig = input.connectorDetails;
    void _details;
  }
}
void assertNarrowing;

// ── ConnectionCreateInput: discriminated by connectorType ──

export const connectionCreateIngestApi: ConnectionCreateInput = {
  connectorType: "IngestApi",
  label: "My Ingest API",
};

export const connectionCreateCrm: ConnectionCreateInput = {
  connectorType: "SalesforceDotCom",
  label: "My CRM",
  organizationId: "00D000000000000",
};

export const connectionCreateDataConnector: ConnectionCreateInput = {
  connectorType: "Snowflake",
  label: "My Snowflake",
  credentials: [{ paramName: "user", value: "admin" }],
  method: "Ingress",
  parameters: [{ paramName: "host", value: "example.snowflakecomputing.com" }],
};

export const connectionCreateStreamingApp: ConnectionCreateInput = {
  connectorType: "StreamingApp",
  label: "My Streaming App",
  streamingAppType: "WebApp",
};

// ── ConnectionUpdateInput: discriminated by connectorType ──

export const connectionUpdateMC: ConnectionUpdateInput = {
  connectorType: "SalesforceMarketingCloud",
  label: "Updated MC",
  addActivationBusinessUnits: ["bu1"],
};

export const connectionUpdateStreamingApp: ConnectionUpdateInput = {
  connectorType: "StreamingApp",
  label: "Updated SA",
  modules: [{ name: "myModule" }],
};

// ── Enum casing overrides: data streams (SCREAMING_SNAKE wire values) ──

// dataAccessMode / dataStreamType / lastRunStatus / status use the wire
// SCREAMING_SNAKE values, not the TitleCase forms the spec declared.
export const dataStreamDetailedEnumCasing: DataStreamDetailedRepresentation = {
  dataAccessMode: "DIRECT_ACCESS",
  dataStreamType: "INGESTAPI",
  lastRunStatus: "IN_PROGRESS",
  status: "NEEDS_ACTIVATION",
  isEnabled: true,
  capabilities: { ingest: true },
};

export const dataStreamDetailedBadCasing: DataStreamDetailedRepresentation = {
  // @ts-expect-error TitleCase forms are no longer valid (wire is SCREAMING_SNAKE)
  dataAccessMode: "Direct_Access",
};

// status on the list/get rep is also SCREAMING_SNAKE
export const dataStreamStatusCasing: DataStreamRepresentation = {
  status: "PROCESSING",
  dataLakeObjectInfo: {} as DataStreamRepresentation["dataLakeObjectInfo"],
  recordId: "a0A000000000001",
};

// ── Enum casing overrides: identity resolution (lowercase wire values) ──

export const irMatchMethodCasing: CdpIdentityResolutionMatchCriterionOutput = {
  matchMethodType: "exactnormalized",
};

export const irMatchMethodBadCasing: CdpIdentityResolutionMatchCriterionOutput = {
  // @ts-expect-error TitleCase is no longer valid (wire is lowercase)
  matchMethodType: "Fuzzy",
};

export const irRuleTypeCasing: CdpIdentityResolutionReconciliationRuleOutput = {
  ruleType: "sourcesequence",
};

export const irConfigTypeCasing: CdpIdentityResolutionOutputRepresentation = {
  configurationType: "household",
  secondaryDmo: "Account__dlm",
};

// ── QuerySql: positional-row `data` shape ──

// data is a JSON array of positional value arrays (scalar or null), not
// object-wrapped rows.
export const querySqlPositionalData: QuerySqlBaseRepresentation = {
  data: [
    ["alice", 42, true, null],
    ["bob", 7, false, null],
  ],
  returnedRows: 2,
};

export const querySqlBadRowShape: QuerySqlBaseRepresentation = {
  // @ts-expect-error object-wrapped rows are no longer the element type of `data`
  data: [{ row: ["alice"] }],
};

// ── DMO field input: dataType enum + category casing ──

// dataType uses the data-model field type set: no "DateOnly"; Currency /
// ArrayOfFloats / ArrayOfTexts are valid. isDynamicLookup is required.
export const dmoFieldDataType: DataObjectFieldInputRepresentation = {
  name: "amount__c",
  label: "Amount",
  description: "Order amount",
  dataType: "Currency",
  isDynamicLookup: false,
  isPrimaryKey: false,
};

export const dmoFieldArrayType: DataObjectFieldInputRepresentation = {
  name: "tags__c",
  label: "Tags",
  dataType: "ArrayOfTexts",
  isDynamicLookup: false,
  isPrimaryKey: false,
};

export const dmoFieldBadDataType: DataObjectFieldInputRepresentation = {
  name: "d__c",
  label: "D",
  // @ts-expect-error "DateOnly" is bogus and was removed from the enum
  dataType: "DateOnly",
  isDynamicLookup: false,
  isPrimaryKey: false,
};

// DMO category binds to the UPPERCASE enum
export const dmoCategoryCasing: DataModelObjectInputRepresentation = {
  category: "UNASSIGNED",
};
