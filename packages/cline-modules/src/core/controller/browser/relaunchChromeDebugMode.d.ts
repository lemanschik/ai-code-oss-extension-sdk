import { EmptyRequest, String as StringMessage } from "../../../shared/proto/cline/common";
import { Controller } from "../index";
/**
 * Relaunch Chrome in debug mode
 * @param controller The controller instance
 * @param request The empty request message
 * @returns The browser relaunch result as a string message
 */
export declare function relaunchChromeDebugMode(controller: Controller, _: EmptyRequest): Promise<StringMessage>;
