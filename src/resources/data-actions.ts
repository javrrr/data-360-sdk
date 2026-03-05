import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class DataActionsService extends BaseResource {
  protected readonly basePath = "/ssot/data-actions";

  async list(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async create(body: Record<string, unknown>, options?: RequestOptions) {
    return this.httpClient.post(this.basePath, body, options);
  }
}
