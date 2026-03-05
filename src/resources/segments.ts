import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class SegmentsService extends BaseResource {
  protected readonly basePath = "/ssot/segments";

  async list(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(segmentApiNameOrId: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(segmentApiNameOrId)}`,
      options,
    );
  }

  async count(segmentApiName: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(segmentApiName)}/actions/count`,
      options,
    );
  }

  async listMembers(
    segmentApiName: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(segmentApiName)}/members`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async publish(segmentApiName: string, options?: RequestOptions) {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(segmentApiName)}/actions/publish`,
      undefined,
      options,
    );
  }

  async deactivate(segmentApiName: string, options?: RequestOptions) {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(segmentApiName)}/actions/deactivate`,
      undefined,
      options,
    );
  }
}
