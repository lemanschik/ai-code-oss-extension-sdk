import { Controller } from "..";
import { Empty, StringArrayRequest } from "../../../shared/proto/cline/common";
/**
 * Deletes tasks with the specified IDs
 * @param controller The controller instance
 * @param request The request containing an array of task IDs to delete
 * @returns Empty response
 * @throws Error if operation fails
 */
export declare function deleteTasksWithIds(controller: Controller, request: StringArrayRequest): Promise<Empty>;
