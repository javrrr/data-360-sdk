/**
 * Compile-time type assertions for generated schema intersections.
 *
 * This file is included in `npm run typecheck` via tsconfig includes.
 */
import type {
  CdpDataKitDeployBundleConfigForIngestApi,
  CdpDataKitDeployComponentConfigForDLO,
  ConnectionCreateInput,
  ConnectionUpdateInput,
  ConnectorInputRepresentation,
  DataLakeObjectInputRepresentation,
  DataStreamConnectorInput,
  DataStreamInputRepresentation,
  DataStreamRepresentation,
  IngestApiConnectorDetailsConfig,
  IngestApiConnectorPatchDetailsConfig,
  SqlFormulaParametersInputRepresentation,
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

export const connectorPatchTypecheck: IngestApiConnectorPatchDetailsConfig = {
  mappings: [],
  syncSchema: true,
};

export const dataKitComponentTypecheck: CdpDataKitDeployComponentConfigForDLO = {
  apiName: "My_DLO",
  dataSpaceName: "default",
};

export const dataKitBundleTypecheck: CdpDataKitDeployBundleConfigForIngestApi = {
  connectorName: "MyConnector",
};

export const sqlFormulaParametersTypecheck: SqlFormulaParametersInputRepresentation = {
  fields: [],
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
  status: "Active",
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
