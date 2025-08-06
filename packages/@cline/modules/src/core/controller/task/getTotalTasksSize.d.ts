import { Controller } from "..";
import { EmptyRequest, Int64 } from "../../../shared/proto/cline/common";
/**
 * Gets the total size of all tasks including task data and checkpoints
 * @param controller The controller instance
 * @param _request The empty request
 * @returns The total size as an Int64 value
 */
export declare function getTotalTasksSize(controller: Controller, _request: EmptyRequest): Promise<Int64>;
