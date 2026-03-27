import { QueryV1V2ServiceBase } from "../generated/services/query-v1v2.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  CdpQueryInputRepresentation,
  CdpQueryOutputRepresentation,
  CdpQueryOutputV2Representation,
} from "../schemas.js";

export class QueryV1V2Service extends QueryV1V2ServiceBase {
  /** Alias for create — execute a V1 query. */
  async executeV1(body: CdpQueryInputRepresentation, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.create(body, undefined, options);
  }

  /** Alias for createV2 — execute a V2 query. */
  async executeV2(body: CdpQueryInputRepresentation, options?: RequestOptions): Promise<CdpQueryOutputV2Representation> {
    return this.createV2(body, undefined, options);
  }

  /** Alias for getV2 — get next batch of V2 query results. */
  async getNextBatch(nextBatchId: string, options?: RequestOptions): Promise<CdpQueryOutputV2Representation> {
    return this.getV2(nextBatchId, undefined, options);
  }
}
