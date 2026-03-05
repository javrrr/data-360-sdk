import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class DocumentAiService extends BaseResource {
  protected readonly basePath = "/ssot/document-processing";

  async extractData(
    body: Record<string, unknown>,
    options?: RequestOptions,
  ) {
    return this.httpClient.post(
      `${this.basePath}/actions/extract-data`,
      body,
      options,
    );
  }

  async generateSchema(
    body: Record<string, unknown>,
    options?: RequestOptions,
  ) {
    return this.httpClient.post(
      `${this.basePath}/actions/generate-schema`,
      body,
      options,
    );
  }

  async listConfigurations(
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(`${this.basePath}/configurations`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async createConfiguration(
    body: Record<string, unknown>,
    options?: RequestOptions,
  ) {
    return this.httpClient.post(
      `${this.basePath}/configurations`,
      body,
      options,
    );
  }

  async getGlobalConfig(options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/global-config`,
      options,
    );
  }
}
