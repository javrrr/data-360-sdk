import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class SearchIndexService extends BaseResource {
  protected readonly basePath = "/ssot/search-index";

  async list(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(apiNameOrId: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(apiNameOrId)}`,
      options,
    );
  }

  async getConfig(options?: RequestOptions) {
    return this.httpClient.get(`${this.basePath}/config`, options);
  }
}
