import { Controller } from "..";
import { DeleteAllTaskHistoryCount } from "../../../shared/proto/cline/task";
/**
 * Deletes all task history, with an option to preserve favorites
 * @param controller The controller instance
 * @param request Request with option to preserve favorites
 * @returns Results with count of deleted tasks
 */
export declare function deleteAllTaskHistory(controller: Controller): Promise<DeleteAllTaskHistoryCount>;
