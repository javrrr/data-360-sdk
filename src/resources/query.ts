import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  QuerySqlInputRepresentation,
  QuerySqlPageRepresentation,
  QuerySqlRepresentation,
  QuerySqlStatusRepresentation,
} from "../schemas.js";

export class QueryService extends BaseResource {
  protected readonly basePath = "/ssot/query-sql";

  async execute(
    body: QuerySqlInputRepresentation,
    options?: RequestOptions,
  ): Promise<QuerySqlRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async getStatus(queryId: string, options?: RequestOptions): Promise<QuerySqlStatusRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(queryId)}`,
      options,
    );
  }

  async getRows(
    queryId: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<QuerySqlPageRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(queryId)}/rows`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async executeAndWait(
    body: QuerySqlInputRepresentation,
    opts?: { pollIntervalMs?: number; timeoutMs?: number },
    options?: RequestOptions,
  ): Promise<QuerySqlStatusRepresentation> {
    const pollIntervalMs = opts?.pollIntervalMs ?? 2000;
    const timeoutMs = opts?.timeoutMs ?? 300_000;

    const result = await this.execute(body, options);
    const queryId = result.status?.queryId;

    if (!queryId) {
      // Query completed synchronously
      return result.status!;
    }

    const deadline = Date.now() + timeoutMs;

    while (Date.now() < deadline) {
      const status = await this.getStatus(queryId, options);

      if (status.completionStatus?.startsWith("Finished")) {
        return status;
      }

      if (status.completionStatus?.startsWith("Error")) {
        throw new Error(`Query ${queryId} failed: ${status.completionStatus}`);
      }

      if (Date.now() + pollIntervalMs > deadline) {
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
    }

    throw new Error(
      `Query ${queryId} timed out after ${timeoutMs}ms`,
    );
  }

  async delete(queryId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(queryId)}`, options);
  }
}
