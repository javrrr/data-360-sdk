import { UniversalIdLookupServiceBase } from "../generated/services/universal-id-lookup.base.js";
import type { RequestOptions } from "../core/types.js";
import type { CdpQueryDataOutputRepresentation } from "../schemas.js";

export class UniversalIdLookupService extends UniversalIdLookupServiceBase {
  /** Alias for get with friendlier parameter order. */
  async lookup(
    entityName: string,
    dataSourceId: string,
    dataSourceObjectId: string,
    sourceRecordId: string,
    options?: RequestOptions,
  ): Promise<CdpQueryDataOutputRepresentation> {
    return this.get(sourceRecordId, dataSourceId, dataSourceObjectId, entityName, options);
  }
}
