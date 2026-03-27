/**
 * Auto-generated base service for Search Index.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/search-index.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  SemanticSearchConfigRepresentation,
  SemanticSearchDefDetailRepresentation,
  SemanticSearchDefDetailsRepresentation,
  SemanticSearchInputRepresentation,
  SemanticSearchRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class SearchIndexServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/search-index";

  /** GET /ssot/search-index — Get semantic search definition details */
  async list(options?: RequestOptions): Promise<SemanticSearchDefDetailsRepresentation> {
    return this.httpClient.get(this.basePath, options);
  }

  /** POST /ssot/search-index — Create semantic search */
  async create(body: SemanticSearchInputRepresentation, options?: RequestOptions): Promise<SemanticSearchRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/search-index/{searchIndexApiNameOrId} — Delete semantic search */
  async delete(searchIndexApiNameOrId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(searchIndexApiNameOrId)}`, options);
  }

  /** GET /ssot/search-index/{searchIndexApiNameOrId} — Get semantic search */
  async get(searchIndexApiNameOrId: string, options?: RequestOptions): Promise<SemanticSearchDefDetailRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(searchIndexApiNameOrId)}`, options);
  }

  /** PATCH /ssot/search-index/{searchIndexApiNameOrId} — Update semantic search */
  async patch(searchIndexApiNameOrId: string, body: SemanticSearchInputRepresentation, options?: RequestOptions): Promise<SemanticSearchRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(searchIndexApiNameOrId)}`, body, options);
  }

  /** GET /ssot/search-index/config — Get semantic search configuration */
  async getConfig(options?: RequestOptions): Promise<SemanticSearchConfigRepresentation> {
    return this.httpClient.get(`${this.basePath}/config`, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<SemanticSearchDefDetailRepresentation, void, undefined> {
    yield* this.paginate<SemanticSearchDefDetailRepresentation>(this.basePath, { ...params, pageSizeParam: "batchSize" }, options);
  }
}
