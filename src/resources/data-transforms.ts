import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class DataTransformsService extends BaseResource {
  protected readonly basePath = "/ssot/data-transforms";

  async list(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(nameOrId: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(nameOrId)}`,
      options,
    );
  }

  async run(nameOrId: string, options?: RequestOptions) {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(nameOrId)}/actions/run`,
      undefined,
      options,
    );
  }

  async cancel(nameOrId: string, options?: RequestOptions) {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(nameOrId)}/actions/cancel`,
      undefined,
      options,
    );
  }

  async retry(nameOrId: string, options?: RequestOptions) {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(nameOrId)}/actions/retry`,
      undefined,
      options,
    );
  }

  async getRunHistory(
    nameOrId: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(nameOrId)}/run-history`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }
}
