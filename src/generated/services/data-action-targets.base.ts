/**
 * Auto-generated base service for Data Action Targets.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-action-targets.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CdpDataActionTargetCollectionRepresentation,
  CdpDataActionTargetInputRepresentation,
  CdpDataActionTargetOutputRepresentation,
  CdpDataActionTargetSigningKeyOutputRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class DataActionTargetsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-action-targets";

  /** GET /ssot/data-action-targets — Get data action targets */
  async list(params?: PaginationParams, options?: RequestOptions): Promise<CdpDataActionTargetCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "batchSize" }),
    });
  }

  /** POST /ssot/data-action-targets — Create data action target */
  async create(body: CdpDataActionTargetInputRepresentation, options?: RequestOptions): Promise<CdpDataActionTargetOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/data-action-targets/{apiName} — Delete data action target */
  async delete(apiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(apiName)}`, options);
  }

  /** GET /ssot/data-action-targets/{apiName} — Get data action target */
  async get(apiName: string, options?: RequestOptions): Promise<CdpDataActionTargetOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(apiName)}`, options);
  }

  /** POST /ssot/data-action-targets/{apiName}/signing-key — Generate data action target signing key */
  async createSigningKey(apiName: string, options?: RequestOptions): Promise<CdpDataActionTargetSigningKeyOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(apiName)}/signing-key`, undefined, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<CdpDataActionTargetOutputRepresentation, void, undefined> {
    yield* this.paginate<CdpDataActionTargetOutputRepresentation>(this.basePath, { ...params, pageSizeParam: "batchSize" }, options);
  }
}
