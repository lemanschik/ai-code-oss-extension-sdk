import { BrowserConnectionInfo } from "../../../shared/proto/cline/browser";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { Controller } from "../index";
/**
 * Get information about the current browser connection
 * @param controller The controller instance
 * @param request The request message
 * @returns The browser connection info
 */
export declare function getBrowserConnectionInfo(controller: Controller, _: EmptyRequest): Promise<BrowserConnectionInfo>;
