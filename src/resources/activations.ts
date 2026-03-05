import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class ActivationsService extends BaseResource {
  protected readonly basePath = "/ssot/activations";

  async list(
    params?: PaginationParams & { filters?: string },
    options?: RequestOptions,
  ) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery(params), filters: params?.filters },
    });
  }

  async *listAll(
    params?: PaginationParams & { filters?: string },
    options?: RequestOptions,
  ) {
    yield* this.paginate(this.basePath, params, options);
  }

  async create(body: Record<string, unknown>, options?: RequestOptions) {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(id: string, options?: RequestOptions) {
    return this.httpClient.delete(
      `${this.basePath}/${encodeURIComponent(id)}`,
      options,
    );
  }

  async getData(id: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}/data`,
      options,
    );
  }
}
