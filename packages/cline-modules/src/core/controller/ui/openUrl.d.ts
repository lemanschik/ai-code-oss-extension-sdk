import type { Controller } from "../index";
import type { StringRequest } from "../../../shared/proto/cline/common";
import { Empty } from "../../../shared/proto/cline/common";
/**
 * Opens a URL in the default browser
 * @param controller The controller instance
 * @param request The URL to open
 * @returns Empty response
 */
export declare function openUrl(controller: Controller, request: StringRequest): Promise<Empty>;
