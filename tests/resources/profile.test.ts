import { describe, it, expect, vi } from "vitest";
import { ProfileService } from "../../src/resources/profile.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
  } as unknown as HttpClient;
}

describe("ProfileService", () => {
  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.get("test-dataModelName", { filters: "test" });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getByGet()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.getByGet("test-id", "test-dataModelName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getMetadata()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.getMetadata();

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getCalculatedInsights()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.getCalculatedInsights("test-ciName", "test-dataModelName", "test-id");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getMetadataByGet()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.getMetadataByGet("test-dataModelName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getGet()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.getGet("test-childDataModelName", "test-dataModelName", "test-id");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
