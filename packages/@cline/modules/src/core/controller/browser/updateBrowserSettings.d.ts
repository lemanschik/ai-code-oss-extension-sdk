import { UpdateBrowserSettingsRequest } from "../../../shared/proto/cline/browser";
import { Boolean } from "../../../shared/proto/cline/common";
import { Controller } from "../index";
/**
 * Update browser settings
 * @param controller The controller instance
 * @param request The browser settings request message
 * @returns Success response
 */
export declare function updateBrowserSettings(controller: Controller, request: UpdateBrowserSettingsRequest): Promise<Boolean>;
