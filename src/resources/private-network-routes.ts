import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  PrivateNetworkRouteCollectionRepresentation,
  PrivateNetworkRouteInputRepresentation,
  PrivateNetworkRouteRepresentation,
} from "../schemas.js";

export class PrivateNetworkRoutesService extends BaseResource {
  protected readonly basePath = "/ssot/private-network-routes";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<PrivateNetworkRouteCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  async *listAll(
    params?: PaginationParams,
    options?: RequestOptions,
  ): AsyncGenerator<PrivateNetworkRouteRepresentation, void, undefined> {
    yield* this.paginate<PrivateNetworkRouteRepresentation>(
      this.basePath,
      { ...params, pageSizeParam: "limit" },
      options,
    );
  }

  async get(routeIdOrName: string, options?: RequestOptions): Promise<PrivateNetworkRouteRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(routeIdOrName)}`,
      options,
    );
  }

  async create(body: PrivateNetworkRouteInputRepresentation, options?: RequestOptions): Promise<PrivateNetworkRouteCollectionRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(routeIdOrName: string, options?: RequestOptions & { query?: Record<string, string | number | boolean | undefined> }): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(routeIdOrName)}`, options);
  }
}
