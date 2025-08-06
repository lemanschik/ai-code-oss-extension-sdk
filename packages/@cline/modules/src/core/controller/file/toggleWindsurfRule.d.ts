import type { ToggleWindsurfRuleRequest } from "../../../shared/proto/cline/file";
import { ClineRulesToggles } from "../../../shared/proto/cline/file";
import type { Controller } from "../index";
/**
 * Toggles a Windsurf rule (enable or disable)
 * @param controller The controller instance
 * @param request The toggle request
 * @returns The updated Windsurf rule toggles
 */
export declare function toggleWindsurfRule(controller: Controller, request: ToggleWindsurfRuleRequest): Promise<ClineRulesToggles>;
