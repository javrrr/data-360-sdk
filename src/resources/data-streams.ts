import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  DataStreamActionResponseRepresentation,
  DataStreamCollectionRepresentation,
  DataStreamDetailedRepresentation,
  DataStreamInputRepresentation,
  DataStreamPatchInputRepresentation,
  DataStreamRepresentation,
} from "../schemas.js";

export class DataStreamsService extends BaseResource {
  protected readonly basePath = "/ssot/data-streams";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataStreamCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async create(body: DataStreamInputRepresentation, options?: RequestOptions): Promise<DataStreamRepresentation> {
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

  async delete(recordIdOrDeveloperName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, options);
  }

  async patch(recordIdOrDeveloperName: string, body: DataStreamPatchInputRepresentation, options?: RequestOptions): Promise<DataStreamRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, body, options);
  }
}
