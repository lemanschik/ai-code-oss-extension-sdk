import { Controller } from "..";
import { Empty, StringRequest } from "../../../shared/proto/cline/common";
/**
 * Handles task feedback submission (thumbs up/down)
 * @param controller The controller instance
 * @param request The StringRequest containing the feedback type ("thumbs_up" or "thumbs_down") in the value field
 * @returns Empty response
 */
export declare function taskFeedback(controller: Controller, request: StringRequest): Promise<Empty>;
