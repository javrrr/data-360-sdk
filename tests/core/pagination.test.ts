import { describe, it, expect, vi } from "vitest";
import { paginate, collectAll } from "../../src/core/pagination.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient(responses: unknown[]): HttpClient {
  let callIndex = 0;
  return {
    get: vi.fn(async () => {
      if (callIndex >= responses.length) {
        return { data: [] }; // No more data
      }
      const resp = responses[callIndex];
      callIndex++;
      return resp;
    }),
  } as unknown as HttpClient;
}

describe("pagination", () => {
  it("yields individual items using offset-based pagination", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }, { id: 2 }] },
      { data: [{ id: 3 }] },
    ]);

    const items: unknown[] = [];
    for await (const item of paginate({
      httpClient,
      path: "/ssot/test",
      batchSize: 2,
    })) {
      items.push(item);
    }

    expect(items).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it("stops when empty page is returned", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }] },
      { data: [] },
    ]);

    const items: unknown[] = [];
    for await (const item of paginate({
      httpClient,
      path: "/ssot/test",
      batchSize: 10,
    })) {
      items.push(item);
    }

    expect(items).toEqual([{ id: 1 }]);
  });

  it("collectAll gathers all items", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }, { id: 2 }] },
      { data: [{ id: 3 }] },
    ]);

    const all = await collectAll({
      httpClient,
      path: "/ssot/test",
      batchSize: 2,
    });

    expect(all).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it("supports nextPageUrl-based pagination", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }], nextPageUrl: "/ssot/test?page=2" },
      { data: [{ id: 2 }] },
    ]);

    const all = await collectAll({
      httpClient,
      path: "/ssot/test",
      batchSize: 1,
    });

    expect(all).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("supports metadata response shape", async () => {
    const httpClient = createMockHttpClient([
      { metadata: [{ name: "a" }, { name: "b" }] },
      { metadata: [] },
    ]);

    const all = await collectAll({
      httpClient,
      path: "/ssot/test",
      batchSize: 10,
    });

    expect(all).toEqual([{ name: "a" }, { name: "b" }]);
  });

  it("supports records response shape", async () => {
    const httpClient = createMockHttpClient([
      { records: [{ id: 1 }] },
      { records: [] },
    ]);

    const all = await collectAll({
      httpClient,
      path: "/ssot/test",
      batchSize: 10,
    });

    expect(all).toEqual([{ id: 1 }]);
  });

  it("uses limit instead of batchSize when pageSizeParam is limit", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }] },
    ]);

    const items: unknown[] = [];
    for await (const item of paginate({
      httpClient,
      path: "/ssot/test",
      batchSize: 5,
      pageSizeParam: "limit",
    })) {
      items.push(item);
    }

    expect(httpClient.get).toHaveBeenCalledWith("/ssot/test", {
      query: { limit: 5, offset: 0 },
    });
  });

  it("uses batchSize by default", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }] },
    ]);

    const items: unknown[] = [];
    for await (const item of paginate({
      httpClient,
      path: "/ssot/test",
      batchSize: 5,
    })) {
      items.push(item);
    }

    expect(httpClient.get).toHaveBeenCalledWith("/ssot/test", {
      query: { batchSize: 5, offset: 0 },
    });
  });

  it("supports custom item extractor", async () => {
    const httpClient = createMockHttpClient([
      { results: [{ name: "a" }] },
      { results: [] },
    ]);

    const all = await collectAll({
      httpClient,
      path: "/ssot/test",
      batchSize: 10,
      extractItems: (raw: unknown) => (raw as { results: unknown[] }).results,
    });

    expect(all).toEqual([{ name: "a" }]);
  });

  it("strips API base prefix from absolute nextPageUrl", async () => {
    const httpClient = createMockHttpClient([
      {
        data: [{ id: 1 }],
        nextPageUrl: "https://instance.my.salesforce.com/services/data/v66.0/ssot/test?offset=1&batchSize=1",
      },
      { data: [{ id: 2 }] },
    ]);

    const all = await collectAll({
      httpClient,
      path: "/ssot/test",
      batchSize: 1,
    });

    expect(all).toEqual([{ id: 1 }, { id: 2 }]);
    expect(httpClient.get).toHaveBeenNthCalledWith(2, "/ssot/test?offset=1&batchSize=1", {
      query: undefined,
    });
  });

  it("uses totalSize to avoid extra offset-based request", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }, { id: 2 }], totalSize: 2 },
    ]);

    const all = await collectAll({
      httpClient,
      path: "/ssot/test",
      batchSize: 2,
    });

    expect(all).toEqual([{ id: 1 }, { id: 2 }]);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });

  it("uses totalSize guard even when nextPageUrl is present", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }], totalSize: 1, nextPageUrl: "/ssot/test?offset=1&batchSize=1" },
    ]);

    const all = await collectAll({
      httpClient,
      path: "/ssot/test",
      batchSize: 1,
    });

    expect(all).toEqual([{ id: 1 }]);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });
});
