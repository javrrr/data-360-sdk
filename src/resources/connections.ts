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

  /**
   * POST /ssot/connections — Create connection.
   *
   * Discriminated union input type narrows credentials/parameters by
   * `connectorType`. For unknown / future connector types, fall back to
   * `ConnectionInputRepresentation` directly.
   *
   * Name-lock race after delete: a same-name CREATE issued immediately
   * after a successful DELETE of a connection with the same `name` returns
   * `400 DUPLICATES_DETECTED` ("A data connector with the provided name: X
   * already exists") for several seconds, even though the list endpoint
   * already reports the prior connection as gone. Callers performing a
   * delete-then-recreate with the same name should retry the create on
   * DUPLICATES_DETECTED with a budget of ~30 seconds.
   *
   * IngestApi name rewrite: when `connectorType === "IngestApi"`, the
   * server replaces the authored `name` with `<label-underscored>_<uuid>`.
   * The response body carries the rewritten name. Look up such
   * connections by `label` rather than `name` on subsequent reads.
   */
  override async create(body: ConnectionCreateInput | ConnectionInputRepresentation, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** Override put with discriminated union input type. */
  override async put(connectionId: string, body: ConnectionCreateInput | ConnectionInputRepresentation, options?: RequestOptions): Promise<void> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(connectionId)}`, body, options);
  }

  /**
   * DELETE /ssot/connections/{connectionId} — Delete connection.
   *
   * Transient cleanup race: this endpoint can return `500 UNKNOWN_EXCEPTION`
   * on the first attempt even when the connection is `deletable: true` and
   * has no live dependents. The platform's connection teardown (account
   * binding cleanup, OAuth token revocation, federated-session close)
   * intermittently conflicts with the delete handler for a few seconds.
   * A direct retry ~5–10s later succeeds with 204. Callers should retry
   * 5xx responses with a budget of ~30 seconds rather than the SDK's
   * default short retry.
   */
  override async delete(connectionId: string, options?: RequestOptions): Promise<void> {
    return super.delete(connectionId, options);
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
