import { describe, it, expect, vi } from "vitest";
import { ActivationsService } from "../../src/resources/activations.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    put: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("ActivationsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationsService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationsService(httpClient);

    await service.delete("test-id");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("getData()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationsService(httpClient);

    await service.getData("test-id");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getById()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationsService(httpClient);

    await service.getById("test-activationId");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("update()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationsService(httpClient);

    await service.update("test-activationId", { test: true } as any);

    expect(httpClient.put).toHaveBeenCalled();
  });
});
