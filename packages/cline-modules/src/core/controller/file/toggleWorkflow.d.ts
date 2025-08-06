import { Controller } from "..";
import { ToggleWorkflowRequest, ClineRulesToggles } from "../../../shared/proto/cline/file";
/**
 * Toggles a workflow on or off
 * @param controller The controller instance
 * @param request The request containing the workflow path and enabled state
 * @returns The updated workflow toggles
 */
export declare function toggleWorkflow(controller: Controller, request: ToggleWorkflowRequest): Promise<ClineRulesToggles>;
