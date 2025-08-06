import { EmptyRequest } from "../../../shared/proto/cline/common";
import { RefreshedRules } from "../../../shared/proto/cline/file";
import type { Controller } from "../index";
/**
 * Refreshes all rule toggles (Cline, External, and Workflows)
 * @param controller The controller instance
 * @param _request The empty request
 * @returns RefreshedRules containing updated toggles for all rule types
 */
export declare function refreshRules(controller: Controller, _request: EmptyRequest): Promise<RefreshedRules>;
