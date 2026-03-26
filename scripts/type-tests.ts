/**
 * Compile-time type assertions for generated schema intersections.
 *
 * This file is included in `npm run typecheck` via tsconfig includes.
 */
import type {
  CdpDataKitDeployBundleConfigForIngestApi,
  CdpDataKitDeployComponentConfigForDLO,
  ConnectorInputRepresentation,
  IngestApiConnectorPatchDetailsConfig,
  SqlFormulaParametersInputRepresentation,
} from "../src/schemas.js";

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
