import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  ConnectorInfoCollectionRepresentation,
  ConnectorMetadataRepresentation,
} from "../schemas.js";

export class ConnectorsService extends BaseResource {
  protected readonly basePath = "/ssot/connectors";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<ConnectorInfoCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(connectorType: string, options?: RequestOptions): Promise<ConnectorMetadataRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(connectorType)}`,
      options,
    );
  }
}
