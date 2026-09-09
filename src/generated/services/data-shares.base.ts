/**
 * Auto-generated base service for Data Shares.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-shares.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  DataShareCollectionRepresentation,
  DataShareInputRepresentation,
  DataShareLinkActionInputRepresentation,
  DataSharePatchInputRepresentation,
  DataShareRepresentation,
  DataShareTargetCollectionRepresentation,
  DataShareTargetInputRepresentation,
  DataShareTargetRepresentation,
  DataShareUnlinkActionInputRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class DataSharesServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-share";

  /** POST /ssot/data-share — Create data share */
  async create(body: DataShareInputRepresentation, options?: RequestOptions): Promise<DataShareRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** POST /ssot/data-share-target — Create data share target */
  async createTarget(body: DataShareTargetInputRepresentation, options?: RequestOptions): Promise<DataShareTargetRepresentation> {
    return this.httpClient.post(`${this.basePath}-target`, body, options);
  }

  /** DELETE /ssot/data-share-target/{nameOrId} — Delete data share target */
  async deleteTarget(nameOrId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}-target/${encodeURIComponent(nameOrId)}`, options);
  }

  /** GET /ssot/data-share-target/{nameOrId} — Get data share target */
  async getTarget(nameOrId: string, options?: RequestOptions): Promise<DataShareTargetRepresentation> {
    return this.httpClient.get(`${this.basePath}-target/${encodeURIComponent(nameOrId)}`, options);
  }

  /** GET /ssot/data-share-targets/{targetType} — Get data share targets */
  async getTargets(targetType: string, options?: RequestOptions): Promise<DataShareTargetCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}-targets/${encodeURIComponent(targetType)}`, options);
  }

  /** DELETE /ssot/data-share/{nameOrId} — Delete data share */
  async delete(nameOrId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(nameOrId)}`, options);
  }

  /** GET /ssot/data-share/{nameOrId} — Get data share */
  async get(nameOrId: string, options?: RequestOptions): Promise<DataShareRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(nameOrId)}`, options);
  }

  /** PATCH /ssot/data-share/{nameOrId} — Update data share */
  async patch(nameOrId: string, body: DataSharePatchInputRepresentation, options?: RequestOptions): Promise<DataShareRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(nameOrId)}`, body, options);
  }

  /** POST /ssot/data-share/{nameOrId}/actions/link — Link data share with target */
  async link(nameOrId: string, body: DataShareLinkActionInputRepresentation, options?: RequestOptions): Promise<DataShareRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(nameOrId)}/actions/link`, body, options);
  }

  /** POST /ssot/data-share/{nameOrId}/actions/unlink — Unlink data share with target */
  async unlink(nameOrId: string, body: DataShareUnlinkActionInputRepresentation, options?: RequestOptions): Promise<DataShareRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(nameOrId)}/actions/unlink`, body, options);
  }

  /** GET /ssot/data-shares — Get data shares */
  async listS(params?: PaginationParams, options?: RequestOptions): Promise<DataShareCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}s`, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** Async generator yielding all items from listS */
  async *listAllS(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<DataShareRepresentation, void, undefined> {
    yield* this.paginate<DataShareRepresentation>(`${this.basePath}s`, { ...params, pageSizeParam: "limit" }, options);
  }
}
