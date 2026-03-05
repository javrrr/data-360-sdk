import { describe, it, expect, vi } from "vitest";
import { PrivateNetworkRoutesService } from "../../src/resources/private-network-routes.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("PrivateNetworkRoutesService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new PrivateNetworkRoutesService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new PrivateNetworkRoutesService(httpClient);

    await service.get("test-routeIdOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new PrivateNetworkRoutesService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new PrivateNetworkRoutesService(httpClient);

    await service.delete("test-routeIdOrName");

    expect(httpClient.delete).toHaveBeenCalled();
  });
});
