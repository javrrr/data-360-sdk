import { CalculatedInsightsServiceBase } from "../generated/services/calculated-insights.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  CdpCalculatedInsightInputRepresentation,
  CdpCalculatedInsightRepresentation,
} from "../schemas.js";

export class CalculatedInsightsService extends CalculatedInsightsServiceBase {
  /**
   * POST /ssot/calculated-insights — Create calculated insight.
   *
   * Server-side timing: this endpoint runs SQL validation, schedule
   * registration, and dependency-graph updates synchronously, and
   * commonly takes 30–60 seconds for non-trivial expressions. The
   * SDK's default 30s HTTP timeout aborts before the response arrives;
   * pass `{ timeout: 120_000 }` (or longer) via `options` for any CI
   * whose `expression` references multiple DMOs or large fact tables.
   */
  override async create(
    body: CdpCalculatedInsightInputRepresentation,
    options?: RequestOptions,
  ): Promise<CdpCalculatedInsightRepresentation> {
    return super.create(body, options);
  }

  /**
   * DELETE /ssot/calculated-insights/{apiName} — Delete calculated insight.
   *
   * Asynchronous teardown: the response is 204 immediately, but the
   * record sits at `status = "DELETING"` for several minutes before
   * becoming truly gone. During that window:
   *   - GET still returns the CI (with the DELETING status)
   *   - A re-create attempt with the same apiName 400s with
   *     DUPLICATES_DETECTED until teardown completes
   *
   * Callers performing a delete-then-recreate flow should poll the
   * CI's `status` until either (a) GET returns 404 or (b) the status
   * is no longer `DELETING`, before re-creating with the same apiName.
   */
  override async delete(apiName: string, options?: RequestOptions): Promise<void> {
    return super.delete(apiName, options);
  }
}
