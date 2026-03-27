import { SegmentsServiceBase } from "../generated/services/segments.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  CdpSegmentActionInputRepresentation,
  CdpSegmentActionOutputRepresentation,
} from "../schemas.js";

export class SegmentsService extends SegmentsServiceBase {
  /** Alias for count — count with input body. */
  async countWithInput(segmentApiName: string, body: CdpSegmentActionInputRepresentation, options?: RequestOptions): Promise<CdpSegmentActionOutputRepresentation> {
    return this.count(segmentApiName, body, options);
  }

  /** Alias for getMembers — list segment members. */
  async listMembers(segmentApiName: string, params?: Parameters<SegmentsServiceBase["getMembers"]>[1], options?: RequestOptions) {
    return this.getMembers(segmentApiName, params, options);
  }
}
