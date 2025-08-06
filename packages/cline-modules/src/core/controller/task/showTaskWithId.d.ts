import { Controller } from "..";
import { StringRequest } from "../../../shared/proto/cline/common";
import { TaskResponse } from "../../../shared/proto/cline/task";
/**
 * Shows a task with the specified ID
 * @param controller The controller instance
 * @param request The request containing the task ID
 * @returns TaskResponse with task details
 */
export declare function showTaskWithId(controller: Controller, request: StringRequest): Promise<TaskResponse>;
