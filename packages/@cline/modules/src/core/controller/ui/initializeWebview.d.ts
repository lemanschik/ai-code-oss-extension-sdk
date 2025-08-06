import type { Controller } from "../index";
import { EmptyRequest, Empty } from "../../../shared/proto/cline/common";
/**
 * Initialize webview when it launches
 * @param controller The controller instance
 * @param request The empty request
 * @returns Empty response
 */
export declare function initializeWebview(controller: Controller, request: EmptyRequest): Promise<Empty>;
