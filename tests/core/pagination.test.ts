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
  it("yields pages of items using offset-based pagination", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }, { id: 2 }] },
      { data: [{ id: 3 }] },
    ]);

    const pages: unknown[][] = [];
    for await (const page of paginate({
      httpClient,
      path: "/ssot/test",
      batchSize: 2,
    })) {
      pages.push(page);
    }

    expect(pages).toHaveLength(2);
    expect(pages[0]).toEqual([{ id: 1 }, { id: 2 }]);
    expect(pages[1]).toEqual([{ id: 3 }]);
  });

  it("stops when empty page is returned", async () => {
    const httpClient = createMockHttpClient([
      { data: [{ id: 1 }] },
      { data: [] },
    ]);

    const pages: unknown[][] = [];
    for await (const page of paginate({
      httpClient,
      path: "/ssot/test",
      batchSize: 10,
    })) {
      pages.push(page);
    }

    expect(pages).toHaveLength(1);
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
});
