import { describe, it, expect, vi } from "vitest";
import { ProfileService } from "../../src/resources/profile.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
  } as unknown as HttpClient;
}

describe("ProfileService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.list("test-dataModelName", { batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.get("test-dataModelName", "test-id");

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

    await service.getCalculatedInsights("test-dataModelName", "test-id", "test-ciName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listMetadata()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.listMetadata("test-dataModelName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getChildRecords()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ProfileService(httpClient);

    await service.getChildRecords("test-dataModelName", "test-id", "test-childDataModelName");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
