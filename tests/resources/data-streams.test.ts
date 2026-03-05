import { describe, it, expect, vi } from "vitest";
import { DataStreamsService } from "../../src/resources/data-streams.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    patch: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("DataStreamsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataStreamsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataStreamsService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataStreamsService(httpClient);

    await service.get("test-recordIdOrDeveloperName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("run()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataStreamsService(httpClient);

    await service.run("test-recordIdOrDeveloperName");

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataStreamsService(httpClient);

    await service.delete("test-recordIdOrDeveloperName");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patch()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataStreamsService(httpClient);

    await service.patch("test-recordIdOrDeveloperName", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });
});
