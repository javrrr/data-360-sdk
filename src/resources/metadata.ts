import { BaseResource } from "./base-resource.js";
import type { RequestOptions } from "../core/types.js";

export class MetadataService extends BaseResource {
  protected readonly basePath = "/ssot/metadata";

  async get(options?: RequestOptions) {
    return this.httpClient.get(this.basePath, options);
  }
}
