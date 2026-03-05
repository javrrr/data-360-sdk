import { describe, it, expect, vi } from "vitest";
import { DocumentAiService } from "../../src/resources/document-ai.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    patch: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("DocumentAiService", () => {
  it("extractData()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DocumentAiService(httpClient);

    await service.extractData({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("generateSchema()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DocumentAiService(httpClient);

    await service.generateSchema({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("listConfigurations()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DocumentAiService(httpClient);

    await service.listConfigurations({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("createConfiguration()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DocumentAiService(httpClient);

    await service.createConfiguration({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getGlobalConfig()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DocumentAiService(httpClient);

    await service.getGlobalConfig();

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("deleteConfigurations()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DocumentAiService(httpClient);

    await service.deleteConfigurations("test-idOrApiName");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patchConfigurations()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DocumentAiService(httpClient);

    await service.patchConfigurations("test-idOrApiName", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });

  it("run()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DocumentAiService(httpClient);

    await service.run("test-idOrApiName");

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getConfiguration()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DocumentAiService(httpClient);

    await service.getConfiguration("test-idOrApiName");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
