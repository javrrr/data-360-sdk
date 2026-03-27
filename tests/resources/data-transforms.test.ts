import { describe, it, expect, vi } from "vitest";
import { DataTransformsService } from "../../src/resources/data-transforms.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    put: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("DataTransformsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.get("test-nameOrId");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("run()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.run("test-nameOrId");

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("cancel()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.cancel("test-nameOrId");

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("retry()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.retry("test-nameOrId");

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("listRunHistory()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.listRunHistory("test-nameOrId", { batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("put()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.put("test-dataTransformNameOrId", { test: true } as any);

    expect(httpClient.put).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.delete("test-dataTransformNameOrId");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("refreshStatus()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.refreshStatus("test-dataTransformNameOrId");

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getSchedule()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.getSchedule("test-dataTransformNameOrId");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("putSchedule()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.putSchedule("test-dataTransformNameOrId", { test: true } as any);

    expect(httpClient.put).toHaveBeenCalled();
  });

  it("createValidation()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.createValidation({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });
});
