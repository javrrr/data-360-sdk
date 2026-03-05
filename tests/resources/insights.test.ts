import { describe, it, expect, vi } from "vitest";
import { InsightsService } from "../../src/resources/insights.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
  } as unknown as HttpClient;
}

describe("InsightsService", () => {
  it("getMetadata()", async () => {
    const httpClient = createMockHttpClient();
    const service = new InsightsService(httpClient);

    await service.getMetadata();

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getCalculatedInsight()", async () => {
    const httpClient = createMockHttpClient();
    const service = new InsightsService(httpClient);

    await service.getCalculatedInsight("test-ciName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listMetadata()", async () => {
    const httpClient = createMockHttpClient();
    const service = new InsightsService(httpClient);

    await service.listMetadata("test-ciName");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
