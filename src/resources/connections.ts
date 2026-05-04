import { ConnectionsServiceBase } from "../generated/services/connections.base.js";
import type { ConnectionsListParams } from "../generated/services/connections.base.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  ConnectionCollectionRepresentation,
  ConnectionCreateInput,
  ConnectionInputRepresentation,
  ConnectionRepresentation,
  ConnectionSchemaCollectionRepresentation,
  ConnectionUpdateInput,
  ConnectionPatchInputRepresentation,
} from "../schemas.js";

export class ConnectionsService extends ConnectionsServiceBase {
  /**
   * GET /ssot/connections — Get connections.
   *
   * The `connectorType` query parameter is required and must match exactly
   * one of the connector `name` values returned by `connectors.list`. The
   * casing is backend-defined per connector family: some types accept
   * CamelCase (`IngestApi`, `SalesforceDotCom`, `AwsS3`, `AzureBlob`,
   * `Databricks`), others only accept UPPERCASE (`SNOWFLAKE`, `BIGQUERY`,
   * `GCS`, `SFTP`). Passing a mismatched token returns
   * `400 ILLEGAL_QUERY_PARAMETER_VALUE` with a message like
   * `ConnectorType [Snowflake] is not supported`. If you do not know the
   * exact token for a target connector, enumerate it via `connectors.list`
   * first.
   */
  override async list(
    params: PaginationParams & ConnectionsListParams,
    options?: RequestOptions,
  ): Promise<ConnectionCollectionRepresentation> {
    return super.list(params, options);
  }

  /** Override create with discriminated union input type. */
  override async create(body: ConnectionCreateInput | ConnectionInputRepresentation, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** Override put with discriminated union input type. */
  override async put(connectionId: string, body: ConnectionCreateInput | ConnectionInputRepresentation, options?: RequestOptions): Promise<void> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(connectionId)}`, body, options);
  }

  /** Alias for patch — update a connection. */
  async update(connectionId: string, body: ConnectionUpdateInput | ConnectionPatchInputRepresentation, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(connectionId)}`, body, options);
  }

  /**
   * GET /ssot/connections/{connectionId}/schema — Get connection schema.
   *
   * Only a subset of connector types is supported by this endpoint. In
   * practice the API accepts IngestApi connections and rejects AwsS3,
   * Databricks, and SalesforceDotCom connections with
   * `400 ILLEGAL_QUERY_PARAMETER_VALUE`
   * (`No enum constant ConnectionSchemaTypeEnum.<type>`).
   *
   * The SDK surface exposes the method uniformly; callers that cannot predict
   * the connector type of a given connection ID should wrap this call and
   * fall back to `getEndpoints` or parse the schema from the connection
   * payload returned by `get(connectionId)`.
   */
  override async listSchema(
    connectionId: string,
    options?: RequestOptions,
  ): Promise<ConnectionSchemaCollectionRepresentation> {
    return super.listSchema(connectionId, options);
  }
}
