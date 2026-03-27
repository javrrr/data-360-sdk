import { QueryServiceBase } from "../generated/services/query.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  QuerySqlInputRepresentation,
  QuerySqlRepresentation,
  QuerySqlStatusRepresentation,
} from "../schemas.js";

export class QueryService extends QueryServiceBase {
  /** Alias for create — execute a SQL query. */
  async execute(body: QuerySqlInputRepresentation, options?: RequestOptions): Promise<QuerySqlRepresentation> {
    return this.create(body, undefined, options);
  }

  /** Alias for get — get query status. */
  async getStatus(queryId: string, options?: RequestOptions): Promise<QuerySqlStatusRepresentation> {
    return this.get(queryId, undefined, options);
  }

  /** Execute a query and poll until completion or timeout. */
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

    throw new Error(`Query ${queryId} timed out after ${timeoutMs}ms`);
  }
}
