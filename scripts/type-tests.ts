/**
 * Compile-time type assertions for generated schema intersections.
 *
 * This file is included in `npm run typecheck` via tsconfig includes.
 */
import type {
  CdpDataKitDeployBundleConfigForIngestApi,
  CdpDataKitDeployComponentConfigForDLO,
  ConnectorInputRepresentation,
  DataLakeObjectInputRepresentation,
  DataStreamInputRepresentation,
  IngestApiConnectorPatchDetailsConfig,
  SqlFormulaParametersInputRepresentation,
} from "../src/schemas.js";
import type { DataStreamCreateInput } from "../src/resources/data-streams.js";

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

declare const baseDataStreamInput: Omit<DataStreamInputRepresentation, "dataLakeObjectInfo">;
declare const dloInput: DataLakeObjectInputRepresentation;

export const dataStreamCreateInputTypecheck: DataStreamCreateInput = {
  ...baseDataStreamInput,
  dataLakeObjectInfo: dloInput,
};
