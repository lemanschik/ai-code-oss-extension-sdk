import { Controller } from "..";
import { RuleFileRequest, RuleFile } from "../../../shared/proto/cline/file";
/**
 * Creates a rule file in either global or workspace rules directory
 * @param controller The controller instance
 * @param request The request containing filename and isGlobal flag
 * @returns Result with file path and display name
 * @throws Error if operation fails
 */
export declare function createRuleFile(controller: Controller, request: RuleFileRequest): Promise<RuleFile>;
