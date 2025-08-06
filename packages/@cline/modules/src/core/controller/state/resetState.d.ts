import { Controller } from "..";
import { Empty } from "../../../shared/proto/cline/common";
import { ResetStateRequest } from "../../../shared/proto/cline/state";
/**
 * Resets the extension state to its defaults
 * @param controller The controller instance
 * @param request The reset state request containing the global flag
 * @returns An empty response
 */
export declare function resetState(controller: Controller, request: ResetStateRequest): Promise<Empty>;
