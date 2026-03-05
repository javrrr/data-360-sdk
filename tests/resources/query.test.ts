import { describe, it, expect, vi } from "vitest";
import { QueryService } from "../../src/resources/query.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ status: "completed", queryId: "q-123" })),
    post: vi.fn(async () => ({ queryId: "q-123" })),
  } as unknown as HttpClient;
}

describe("QueryService", () => {
  it("executes a SQL query", async () => {
    const httpClient = createMockHttpClient();
    const service = new QueryService(httpClient);

    await service.execute({ sql: "SELECT Id FROM Account" });

    expect(httpClient.post).toHaveBeenCalledWith(
      "/ssot/query-sql",
      { sql: "SELECT Id FROM Account" },
      undefined,
    );
  });

  it("gets query status", async () => {
    const httpClient = createMockHttpClient();
    const service = new QueryService(httpClient);

    await service.getStatus("q-123");

    expect(httpClient.get).toHaveBeenCalledWith(
      "/ssot/query-sql/q-123",
      undefined,
    );
  });

  it("gets query rows", async () => {
    const httpClient = createMockHttpClient();
    const service = new QueryService(httpClient);

    await service.getRows("q-123", { batchSize: 50 });

    expect(httpClient.get).toHaveBeenCalledWith("/ssot/query-sql/q-123/rows", {
      query: { batchSize: 50, offset: undefined, orderBy: undefined },
    });
  });

  it("executeAndWait polls until completed", async () => {
    let callCount = 0;
    const httpClient = {
      get: vi.fn(async () => {
        callCount++;
        if (callCount < 3) {
          return { status: "running", queryId: "q-123" };
        }
        return { status: "completed", queryId: "q-123" };
      }),
      post: vi.fn(async () => ({ queryId: "q-123" })),
    } as unknown as HttpClient;

    const service = new QueryService(httpClient);
    const result = await service.executeAndWait(
      { sql: "SELECT Id FROM Account" },
      { pollIntervalMs: 10 },
    );

    expect(result).toEqual({ status: "completed", queryId: "q-123" });
    expect(httpClient.post).toHaveBeenCalledOnce();
    // get called 3 times for polling
    expect(httpClient.get).toHaveBeenCalledTimes(3);
  });
});
