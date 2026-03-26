import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  DataLakeObjectInputRepresentation,
  DataStreamActionResponseRepresentation,
  DataStreamCollectionRepresentation,
  DataStreamDetailedRepresentation,
  DataStreamInputRepresentation,
  DataStreamPatchInputRepresentation,
  DataStreamRepresentation,
} from "../schemas.js";

/**
 * Runtime accepts either a single DLO object or an array for create payloads.
 * The generated OpenAPI type currently models this field as array-only.
 */
export type DataStreamCreateInput = Omit<DataStreamInputRepresentation, "dataLakeObjectInfo"> & {
  dataLakeObjectInfo: DataLakeObjectInputRepresentation | DataLakeObjectInputRepresentation[];
};

export class DataStreamsService extends BaseResource {
  protected readonly basePath = "/ssot/data-streams";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataStreamCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, { ...params, pageSizeParam: "limit" }, options);
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
    options?: RequestOptions & { query?: Record<string, string | number | boolean | undefined> },
  ): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, options);
  }

  async patch(recordIdOrDeveloperName: string, body: DataStreamPatchInputRepresentation, options?: RequestOptions): Promise<DataStreamRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, body, options);
  }
}
