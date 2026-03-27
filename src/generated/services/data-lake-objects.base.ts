/**
 * Auto-generated base service for Data Lake Objects.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-lake-objects.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  DataLakeObjectCollectionRepresentation,
  DataLakeObjectInputRepresentation,
  DataLakeObjectPatchInputRepresentation,
  DataLakeObjectRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class DataLakeObjectsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-lake-objects";

  /** GET /ssot/data-lake-objects — Get data lake objects */
  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataLakeObjectCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** POST /ssot/data-lake-objects — Create data lake object */
  async create(body: DataLakeObjectInputRepresentation, options?: RequestOptions): Promise<DataLakeObjectRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/data-lake-objects/{recordIdOrDeveloperName} — Delete data lake object */
  async delete(recordIdOrDeveloperName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, options);
  }

  /** GET /ssot/data-lake-objects/{recordIdOrDeveloperName} — Get data lake object */
  async get(recordIdOrDeveloperName: string, options?: RequestOptions): Promise<DataLakeObjectRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, options);
  }

  /** PATCH /ssot/data-lake-objects/{recordIdOrDeveloperName} — Update data lake object */
  async patch(recordIdOrDeveloperName: string, body: DataLakeObjectPatchInputRepresentation, options?: RequestOptions): Promise<DataLakeObjectRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, body, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<DataLakeObjectRepresentation, void, undefined> {
    yield* this.paginate<DataLakeObjectRepresentation>(this.basePath, { ...params, pageSizeParam: "limit" }, options);
  }
}
