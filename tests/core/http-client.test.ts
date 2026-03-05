import { describe, it, expect, vi, beforeEach } from "vitest";
import { HttpClient } from "../../src/core/http-client.js";
import {
  BadRequestError,
  AuthenticationError,
  ServerError,
  RateLimitError,
} from "../../src/core/errors.js";

function createMockFetch(responses: Array<{ status: number; body?: unknown; headers?: Record<string, string> }>) {
  let callIndex = 0;
  return vi.fn(async (_url: string, _init?: RequestInit) => {
    const resp = responses[callIndex] ?? responses[responses.length - 1];
    callIndex++;
    return {
      ok: resp.status >= 200 && resp.status < 300,
      status: resp.status,
      statusText: resp.status === 200 ? "OK" : "Error",
      headers: new Headers(resp.headers ?? {}),
      json: async () => resp.body,
    } as Response;
  });
}

/** Extract the URL and RequestInit from a mock fetch call. */
function getCall(mockFetch: ReturnType<typeof createMockFetch>, index = 0) {
  const call = mockFetch.mock.calls[index];
  return { url: call[0] as string, init: call[1] as RequestInit };
}

function makeClient(mockFetch: ReturnType<typeof createMockFetch>, overrides?: Record<string, unknown>) {
  return new HttpClient({
    instanceUrl: "https://test.salesforce.com/services/data/v66.0",
    auth: { type: "static", accessToken: "test-token" },
    fetch: mockFetch as unknown as typeof fetch,
    maxRetries: 0,
    ...overrides,
  });
}

