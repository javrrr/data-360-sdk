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

  it("getRunHistory()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.getRunHistory("test-nameOrId", { batchSize: 10 });

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

  it("listSchedule()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.listSchedule("test-dataTransformNameOrId");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("updateSchedule()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.updateSchedule("test-dataTransformNameOrId", { test: true } as any);

    expect(httpClient.put).toHaveBeenCalled();
  });

  it("validate()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataTransformsService(httpClient);

    await service.validate({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });
});
