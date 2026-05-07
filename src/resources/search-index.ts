import { SearchIndexServiceBase } from "../generated/services/search-index.base.js";
import type { RequestOptions } from "../core/types.js";

export class SearchIndexService extends SearchIndexServiceBase {
  /**
   * DELETE /ssot/search-index/{searchIndexApiNameOrId} — Delete semantic search.
   *
   * Path-parameter quirk: this endpoint accepts the platform-assigned ID
   * (e.g. `18l...`) but NOT the developer name. A name-keyed delete returns
   * 404 even when the search index exists. Always pass the value returned
   * as `id` from the create response (or from the list response's
   * `semanticSearchDefinitionDetails[].id`), not the `developerName`.
   *
   * Asymmetric vs. GET, which accepts either the ID or the developer name.
   */
  override async delete(searchIndexApiNameOrId: string, options?: RequestOptions): Promise<void> {
    return super.delete(searchIndexApiNameOrId, options);
  }
}
