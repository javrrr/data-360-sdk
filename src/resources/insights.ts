import { BaseResource } from "./base-resource.js";
import type {
  CdpQueryMetadataOutputRepresentation,
  CdpQueryOutputRepresentation,
} from "../schemas.js";
import type { RequestOptions } from "../core/types.js";

export class InsightsService extends BaseResource {
  protected readonly basePath = "/ssot/insight";

  async getMetadata(options?: RequestOptions): Promise<CdpQueryMetadataOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata`, options);
  }

  async getCalculatedInsight(ciName: string, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/calculated-insights/${encodeURIComponent(ciName)}`,
      options,
    );
  }

  async listMetadata(ciName: string, options?: RequestOptions): Promise<CdpQueryMetadataOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/${encodeURIComponent(ciName)}`, options);
  }
}
