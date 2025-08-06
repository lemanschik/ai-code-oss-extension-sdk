import { Controller } from "../index";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { State } from "../../../shared/proto/cline/state";
/**
 * Get the latest extension state
 * @param controller The controller instance
 * @param request The empty request
 * @returns The current extension state
 */
export declare function getLatestState(controller: Controller, _: EmptyRequest): Promise<State>;
