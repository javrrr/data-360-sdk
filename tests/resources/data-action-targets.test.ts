import { describe, it, expect, vi } from "vitest";
import { DataActionTargetsService } from "../../src/resources/data-action-targets.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("DataActionTargetsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataActionTargetsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataActionTargetsService(httpClient);

    await service.get("test-apiName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getSigningKey()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataActionTargetsService(httpClient);

    await service.getSigningKey("test-apiName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataActionTargetsService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataActionTargetsService(httpClient);

    await service.delete("test-apiName");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("resetSigningKey()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataActionTargetsService(httpClient);

    await service.resetSigningKey("test-apiName");

    expect(httpClient.post).toHaveBeenCalled();
  });
});
