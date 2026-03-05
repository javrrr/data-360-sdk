import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class DataSpacesService extends BaseResource {
  protected readonly basePath = "/ssot/data-spaces";

  async list(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(idOrName: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(idOrName)}`,
      options,
    );
  }

  async listMembers(
    idOrName: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(idOrName)}/members`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async addMember(
    idOrName: string,
    body: Record<string, unknown>,
    options?: RequestOptions,
  ) {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(idOrName)}/members`,
      body,
      options,
    );
  }
}
