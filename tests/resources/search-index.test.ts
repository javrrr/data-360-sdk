import { describe, it, expect, vi } from "vitest";
import { SearchIndexService } from "../../src/resources/search-index.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    patch: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("SearchIndexService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new SearchIndexService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new SearchIndexService(httpClient);

    await service.get("test-apiNameOrId");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getConfig()", async () => {
    const httpClient = createMockHttpClient();
    const service = new SearchIndexService(httpClient);

    await service.getConfig();

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new SearchIndexService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new SearchIndexService(httpClient);

    await service.delete("test-searchIndexApiNameOrId");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patch()", async () => {
    const httpClient = createMockHttpClient();
    const service = new SearchIndexService(httpClient);

    await service.patch("test-searchIndexApiNameOrId", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });
});
