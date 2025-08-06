import type { ToggleCursorRuleRequest } from "../../../shared/proto/cline/file";
import { ClineRulesToggles } from "../../../shared/proto/cline/file";
import type { Controller } from "../index";
/**
 * Toggles a Cursor rule (enable or disable)
 * @param controller The controller instance
 * @param request The toggle request
 * @returns The updated Cursor rule toggles
 */
export declare function toggleCursorRule(controller: Controller, request: ToggleCursorRuleRequest): Promise<ClineRulesToggles>;
