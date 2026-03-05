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
  it("listAlerts()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.listAlerts({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("createAlert()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.createAlert({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
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

  it("predict()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.predict({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("listSetupVersions()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.listSetupVersions("test-modelSetupIdOrName", { batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("patchAlerts()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.patchAlerts("test-alertId", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
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

  it("createSetupVersions()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.createSetupVersions("test-modelSetupIdOrName", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getSetupVersions()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.getSetupVersions("test-modelSetupIdOrName", "test-modelSetupVersionId");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("patchSetupVersions()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.patchSetupVersions("test-modelSetupIdOrName", "test-modelSetupVersionId", { test: true } as any);

    expect(httpClient.patch).toHaveBeenCalled();
  });

  it("getPartitions()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.getPartitions("test-modelSetupIdOrName", "test-modelSetupVersionId");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getConfiguredModel()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.getConfiguredModel("test-configuredModelIdOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getModelArtifact()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.getModelArtifact("test-modelArtifactIdOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getPartition()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MachineLearningService(httpClient);

    await service.getPartition("test-modelSetupIdOrName", "test-modelSetupVersionId", "test-modelSetupPartitionId");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
