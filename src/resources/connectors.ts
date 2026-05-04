import { ConnectorsServiceBase } from "../generated/services/connectors.base.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type { ConnectorsListParams } from "../generated/services/connectors.base.js";
import type { ConnectorInfoCollectionRepresentation } from "../schemas.js";

/**
 * Connector catalog — the list of connector types available in the org.
 *
 * Use this to discover the exact `name` value to pass as `connectorType` to
 * `connections.list`. The accepted token is the catalog `name`, which can be
 * either CamelCase (`IngestApi`, `SalesforceDotCom`, `AwsS3`, `AzureBlob`,
 * `Databricks`) or UPPERCASE (`SNOWFLAKE`, `BIGQUERY`, `GCS`, `SFTP`),
 * depending on the connector family — there is no blanket casing rule.
 * Treat the connector type string as an API-supplied enum and probe via
 * this catalog when in doubt.
 *
 * Collection response key: `connectorInfoList`.
 */
export class ConnectorsService extends ConnectorsServiceBase {
  override async list(
    params?: PaginationParams & ConnectorsListParams,
    options?: RequestOptions,
  ): Promise<ConnectorInfoCollectionRepresentation> {
    return super.list(params, options);
  }
}
