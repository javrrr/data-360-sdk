import { ActivationTargetsServiceBase } from "../generated/services/activation-targets.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  ActivationTargetInputRepresentation,
  ActivationTargetRepresentation,
} from "../schemas.js";

export class ActivationTargetsService extends ActivationTargetsServiceBase {
  /** Alias for patch — update an activation target. */
  async update(
    activationTargetId: string,
    body: ActivationTargetInputRepresentation,
    options?: RequestOptions,
  ): Promise<ActivationTargetRepresentation> {
    return this.patch(activationTargetId, body, options);
  }
}
