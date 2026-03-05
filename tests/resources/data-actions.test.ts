import { describe, it, expect, vi } from "vitest";
import { DataActionsService } from "../../src/resources/data-actions.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
  } as unknown as HttpClient;
}

describe("DataActionsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataActionsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataActionsService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });
});
