import { Controller } from "..";
import { GetTaskHistoryRequest, TaskHistoryArray } from "../../../shared/proto/cline/task";
/**
 * Gets filtered task history
 * @param controller The controller instance
 * @param request Filter parameters for task history
 * @returns TaskHistoryArray with filtered task list
 */
export declare function getTaskHistory(controller: Controller, request: GetTaskHistoryRequest): Promise<TaskHistoryArray>;
