import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class MachineLearningService extends BaseResource {
  protected readonly basePath = "/ssot/machine-learning";

  async listAlerts(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(`${this.basePath}/alerts`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async createAlert(
    body: Record<string, unknown>,
    options?: RequestOptions,
  ) {
    return this.httpClient.post(
      `${this.basePath}/alerts`,
      body,
      options,
    );
  }

  async listConfiguredModels(
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(`${this.basePath}/configured-models`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async listModelArtifacts(
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(`${this.basePath}/model-artifacts`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async predict(
    body: Record<string, unknown>,
    options?: RequestOptions,
  ) {
    return this.httpClient.post(
      `${this.basePath}/predict`,
      body,
      options,
    );
  }

  async listSetupVersions(
    modelSetupIdOrName: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(
      `${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }
}
