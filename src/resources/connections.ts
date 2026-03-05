import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class ConnectionsService extends BaseResource {
  protected readonly basePath = "/ssot/connections";

  async list(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
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

  async getDatabaseSchemas(id: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}/database-schemas`,
      options,
    );
  }

  async getDatabases(id: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}/databases`,
      options,
    );
  }

  async getObjects(
    id: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}/objects`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async getObjectFields(
    connectionId: string,
    resourceName: string,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(connectionId)}/objects/${encodeURIComponent(resourceName)}/fields`,
      options,
    );
  }

  async test(body: Record<string, unknown>, options?: RequestOptions) {
    return this.httpClient.post(
      `${this.basePath}/actions/test`,
      body,
      options,
    );
  }

  async testById(id: string, options?: RequestOptions) {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(id)}/actions/test`,
      undefined,
      options,
    );
  }
}
