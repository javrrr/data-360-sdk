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

  it("getCalculatedInsights()", async () => {
    const httpClient = createMockHttpClient();
    const service = new InsightsService(httpClient);

    await service.getCalculatedInsights("test-ciName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getMetadataByGet()", async () => {
    const httpClient = createMockHttpClient();
    const service = new InsightsService(httpClient);

    await service.getMetadataByGet("test-ciName");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
