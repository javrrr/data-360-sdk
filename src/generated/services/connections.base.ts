/**
 * Auto-generated base service for Connections.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/connections.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  ConnectionCollectionRepresentation,
  ConnectionCommandActionInputRepresentation,
  ConnectionCommandActionRepresentation,
  ConnectionCommandExistingActionInputRepresentation,
  ConnectionDatabaseCollectionRepresentation,
  ConnectionDbSchemaCollectionInputRepresentation,
  ConnectionDbSchemaCollectionRepresentation,
  ConnectionFieldCollectionInputRepresentation,
  ConnectionFieldCollectionRepresentation,
  ConnectionInputRepresentation,
  ConnectionObjectCollectionInputRepresentation,
  ConnectionObjectCollectionRepresentation,
  ConnectionPatchInputRepresentation,
  ConnectionPreviewInputRepresentation,
  ConnectionPreviewRepresentation,
  ConnectionRepresentation,
  ConnectionSchemaActionResponseRepresentation,
  ConnectionSchemaCollectionInputRepresentation,
  ConnectionSchemaCollectionRepresentation,
  ConnectionSchemaRepresentation,
  ConnectionSitemapInputRepresentation,
  ConnectionSitemapRepresentation,
  ConnectionTestActionRepresentation,
  ConnectionTestInputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface ConnectionsListParams {
  /** Type of the connector. For example, `AwsRdsPostgres`, `AzureBlob`, `Databricks`, `Gcs`, `IngestApi`, `SalesforceDotCom`, `SalesforceMarketingCloud`, `Sftp`, `StreamingApp`, and so forth. */
  connectorType: string;
  /** Developer name of the connector. */
  devName?: string;
  /** Label or public-facing name to filter on. */
  label?: string;
  /** Organization ID to filter on. */
  organizationId?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class ConnectionsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/connections";

  /** GET /ssot/connections — Get connections */
  async list(params: PaginationParams & ConnectionsListParams, options?: RequestOptions): Promise<ConnectionCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/connections — Create connection */
  async create(body: ConnectionInputRepresentation, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/connections/{connectionId} — Delete connection */
  async delete(connectionId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(connectionId)}`, options);
  }

  /** GET /ssot/connections/{connectionId} — Get connection */
  async get(connectionId: string, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(connectionId)}`, options);
  }

  /** PATCH /ssot/connections/{connectionId} — Update connection */
  async patch(connectionId: string, body: ConnectionPatchInputRepresentation, options?: RequestOptions): Promise<void> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(connectionId)}`, body, options);
  }

  /** PUT /ssot/connections/{connectionId} — Replace connection */
  async put(connectionId: string, body: ConnectionInputRepresentation, options?: RequestOptions): Promise<void> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(connectionId)}`, body, options);
  }

  /** POST /ssot/connections/{connectionId}/actions/{command} — Run existing connection action */
  async postActions(command: string, connectionId: string, body: ConnectionCommandExistingActionInputRepresentation, options?: RequestOptions): Promise<ConnectionCommandActionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/actions/${encodeURIComponent(command)}`, body, options);
  }

  /** POST /ssot/connections/{connectionId}/actions/test — Test existing connection action */
  async test(connectionId: string, options?: RequestOptions): Promise<ConnectionTestActionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/actions/test`, undefined, options);
  }

  /** POST /ssot/connections/{connectionId}/database-schemas — Get connection database schemas */
  async createDatabaseSchemas(connectionId: string, body: ConnectionDbSchemaCollectionInputRepresentation, options?: RequestOptions): Promise<ConnectionDbSchemaCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/database-schemas`, body, options);
  }

  /** POST /ssot/connections/{connectionId}/databases — Get connection databases */
  async createDatabases(connectionId: string, options?: RequestOptions): Promise<ConnectionDatabaseCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/databases`, undefined, options);
  }

  /** GET /ssot/connections/{connectionId}/endpoints — Get connection endpoints */
  async getEndpoints(connectionId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(connectionId)}/endpoints`, options);
  }

  /** POST /ssot/connections/{connectionId}/objects — Get connection objects */
  async createObjects(connectionId: string, body: ConnectionObjectCollectionInputRepresentation, options?: RequestOptions): Promise<ConnectionObjectCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/objects`, body, options);
  }

  /** POST /ssot/connections/{connectionId}/objects/{resourceName}/fields — Get connection fields */
  async createFields(connectionId: string, resourceName: string, body: ConnectionFieldCollectionInputRepresentation, options?: RequestOptions): Promise<ConnectionFieldCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/objects/${encodeURIComponent(resourceName)}/fields`, body, options);
  }

  /** POST /ssot/connections/{connectionId}/objects/{resourceName}/preview — Get connection preview */
  async createPreview(connectionId: string, resourceName: string, body: ConnectionPreviewInputRepresentation, options?: RequestOptions): Promise<ConnectionPreviewRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/objects/${encodeURIComponent(resourceName)}/preview`, body, options);
  }

  /** GET /ssot/connections/{connectionId}/schema — Get connection schema */
  async listSchema(connectionId: string, options?: RequestOptions): Promise<ConnectionSchemaCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(connectionId)}/schema`, options);
  }

  /** PUT /ssot/connections/{connectionId}/schema — Upsert connection schema */
  async putSchema(connectionId: string, body: ConnectionSchemaCollectionInputRepresentation, options?: RequestOptions): Promise<ConnectionSchemaCollectionRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(connectionId)}/schema`, body, options);
  }

  /** POST /ssot/connections/{connectionId}/schema/actions/test — Test existing connection schema action */
  async testByPost(connectionId: string, options?: RequestOptions): Promise<ConnectionSchemaActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/schema/actions/test`, undefined, options);
  }

  /** GET /ssot/connections/{connectionId}/sitemap — Get connection site map */
  async getSitemap(connectionId: string, options?: RequestOptions): Promise<ConnectionSitemapRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(connectionId)}/sitemap`, options);
  }

  /** PUT /ssot/connections/{connectionId}/sitemap — Upsert connection site map */
  async putSitemap(connectionId: string, body: ConnectionSitemapInputRepresentation, options?: RequestOptions): Promise<ConnectionSitemapRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(connectionId)}/sitemap`, body, options);
  }

  /** POST /ssot/connections/actions/{command} — Run connection action */
  async createActionsById(command: string, body: ConnectionCommandActionInputRepresentation, options?: RequestOptions): Promise<ConnectionCommandActionRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(command)}`, body, options);
  }

  /** POST /ssot/connections/actions/test — Test connection action */
  async postTest(body: ConnectionTestInputRepresentation, options?: RequestOptions): Promise<ConnectionTestActionRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/test`, body, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params: PaginationParams & ConnectionsListParams, options?: RequestOptions): AsyncGenerator<ConnectionRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ConnectionRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listSchema */
  async *listAllSchema(connectionId: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<ConnectionSchemaRepresentation, void, undefined> {
    yield* this.paginate<ConnectionSchemaRepresentation>(`${this.basePath}/${encodeURIComponent(connectionId)}/schema`, { ...params, pageSizeParam: "batchSize" }, options);
  }
}
