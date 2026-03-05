import { BaseResource } from "./base-resource.js";
import type { RequestOptions } from "../core/types.js";

export class UniversalIdLookupService extends BaseResource {
  protected readonly basePath = "/ssot/universalIdLookup";

  async lookup(
    entityName: string,
    dataSourceId: string,
    dataSourceObjectId: string,
    sourceRecordId: string,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(entityName)}/${encodeURIComponent(dataSourceId)}/${encodeURIComponent(dataSourceObjectId)}/${encodeURIComponent(sourceRecordId)}`,
      options,
    );
  }
}
