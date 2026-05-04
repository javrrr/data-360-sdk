import { DataKitsServiceBase } from "../generated/services/data-kits.base.js";
import type { DataKitsListParams, DataKitsListAvailableComponentsParams } from "../generated/services/data-kits.base.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  DataKitComponentCollectionRepresentation,
  DataKitOutputRepresentation,
} from "../schemas.js";

export class DataKitsService extends DataKitsServiceBase {
  /**
   * GET /ssot/data-kits — Get data kits.
   *
   * Known tenant-side reliability issue: this endpoint can take > 60s to
   * respond or time out entirely on orgs with many installed data kits. If
   * you hit a timeout, inventorying data kits via the Metadata API
   * (`DataPackageKitDefinition` and `DataKitObjectTemplate` types) is a more
   * reliable alternative. The Connect API remains the correct surface for
   * `deploy` / `undeploy` actions.
   */
  override async list(
    params?: DataKitsListParams,
    options?: RequestOptions,
  ): Promise<DataKitOutputRepresentation> {
    return super.list(params, options);
  }

  /**
   * GET /ssot/data-kits/available-components — Get data kit available components.
   *
   * Known tenant-side reliability issue: this endpoint has been observed
   * returning `500 Server Error` on orgs with large data kit inventories.
   * If that happens, fall back to reading `DataKitObjectTemplate` metadata
   * via the sf CLI Metadata API.
   */
  override async listAvailableComponents(
    params?: PaginationParams & DataKitsListAvailableComponentsParams,
    options?: RequestOptions,
  ): Promise<DataKitComponentCollectionRepresentation> {
    return super.listAvailableComponents(params, options);
  }
}
