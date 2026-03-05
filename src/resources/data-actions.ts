import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpDataActionCollectionRepresentation,
  CdpDataActionInputRepresentation,
  CdpDataActionOutputRepresentation,
} from "../schemas.js";

export class DataActionsService extends BaseResource {
  protected readonly basePath = "/ssot/data-actions";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<CdpDataActionCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async create(body: CdpDataActionInputRepresentation, options?: RequestOptions): Promise<CdpDataActionOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }
}
