import { ClineRulesToggles } from "../../../../shared/cline-rules";
import * as vscode from "vscode";
export declare const getGlobalClineRules: (globalClineRulesFilePath: string, toggles: ClineRulesToggles) => Promise<string | undefined>;
export declare const getLocalClineRules: (cwd: string, toggles: ClineRulesToggles) => Promise<string | undefined>;
export declare function refreshClineRulesToggles(context: vscode.ExtensionContext, workingDirectory: string): Promise<{
    globalToggles: ClineRulesToggles;
    localToggles: ClineRulesToggles;
}>;
