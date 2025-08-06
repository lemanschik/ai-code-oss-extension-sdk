import { Controller } from "..";
import { Empty, StringRequest } from "../../../shared/proto/cline/common";
/**
 * Opens a mention (file path, problem, terminal, or URL)
 * @param controller The controller instance
 * @param request The string request containing the mention text
 * @returns Empty response
 */
export declare function openMention(_controller: Controller, request: StringRequest): Promise<Empty>;
