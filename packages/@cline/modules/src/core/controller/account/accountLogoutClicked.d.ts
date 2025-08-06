import { Empty } from "../../../shared/proto/cline/common";
import type { EmptyRequest } from "../../../shared/proto/cline/common";
import type { Controller } from "../index";
/**
 * Handles the account logout action
 * @param controller The controller instance
 * @param _request The empty request object
 * @returns Empty response
 */
export declare function accountLogoutClicked(controller: Controller, _request: EmptyRequest): Promise<Empty>;
