import { Controller } from "..";
import { Empty } from "../../../shared/proto/cline/common";
import { AskResponseRequest } from "../../../shared/proto/cline/task";
/**
 * Handles a response from the webview for a previous ask operation
 *
 * @param controller The controller instance
 * @param request The request containing response type, optional text and optional images
 * @returns Empty response
 */
export declare function askResponse(controller: Controller, request: AskResponseRequest): Promise<Empty>;
