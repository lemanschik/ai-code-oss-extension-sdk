import { RuleFile, RuleFileRequest } from "../../../shared/proto/cline/file";
import { Controller } from "..";
/**
 * Deletes a rule file from either global or workspace rules directory
 * @param controller The controller instance
 * @param request The request containing rule path and isGlobal flag
 * @returns Result with file path and display name
 * @throws Error if operation fails
 */
export declare function deleteRuleFile(controller: Controller, request: RuleFileRequest): Promise<RuleFile>;
