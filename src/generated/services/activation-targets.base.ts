/**
 * Auto-generated base service for Activation Targets.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/activation-targets.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  ActivationExternalPlatformCollectionRepresentation,
  ActivationExternalPlatformRepresentation,
  ActivationTargetCollectionRepresentation,
  ActivationTargetInputRepresentation,
  ActivationTargetRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface ActivationTargetsListParams {
  /** Filter the result set to a more narrow scope or specific type. These filters are supported: */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class ActivationTargetsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/activation-targets";

  /** GET /ssot/activation-external-platforms — Get activation external platforms */
  async listExternalPlatforms(params?: PaginationParams, options?: RequestOptions): Promise<ActivationExternalPlatformCollectionRepresentation> {
    return this.httpClient.get(`/ssot/activation-external-platforms`, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** GET /ssot/activation-targets — Get activation targets */
  async list(params?: PaginationParams & ActivationTargetsListParams, options?: RequestOptions): Promise<ActivationTargetCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** POST /ssot/activation-targets — Create activation target */
  async create(body: ActivationTargetInputRepresentation, options?: RequestOptions): Promise<ActivationTargetRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** GET /ssot/activation-targets/{activationTargetId} — Get activation target */
  async get(activationTargetId: string, options?: RequestOptions): Promise<ActivationTargetRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationTargetId)}`, options);
  }

  /** PATCH /ssot/activation-targets/{activationTargetId} — Update activation target */
  async patch(activationTargetId: string, body: ActivationTargetInputRepresentation, options?: RequestOptions): Promise<ActivationTargetRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(activationTargetId)}`, body, options);
  }

  /** Async generator yielding all items from listExternalPlatforms */
  async *listAllExternalPlatforms(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<ActivationExternalPlatformRepresentation, void, undefined> {
    yield* this.paginate<ActivationExternalPlatformRepresentation>(`/ssot/activation-external-platforms`, { ...params, pageSizeParam: "limit" }, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & ActivationTargetsListParams, options?: RequestOptions): AsyncGenerator<ActivationTargetRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ActivationTargetRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
