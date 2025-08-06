import { Controller } from "..";
import { Empty, StringRequest } from "../../../shared/proto/cline/common";
/**
 * Exports a task with the given ID to markdown
 * @param controller The controller instance
 * @param request The request containing the task ID in the value field
 * @returns Empty response
 */
export declare function exportTaskWithId(controller: Controller, request: StringRequest): Promise<Empty>;
