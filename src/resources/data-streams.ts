import { BaseResource } from "./base-resource.js";
import type { Simplify } from "../utils/type-helpers.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  ConnectorInputRepresentation,
  DataStreamActionResponseRepresentation,
  DataStreamCollectionRepresentation,
  DataStreamConnectorInput,
  DataStreamDetailedRepresentation,
  DataStreamInputRepresentation,
  DataStreamPatchInputRepresentation,
  DataStreamRepresentation,
} from "../schemas.js";

export interface DataStreamDeleteOptions {
  /** Whether to delete the associated data lake objects (DLOs). Defaults to `false`. */
  shouldDeleteDataLakeObject?: boolean;
  [key: string]: string | number | boolean | undefined;
}

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

export class DataStreamsService extends BaseResource {
  protected readonly basePath = "/ssot/data-streams";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataStreamCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  async *listAll(
    params?: PaginationParams,
    options?: RequestOptions,
  ): AsyncGenerator<DataStreamRepresentation, void, undefined> {
    yield* this.paginate<DataStreamRepresentation>(
      this.basePath,
      { ...params, pageSizeParam: "limit" },
      options,
    );
  }

  async create(body: DataStreamCreateInput, options?: RequestOptions): Promise<DataStreamRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async get(recordIdOrDeveloperName: string, options?: RequestOptions): Promise<DataStreamDetailedRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`,
      options,
    );
  }

  async run(recordIdOrDeveloperName: string, options?: RequestOptions): Promise<DataStreamActionResponseRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}/actions/run`,
      undefined,
      options,
    );
  }

  async delete(
    recordIdOrDeveloperName: string,
    options?: RequestOptions & { query?: DataStreamDeleteOptions },
  ): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, options);
  }

  async patch(recordIdOrDeveloperName: string, body: DataStreamPatchInputRepresentation, options?: RequestOptions): Promise<DataStreamRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, body, options);
  }
}
