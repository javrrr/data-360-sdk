import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  SemanticSearchConfigRepresentation,
  SemanticSearchDefDetailRepresentation,
  SemanticSearchDefDetailsRepresentation,
  SemanticSearchInputRepresentation,
  SemanticSearchRepresentation,
} from "../schemas.js";

export class SearchIndexService extends BaseResource {
  protected readonly basePath = "/ssot/search-index";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<SemanticSearchDefDetailsRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(apiNameOrId: string, options?: RequestOptions): Promise<SemanticSearchDefDetailRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(apiNameOrId)}`,
      options,
    );
  }

  async getConfig(options?: RequestOptions): Promise<SemanticSearchConfigRepresentation> {
    return this.httpClient.get(`${this.basePath}/config`, options);
  }

  async create(body: SemanticSearchInputRepresentation, options?: RequestOptions): Promise<SemanticSearchRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(searchIndexApiNameOrId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(searchIndexApiNameOrId)}`, options);
  }

  async patch(searchIndexApiNameOrId: string, body: SemanticSearchInputRepresentation, options?: RequestOptions): Promise<SemanticSearchRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(searchIndexApiNameOrId)}`, body, options);
  }
}
