import { ActivationsServiceBase } from "../generated/services/activations.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  ActivationDefinitionInputRepresentation,
  ActivationRepresentation,
  AudienceDMOCollectionRepresentation,
} from "../schemas.js";

export class ActivationsService extends ActivationsServiceBase {
  /** Alias for get — get activation by ID. */
  async getById(activationId: string, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.get(activationId, options);
  }

  /** Alias for put — update an activation. */
  async update(activationId: string, body: ActivationDefinitionInputRepresentation, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.put(activationId, body, options);
  }

  /** Alias for listData — get activation data. */
  async getData(activationId: string, options?: RequestOptions): Promise<AudienceDMOCollectionRepresentation> {
    return this.listData(activationId, undefined, options);
  }
}
