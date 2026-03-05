import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class QueryService extends BaseResource {
  protected readonly basePath = "/ssot/query-sql";

  async execute(
    body: Record<string, unknown>,
    options?: RequestOptions,
  ) {
    return this.httpClient.post(this.basePath, body, options);
  }

  async getStatus(queryId: string, options?: RequestOptions) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(queryId)}`,
      options,
    );
  }

  async getRows(
    queryId: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(queryId)}/rows`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async executeAndWait(
    body: Record<string, unknown>,
    opts?: { pollIntervalMs?: number; timeoutMs?: number },
    options?: RequestOptions,
  ) {
    const pollIntervalMs = opts?.pollIntervalMs ?? 2000;
    const timeoutMs = opts?.timeoutMs ?? 300_000;

    const result = await this.execute(body, options) as Record<string, unknown>;
    const queryId = result.queryId as string;

    const deadline = Date.now() + timeoutMs;

    while (Date.now() < deadline) {
      const status = await this.getStatus(queryId, options) as Record<string, unknown>;

      if (status.status === "completed") {
        return status;
      }

      if (status.status === "failed") {
        throw new Error(
          `Query ${queryId} failed: ${status.errorMessage ?? "unknown error"}`,
        );
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
}
