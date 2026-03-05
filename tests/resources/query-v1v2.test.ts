import { describe, it, expect, vi } from "vitest";
import { QueryV1V2Service } from "../../src/resources/query-v1v2.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
  } as unknown as HttpClient;
}

describe("QueryV1V2Service", () => {
  it("executeV1()", async () => {
    const httpClient = createMockHttpClient();
    const service = new QueryV1V2Service(httpClient);

    await service.executeV1({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("executeV2()", async () => {
    const httpClient = createMockHttpClient();
    const service = new QueryV1V2Service(httpClient);

    await service.executeV2({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getNextBatch()", async () => {
    const httpClient = createMockHttpClient();
    const service = new QueryV1V2Service(httpClient);

    await service.getNextBatch("test-nextBatchId");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