describe("HttpClient", () => {
  it("makes a GET request with auth header", async () => {
    const mockFetch = createMockFetch([{ status: 200, body: { id: "123" } }]);
    const client = makeClient(mockFetch);

    const result = await client.get<{ id: string }>("/ssot/test");

    expect(result).toEqual({ id: "123" });
    expect(mockFetch).toHaveBeenCalledOnce();
    const { url, init } = getCall(mockFetch);
    expect(url).toBe("https://test.salesforce.com/services/data/v66.0/ssot/test");
    expect(init.headers).toHaveProperty("Authorization", "Bearer test-token");
  });

  it("builds query parameters", async () => {
    const mockFetch = createMockFetch([{ status: 200, body: {} }]);
    const client = makeClient(mockFetch);

    await client.get("/ssot/test", { query: { batchSize: 10, offset: 0, unused: undefined } });

    const { url } = getCall(mockFetch);
    expect(url).toContain("batchSize=10");
    expect(url).toContain("offset=0");
    expect(url).not.toContain("unused");
  });

  it("sends POST with JSON body", async () => {
    const mockFetch = createMockFetch([{ status: 200, body: { created: true } }]);
    const client = makeClient(mockFetch);

    await client.post("/ssot/test", { name: "foo" });

    const { init } = getCall(mockFetch);
    expect(init.method).toBe("POST");
    expect(init.body).toBe('{"name":"foo"}');
    expect(init.headers).toHaveProperty("Content-Type", "application/json");
  });

  it("throws BadRequestError on 400", async () => {
    const mockFetch = createMockFetch([{ status: 400, body: { error: "bad" } }]);
    const client = makeClient(mockFetch);

    await expect(client.get("/ssot/test")).rejects.toBeInstanceOf(BadRequestError);
  });

  it("throws AuthenticationError on 401", async () => {
    const mockFetch = createMockFetch([{ status: 401, body: null }]);
    const client = makeClient(mockFetch);

    await expect(client.get("/ssot/test")).rejects.toBeInstanceOf(AuthenticationError);
  });

  it("retries on 500 with exponential backoff", async () => {
    const mockFetch = createMockFetch([
      { status: 500, body: { error: "server" } },
      { status: 500, body: { error: "server" } },
      { status: 200, body: { ok: true } },
    ]);
    const client = makeClient(mockFetch, { maxRetries: 2 });

    const result = await client.get<{ ok: boolean }>("/ssot/test");
    expect(result).toEqual({ ok: true });
    expect(mockFetch).toHaveBeenCalledTimes(3);
  });

  it("retries on 429 and respects Retry-After", async () => {
    const mockFetch = createMockFetch([
      { status: 429, body: null, headers: { "Retry-After": "1" } },
      { status: 200, body: { ok: true } },
    ]);
    const client = makeClient(mockFetch, { maxRetries: 1 });

    const result = await client.get<{ ok: boolean }>("/ssot/test");
    expect(result).toEqual({ ok: true });
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });

  it("throws after exhausting retries", async () => {
    const mockFetch = createMockFetch([
      { status: 500, body: { error: "down" } },
      { status: 500, body: { error: "down" } },
    ]);
    const client = makeClient(mockFetch, { maxRetries: 1 });

    await expect(client.get("/ssot/test")).rejects.toBeInstanceOf(ServerError);
  });

  it("returns undefined for 204 No Content", async () => {
    const mockFetch = createMockFetch([{ status: 204 }]);
    const client = makeClient(mockFetch);

    const result = await client.delete("/ssot/test/123");
    expect(result).toBeUndefined();
  });

  it("sends PUT with JSON body", async () => {
    const mockFetch = createMockFetch([{ status: 200, body: { updated: true } }]);
    const client = makeClient(mockFetch);

    await client.put("/ssot/test/123", { name: "updated" });

    const { init } = getCall(mockFetch);
    expect(init.method).toBe("PUT");
    expect(init.body).toBe('{"name":"updated"}');
  });

  it("sends PATCH with JSON body", async () => {
    const mockFetch = createMockFetch([{ status: 200, body: { patched: true } }]);
    const client = makeClient(mockFetch);

    await client.patch("/ssot/test/123", { name: "patched" });

    const { init } = getCall(mockFetch);
    expect(init.method).toBe("PATCH");
    expect(init.body).toBe('{"name":"patched"}');
  });

  it("throws ForbiddenError on 403", async () => {
    const mockFetch = createMockFetch([{ status: 403, body: null }]);
    const client = makeClient(mockFetch);

    const { ForbiddenError } = await import("../../src/core/errors.js");
    await expect(client.get("/ssot/test")).rejects.toBeInstanceOf(ForbiddenError);
  });

  it("throws NotFoundError on 404", async () => {
    const mockFetch = createMockFetch([{ status: 404, body: null }]);
    const client = makeClient(mockFetch);

    const { NotFoundError } = await import("../../src/core/errors.js");
    await expect(client.get("/ssot/test")).rejects.toBeInstanceOf(NotFoundError);
  });

  it("does not retry when skipRetry is true", async () => {
    const mockFetch = createMockFetch([
      { status: 500, body: { error: "down" } },
    ]);
    const client = makeClient(mockFetch, { maxRetries: 3 });

    await expect(client.get("/ssot/test", { skipRetry: true })).rejects.toBeInstanceOf(ServerError);
    expect(mockFetch).toHaveBeenCalledOnce();
  });

  it("runs response interceptors", async () => {
    const mockFetch = createMockFetch([{ status: 200, body: { original: true } }]);
    const interceptorFn = vi.fn((response: Response) => response);
    const client = new HttpClient({
      instanceUrl: "https://test.salesforce.com/services/data/v66.0",
      auth: { type: "static", accessToken: "test-token" },
      fetch: mockFetch as unknown as typeof fetch,
      maxRetries: 0,
      responseInterceptors: [interceptorFn],
    });

    await client.get("/ssot/test");
    expect(interceptorFn).toHaveBeenCalledOnce();
  });

  it("runs request interceptors", async () => {
    const mockFetch = createMockFetch([{ status: 200, body: {} }]);
    const client = new HttpClient({
      instanceUrl: "https://test.salesforce.com/services/data/v66.0",
      auth: { type: "static", accessToken: "test-token" },
      fetch: mockFetch as unknown as typeof fetch,
      maxRetries: 0,
      requestInterceptors: [
        ({ url, init }) => ({
          url,
          init: {
            ...init,
            headers: { ...(init.headers as Record<string, string>), "X-Custom": "value" },
          },
        }),
      ],
    });

    await client.get("/ssot/test");
    const { init } = getCall(mockFetch);
    expect(init.headers).toHaveProperty("X-Custom", "value");
  });
});
