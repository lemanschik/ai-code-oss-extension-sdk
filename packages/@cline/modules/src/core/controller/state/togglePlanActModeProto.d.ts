import { Controller } from "..";
import { Boolean } from "../../../shared/proto/cline/common";
import { TogglePlanActModeRequest } from "../../../shared/proto/cline/state";
/**
 * Toggles between Plan and Act modes
 * @param controller The controller instance
 * @param request The request containing the chat settings and optional chat content
 * @returns An empty response
 */
export declare function togglePlanActModeProto(controller: Controller, request: TogglePlanActModeRequest): Promise<Boolean>;
