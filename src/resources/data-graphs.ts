import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class DataGraphsService extends BaseResource {
  protected readonly basePath = "/ssot/data-graphs";

  async list(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(name: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(name)}`,
      options,
    );
  }

  async getData(
    entityName: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(
      `${this.basePath}/data/${encodeURIComponent(entityName)}`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async refresh(name: string, options?: RequestOptions) {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(name)}/actions/refresh`,
      undefined,
      options,
    );
  }
}
