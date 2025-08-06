import type { Controller } from "../index";
import { EmptyRequest, String } from "../../../shared/proto/cline/common";
/**
 * Initialize webview when it launches
 * @param controller The controller instance
 * @param request The empty request
 * @returns Empty response
 */
export declare function getWebviewHtml(_controller: Controller, _: EmptyRequest): Promise<String>;
