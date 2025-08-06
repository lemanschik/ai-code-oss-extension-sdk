import { Controller } from "..";
import { Empty, StringRequest } from "../../../shared/proto/cline/common";
/**
 * Opens a file in the editor
 * @param controller The controller instance
 * @param request The request message containing the file path in the 'value' field
 * @returns Empty response
 */
export declare function openTaskHistory(controller: Controller, request: StringRequest): Promise<Empty>;
