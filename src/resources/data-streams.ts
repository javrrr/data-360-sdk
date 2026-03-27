import { DataStreamsServiceBase } from "../generated/services/data-streams.base.js";
import type { Simplify } from "../utils/type-helpers.js";
import type { RequestOptions } from "../core/types.js";
import type {
  ConnectorInputRepresentation,
  DataStreamConnectorInput,
  DataStreamInputRepresentation,
  DataStreamRepresentation,
} from "../schemas.js";

/**
 * Developer-friendly create input for data streams.
 *
 * - `connectorInfo` uses a discriminated union so `connectorType` narrows `connectorDetails`.
 *   For unknown / future connector types, pass `ConnectorInputRepresentation` directly.
 * - `dataLakeObjectInfo` accepts a single DLO object or an array (inherited from the
 *   overridden `DataStreamInputRepresentation`).
 * - `datasource` is the canonical create payload key (matches API request bodies).
 * - Wrapped in `Simplify` for readable IntelliSense hovers.
 */
export type DataStreamCreateInput = Simplify<
  Omit<DataStreamInputRepresentation, "connectorInfo"> & {
    connectorInfo: DataStreamConnectorInput | ConnectorInputRepresentation;
  }
>;

export class DataStreamsService extends DataStreamsServiceBase {
  /** Override create with discriminated union input type */
  override async create(body: DataStreamCreateInput, options?: RequestOptions): Promise<DataStreamRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }
}
