import { describe, it, expect, vi } from "vitest";
import { IdentityResolutionsService } from "../../src/resources/identity-resolutions.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    patch: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("IdentityResolutionsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new IdentityResolutionsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new IdentityResolutionsService(httpClient);

    await service.get("test-identityResolution");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("runNow()", async () => {
    const httpClient = createMockHttpClient();
    const service = new IdentityResolutionsService(httpClient);

    await service.runNow("test-identityResolution");

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new IdentityResolutionsService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new IdentityResolutionsService(httpClient);

    await service.delete("test-identityResolution");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patch()", async () => {
    const httpClient = createMockHttpClient();
    const service = new IdentityResolutionsService(httpClient);

    await service.patch("test-identityResolution", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });
});
