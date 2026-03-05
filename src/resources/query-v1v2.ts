import { BaseResource } from "./base-resource.js";
import type {
  CdpQueryInputRepresentation,
  CdpQueryOutputRepresentation,
  CdpQueryOutputV2Representation,
} from "../schemas.js";
import type { RequestOptions } from "../core/types.js";

export class QueryV1V2Service extends BaseResource {
  protected readonly basePath = "/ssot";

  async executeV1(
    body: CdpQueryInputRepresentation,
    options?: RequestOptions,
  ): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/query`,
      body,
      options,
    );
  }

  async executeV2(
    body: CdpQueryInputRepresentation,
    options?: RequestOptions,
  ): Promise<CdpQueryOutputV2Representation> {
    return this.httpClient.post(
      `${this.basePath}/queryv2`,
      body,
      options,
    );
  }

  async getNextBatch(nextBatchId: string, options?: RequestOptions): Promise<CdpQueryOutputV2Representation> {
    return this.httpClient.get(
      `${this.basePath}/queryv2/${encodeURIComponent(nextBatchId)}`,
      options,
    );
  }
}
