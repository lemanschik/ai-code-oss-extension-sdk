import type { Controller } from "../index";
import { GetOrganizationCreditsRequest, OrganizationCreditsData } from "../../../shared/proto/cline/account";
/**
 * Handles fetching all organization credits data (balance, usage, payments)
 * @param controller The controller instance
 * @param request Organization credits request
 * @returns Organization credits data response
 */
export declare function getOrganizationCredits(controller: Controller, request: GetOrganizationCreditsRequest): Promise<OrganizationCreditsData>;
