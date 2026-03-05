import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class ActivationTargetsService extends BaseResource {
  protected readonly basePath = "/ssot/activation-targets";

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

  async get(id: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}`,
      options,
    );
  }

  async create(body: Record<string, unknown>, options?: RequestOptions) {
    return this.httpClient.post(this.basePath, body, options);
  }

  async update(
    id: string,
    body: Record<string, unknown>,
    options?: RequestOptions,
  ) {
    return this.httpClient.patch(
      `${this.basePath}/${encodeURIComponent(id)}`,
      body,
      options,
    );
  }
}
