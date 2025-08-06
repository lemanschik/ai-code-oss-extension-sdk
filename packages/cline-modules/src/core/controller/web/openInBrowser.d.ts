import { Controller } from "..";
import { Empty, StringRequest } from "../../../shared/proto/cline/common";
/**
 * Opens a URL in the user's default browser
 * @param controller The controller instance
 * @param request The URL to open
 * @returns Empty response since the client doesn't need a return value
 */
export declare function openInBrowser(_controller: Controller, request: StringRequest): Promise<Empty>;
