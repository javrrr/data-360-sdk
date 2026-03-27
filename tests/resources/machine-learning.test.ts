import { describe, it, expect, vi } from "vitest";
import { MachineLearningService } from "../../src/resources/machine-learning.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    patch: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("MachineLearningService", () => {
  it("createAlerts()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.createAlerts({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("patchAlerts()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.patchAlerts("test-alertId", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });

  it("listConfiguredModels()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.listConfiguredModels({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listModelArtifacts()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.listModelArtifacts({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("createPredict()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.createPredict({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("listModelSetupsSetupVersions()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.listModelSetupsSetupVersions("test-modelSetupIdOrName", { batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("deleteConfiguredModels()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.deleteConfiguredModels("test-configuredModelIdOrName");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patchConfiguredModels()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.patchConfiguredModels("test-configuredModelIdOrName", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });

  it("deleteModelArtifacts()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.deleteModelArtifacts("test-modelArtifactIdOrName");

    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("patchModelArtifacts()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.patchModelArtifacts("test-modelArtifactIdOrName", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });

  it("createModelSetupsSetupVersions()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.createModelSetupsSetupVersions("test-modelSetupIdOrName", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getModelSetupsSetupVersions()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.getModelSetupsSetupVersions("test-modelSetupIdOrName", "test-modelSetupVersionId");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("patchModelSetupsSetupVersions()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.patchModelSetupsSetupVersions("test-modelSetupIdOrName", "test-modelSetupVersionId", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });

  it("listModelSetupsSetupVersionsByGet() - partitions list", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.listModelSetupsSetupVersionsByGet("test-modelSetupIdOrName", "test-modelSetupVersionId");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getConfiguredModels()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.getConfiguredModels("test-configuredModelIdOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getModelArtifacts()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.getModelArtifacts("test-modelArtifactIdOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getModelSetupsSetupVersionsByGet() - single partition", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.getModelSetupsSetupVersionsByGet("test-modelSetupIdOrName", "test-modelSetupVersionId", "test-modelSetupPartitionId");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
