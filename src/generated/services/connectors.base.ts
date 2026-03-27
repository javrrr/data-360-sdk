/**
 * Auto-generated base service for Connectors.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/connectors.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  ConnectorInfoCollectionRepresentation,
  ConnectorInfoRepresentation,
  ConnectorMetadataRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface ConnectorsListParams {
  /** Number of fields to include in the results. Specify one of these values: */
  fieldGroup?: string;
  /** Field names by which to filter results. Specify a comma-separated list of values of the form `field=value`. For example, `name=AwsRdsPostgres` returns connectors whose name matches `AwsRdsPostgres`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class ConnectorsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/connectors";

  /** GET /ssot/connectors — Get connectors */
  async list(params?: PaginationParams & ConnectorsListParams, options?: RequestOptions): Promise<ConnectorInfoCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** GET /ssot/connectors/{connectorType} — Get connector metadata */
  async get(connectorType: string, options?: RequestOptions): Promise<ConnectorMetadataRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(connectorType)}`, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & ConnectorsListParams, options?: RequestOptions): AsyncGenerator<ConnectorInfoRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ConnectorInfoRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
