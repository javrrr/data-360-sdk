import { BaseResource } from "./base-resource.js";
import type { RequestOptions } from "../core/types.js";

export class InsightsService extends BaseResource {
  protected readonly basePath = "/ssot/insight";

  async getMetadata(options?: RequestOptions) {
    return this.httpClient.get(`${this.basePath}/metadata`, options);
  }

  async getCalculatedInsight(ciName: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/calculated-insights/${encodeURIComponent(ciName)}`,
      options,
    );
  }
}
