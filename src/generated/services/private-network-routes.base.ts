/**
 * Auto-generated base service for Private Network Routes.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/private-network-routes.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  PrivateNetworkRouteCollectionRepresentation,
  PrivateNetworkRouteInputRepresentation,
  PrivateNetworkRouteRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class PrivateNetworkRoutesServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/private-network-routes";

  /** GET /ssot/private-network-routes — Get private network routes */
  async list(params?: PaginationParams, options?: RequestOptions): Promise<PrivateNetworkRouteCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** POST /ssot/private-network-routes — Create private network route */
  async create(body: PrivateNetworkRouteInputRepresentation, options?: RequestOptions): Promise<PrivateNetworkRouteCollectionRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/private-network-routes/{routeIdOrName} — Delete private network route */
  async delete(routeIdOrName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(routeIdOrName)}`, options);
  }

  /** GET /ssot/private-network-routes/{routeIdOrName} — Get private network route */
  async get(routeIdOrName: string, options?: RequestOptions): Promise<PrivateNetworkRouteRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(routeIdOrName)}`, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<PrivateNetworkRouteRepresentation, void, undefined> {
    yield* this.paginate<PrivateNetworkRouteRepresentation>(this.basePath, { ...params, pageSizeParam: "limit" }, options);
  }
}
