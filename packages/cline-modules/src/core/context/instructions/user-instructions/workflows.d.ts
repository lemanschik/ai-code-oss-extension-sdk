import { ClineRulesToggles } from "../../../../shared/cline-rules";
import * as vscode from "vscode";
/**
 * Refresh the workflow toggles
 */
export declare function refreshWorkflowToggles(context: vscode.ExtensionContext, workingDirectory: string): Promise<{
    globalWorkflowToggles: ClineRulesToggles;
    localWorkflowToggles: ClineRulesToggles;
}>;
