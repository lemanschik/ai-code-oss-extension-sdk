import { BrowserConnection } from "../../../shared/proto/cline/browser";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { Controller } from "../index";
/**
 * Discover Chrome instances
 * @param controller The controller instance
 * @param request The request message
 * @returns The browser connection result
 */
export declare function discoverBrowser(controller: Controller, request: EmptyRequest): Promise<BrowserConnection>;
