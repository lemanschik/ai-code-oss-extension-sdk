import { Controller } from "..";
import { Empty, StringRequest } from "../../../shared/proto/cline/common";
/**
 * Opens an image in the system viewer
 * @param controller The controller instance
 * @param request The request message containing the image path or data URI in the 'value' field
 * @returns Empty response
 */
export declare function openImage(_controller: Controller, request: StringRequest): Promise<Empty>;
