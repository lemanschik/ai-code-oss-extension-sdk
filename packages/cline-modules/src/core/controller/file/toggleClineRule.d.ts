import { ToggleClineRules } from "../../../shared/proto/cline/file";
import type { ToggleClineRuleRequest } from "../../../shared/proto/cline/file";
import type { Controller } from "../index";
/**
 * Toggles a Cline rule (enable or disable)
 * @param controller The controller instance
 * @param request The toggle request
 * @returns The updated Cline rule toggles
 */
export declare function toggleClineRule(controller: Controller, request: ToggleClineRuleRequest): Promise<ToggleClineRules>;
