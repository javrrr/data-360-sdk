import { describe, it, expect, vi } from "vitest";
import { DataModelObjectsService } from "../../src/resources/data-model-objects.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    patch: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("DataModelObjectsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.get("test-name");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("create()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.create({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("delete()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.delete("test-dataModelObjectName");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patch()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.patch("test-dataModelObjectName", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });

  it("deleteFieldMappings()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.deleteFieldMappings("test-objectSourceTargetMapDeveloperName");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patchFieldMappings()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.patchFieldMappings("test-objectSourceTargetMapDeveloperName", "test-fieldSourceTargetMapDeveloperName", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });

  it("deleteRelationships()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.deleteRelationships("test-name");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("listRelationships()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.listRelationships("test-dataModelObjectName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("createRelationships()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.createRelationships("test-dataModelObjectName", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("listMappings()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.listMappings();

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("createMapping()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.createMapping({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getMapping()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.getMapping("test-developerName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("deleteMapping()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.deleteMapping("test-developerName");

    expect(httpClient.delete).toHaveBeenCalled();
  });
});
