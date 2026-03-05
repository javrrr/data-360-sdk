import { describe, it, expect, vi } from "vitest";
import { DataSpacesService } from "../../src/resources/data-spaces.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    put: vi.fn(async () => ({ id: "123" })),
    patch: vi.fn(async () => ({ id: "123" })),
  } as unknown as HttpClient;
}

describe("DataSpacesService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataSpacesService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataSpacesService(httpClient);

    await service.get("test-idOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listMembers()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataSpacesService(httpClient);

    await service.listMembers("test-idOrName", { batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("addMember()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataSpacesService(httpClient);

    await service.addMember("test-idOrName", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataSpacesService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("patch()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataSpacesService(httpClient);

    await service.patch("test-idOrName", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });

  it("updateMembers()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataSpacesService(httpClient);

    await service.updateMembers("test-idOrName", { test: true } as any);

    expect(httpClient.put).toHaveBeenCalled();
  });

  it("getMembers()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataSpacesService(httpClient);

    await service.getMembers("test-idOrName", "test-dataSpaceMemberObjectName");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
