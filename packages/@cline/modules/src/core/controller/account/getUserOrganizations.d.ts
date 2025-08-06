import type { Controller } from "../index";
import type { EmptyRequest } from "../../../shared/proto/cline/common";
import { UserOrganizationsResponse } from "../../../shared/proto/cline/account";
/**
 * Handles fetching all user credits data (balance, usage, payments)
 * @param controller The controller instance
 * @param request Empty request
 * @returns User credits data response
 */
export declare function getUserOrganizations(controller: Controller, request: EmptyRequest): Promise<UserOrganizationsResponse>;
