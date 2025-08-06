import { Controller } from "..";
import { Empty, StringRequest } from "../../../shared/proto/cline/common";
/**
 * Copies text to the system clipboard
 * @param controller The controller instance
 * @param request The request containing the text to copy
 * @returns Empty response
 */
export declare function copyToClipboard(_controller: Controller, request: StringRequest): Promise<Empty>;
