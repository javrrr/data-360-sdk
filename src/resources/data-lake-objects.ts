import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  DataLakeObjectCollectionRepresentation,
  DataLakeObjectInputRepresentation,
  DataLakeObjectPatchInputRepresentation,
  DataLakeObjectRepresentation,
} from "../schemas.js";

export class DataLakeObjectsService extends BaseResource {
  protected readonly basePath = "/ssot/data-lake-objects";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataLakeObjectCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(recordIdOrDeveloperName: string, options?: RequestOptions): Promise<DataLakeObjectRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`,
      options,
    );
  }

  async create(body: DataLakeObjectInputRepresentation, options?: RequestOptions): Promise<DataLakeObjectRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(recordIdOrDeveloperName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, options);
  }

  async patch(recordIdOrDeveloperName: string, body: DataLakeObjectPatchInputRepresentation, options?: RequestOptions): Promise<DataLakeObjectRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, body, options);
  }
}
