import { describe, it, expect, vi } from "vitest";
import { CalculatedInsightsService } from "../../src/resources/calculated-insights.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    patch: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("CalculatedInsightsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CalculatedInsightsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CalculatedInsightsService(httpClient);

    await service.get("test-apiName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("run()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CalculatedInsightsService(httpClient);

    await service.run("test-apiName");

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CalculatedInsightsService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CalculatedInsightsService(httpClient);

    await service.delete("test-apiName");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patch()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CalculatedInsightsService(httpClient);

    await service.patch("test-apiName", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });
});
