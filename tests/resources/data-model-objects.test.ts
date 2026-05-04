import { describe, it, expect, vi } from "vitest";
import { DataModelObjectsService } from "../../src/resources/data-model-objects.js";
import { NotFoundError, BadRequestError } from "../../src/core/errors.js";
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

  it("deleteMappingsFieldMappings()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.deleteMappingsFieldMappings("test-objectSourceTargetMapDeveloperName");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patchMappingsFieldMappings()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.patchMappingsFieldMappings("test-fieldSourceTargetMapDeveloperName", "test-objectSourceTargetMapDeveloperName", { test: true } as any);

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

    await service.listMappings({ dmoDeveloperName: "test-name" });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listMappings() soft-lands 404 'Object Source Target Map not found' as empty collection", async () => {
    const notFoundBody = [
      {
        errorCode: "NOT_FOUND",
        message: "Object Source Target Map not found for the given Target Object Dev Name : ssot__AbnExperiment__dlm  , ",
      },
    ];
    const httpClient = {
      get: vi.fn(async () => {
        throw new NotFoundError(notFoundBody, new Headers());
      }),
    } as unknown as HttpClient;
    const service = new DataModelObjectsService(httpClient);

    const res = await service.listMappings({ dmoDeveloperName: "ssot__AbnExperiment__dlm" });
    expect(res).toEqual({ objectSourceTargetMaps: [] });
  });

  it("listMappings() rethrows 404s that aren't 'Object Source Target Map not found'", async () => {
    const unrelatedBody = [{ errorCode: "NOT_FOUND", message: "Different not-found message" }];
    const httpClient = {
      get: vi.fn(async () => {
        throw new NotFoundError(unrelatedBody, new Headers());
      }),
    } as unknown as HttpClient;
    const service = new DataModelObjectsService(httpClient);

    await expect(service.listMappings({ dmoDeveloperName: "x" })).rejects.toBeInstanceOf(NotFoundError);
  });

  it("listMappings() rethrows non-404 errors unchanged", async () => {
    const httpClient = {
      get: vi.fn(async () => {
        throw new BadRequestError([{ errorCode: "BAD_REQUEST" }], new Headers());
      }),
    } as unknown as HttpClient;
    const service = new DataModelObjectsService(httpClient);

    await expect(service.listMappings({ dmoDeveloperName: "x" })).rejects.toBeInstanceOf(BadRequestError);
  });

  it("createMappings()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.createMappings({ test: true } as any, { dataspace: "default" });

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getMappings()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.getMappings("test-developerName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("deleteMappings()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataModelObjectsService(httpClient);

    await service.deleteMappings("test-developerName");

    expect(httpClient.delete).toHaveBeenCalled();
  });
});
