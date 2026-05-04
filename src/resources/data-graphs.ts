import { DataGraphsServiceBase } from "../generated/services/data-graphs.base.js";
import type { DataGraphsGetMetadataParams } from "../generated/services/data-graphs.base.js";
import type { RequestOptions } from "../core/types.js";
import type { CdpQueryDataGraphMetadataRepresentation } from "../schemas.js";

export class DataGraphsService extends DataGraphsServiceBase {
  /**
   * Convenience wrapper over `getMetadata` — the Data 360 Connect API does not
   * expose a dedicated `GET /ssot/data-graphs` endpoint, so enumeration goes
   * through `GET /ssot/data-graphs/metadata` (`getMetadata`). This helper
   * unwraps `dataGraphMetadata` and returns the array of descriptors
   * directly, mirroring the shape other `.list()` methods return.
   *
   * Real-time and standard data graphs are returned in the same list and are
   * distinguished by fields on each descriptor, not by endpoint.
   */
  async list(
    params?: DataGraphsGetMetadataParams,
    options?: RequestOptions,
  ): Promise<CdpQueryDataGraphMetadataRepresentation[]> {
    const res = await this.getMetadata(params, options);
    return res.dataGraphMetadata ?? [];
  }

  /** Async iterator over `list()` — emitted for parity with other services. */
  async *listAll(
    params?: DataGraphsGetMetadataParams,
    options?: RequestOptions,
  ): AsyncGenerator<CdpQueryDataGraphMetadataRepresentation, void, undefined> {
    for (const item of await this.list(params, options)) {
      yield item;
    }
  }
}
