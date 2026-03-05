import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class DataStreamsService extends BaseResource {
  protected readonly basePath = "/ssot/data-streams";

  async list(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(recordIdOrDeveloperName: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`,
      options,
    );
  }

  async run(recordIdOrDeveloperName: string, options?: RequestOptions) {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}/actions/run`,
      undefined,
      options,
    );
  }
}
