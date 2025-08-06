import { Controller } from "..";
import { Empty, EmptyRequest } from "../../../shared/proto/cline/common";
/**
 * Clears the current task
 * @param controller The controller instance
 * @param _request The empty request
 * @returns Empty response
 */
export declare function clearTask(controller: Controller, _request: EmptyRequest): Promise<Empty>;
