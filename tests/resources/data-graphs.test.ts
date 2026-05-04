import { describe, it, expect, vi } from "vitest";
import { DataGraphsService } from "../../src/resources/data-graphs.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("DataGraphsService", () => {
  it("getMetadata()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataGraphsService(httpClient);

    await service.getMetadata({ dataspace: "default", dataGraphEntityName: "myGraph" });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("list() unwraps dataGraphMetadata from getMetadata response", async () => {
    const items = [{ developerName: "A" }, { developerName: "B" }];
    const httpClient = {
      get: vi.fn(async () => ({ dataGraphMetadata: items })),
    } as unknown as HttpClient;
    const service = new DataGraphsService(httpClient);

    const res = await service.list();
    expect(res).toEqual(items);
    expect(httpClient.get).toHaveBeenCalledWith(
      "/ssot/data-graphs/metadata",
      expect.objectContaining({ query: undefined }),
    );
  });

  it("list() returns [] when dataGraphMetadata is missing", async () => {
    const httpClient = {
      get: vi.fn(async () => ({})),
    } as unknown as HttpClient;
    const service = new DataGraphsService(httpClient);

    const res = await service.list();
    expect(res).toEqual([]);
  });

  it("listAll() yields each descriptor", async () => {
    const items = [{ developerName: "A" }, { developerName: "B" }];
    const httpClient = {
      get: vi.fn(async () => ({ dataGraphMetadata: items })),
    } as unknown as HttpClient;
    const service = new DataGraphsService(httpClient);

    const collected = [];
    for await (const item of service.listAll()) collected.push(item);
    expect(collected).toEqual(items);
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataGraphsService(httpClient);

    await service.get("test-name");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataGraphsService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getData()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataGraphsService(httpClient);

    await service.getData("test-entityName", { lookupKeys: "Id=abc" });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("refresh()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataGraphsService(httpClient);

    await service.refresh("test-name");

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getDataByGet()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataGraphsService(httpClient);

    await service.getDataByGet("test-id", "test-dataGraphEntityName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataGraphsService(httpClient);

    await service.delete("test-dataGraphName");

    expect(httpClient.delete).toHaveBeenCalled();
  });
});
