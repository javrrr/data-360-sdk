/**
 * Auto-generated base service for Activation External Platforms.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/activation-external-platforms.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  ActivationExternalPlatformCollectionRepresentation,
  ActivationExternalPlatformRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface ActivationExternalPlatformsGetParams {
  /** Action source used, together with `eventName`, to scope the returned attribute configuration. */
  actionSource?: string;
  /** Standard event name used, together with `actionSource`, to scope the returned attribute configuration. For example, the platform's standard event. */
  eventName?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class ActivationExternalPlatformsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/activation-external-platforms";

  /** GET /ssot/activation-external-platforms — Get activation external platforms */
  async list(params?: PaginationParams, options?: RequestOptions): Promise<ActivationExternalPlatformCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** GET /ssot/activation-external-platforms/{idOrName} — Get activation external platform */
  async get(idOrName: string, params?: ActivationExternalPlatformsGetParams, options?: RequestOptions): Promise<ActivationExternalPlatformRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(idOrName)}`, { ...options, query: params });
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<ActivationExternalPlatformRepresentation, void, undefined> {
    yield* this.paginate<ActivationExternalPlatformRepresentation>(this.basePath, { ...params, pageSizeParam: "limit" }, options);
  }
}
