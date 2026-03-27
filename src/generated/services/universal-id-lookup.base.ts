/**
 * Auto-generated base service for Universal ID Lookup.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/universal-id-lookup.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { RequestOptions } from "../../core/types.js";
import type {
  CdpQueryDataOutputRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class UniversalIdLookupServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/universalIdLookup";

  /** GET /ssot/universalIdLookup/{entityName}/{dataSourceId}/{dataSourceObjectId}/{sourceRecordId} — Lookup universal ID */
  async get(sourceRecordId: string, dataSourceId: string, dataSourceObjectId: string, entityName: string, options?: RequestOptions): Promise<CdpQueryDataOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(entityName)}/${encodeURIComponent(dataSourceId)}/${encodeURIComponent(dataSourceObjectId)}/${encodeURIComponent(sourceRecordId)}`, options);
  }
}
