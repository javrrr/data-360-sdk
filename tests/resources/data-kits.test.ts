import { describe, it, expect, vi } from "vitest";
import { DataKitsService } from "../../src/resources/data-kits.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
  } as unknown as HttpClient;
}

describe("DataKitsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataKitsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("undeploy()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataKitsService(httpClient);

    await service.undeploy("test-dataKitName", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getDependencies()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataKitsService(httpClient);

    await service.getDependencies("test-dataKitName", "test-componentName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getDeploymentStatus()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataKitsService(httpClient);

    await service.getDeploymentStatus("test-dataKitName", "test-componentName");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
