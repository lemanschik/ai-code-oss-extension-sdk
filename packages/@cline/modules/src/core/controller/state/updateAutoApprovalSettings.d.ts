import { Controller } from "..";
import { AutoApprovalSettingsRequest } from "../../../shared/proto/cline/state";
import { Empty } from "../../../shared/proto/cline/common";
/**
 * Updates the auto approval settings
 * @param controller The controller instance
 * @param request The auto approval settings request
 * @returns Empty response
 */
export declare function updateAutoApprovalSettings(controller: Controller, request: AutoApprovalSettingsRequest): Promise<Empty>;
