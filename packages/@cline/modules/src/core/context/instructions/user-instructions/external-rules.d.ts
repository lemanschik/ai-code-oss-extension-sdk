import { ClineRulesToggles } from "../../../../shared/cline-rules";
import * as vscode from "vscode";
/**
 * Refreshes the toggles for windsurf and cursor rules
 */
export declare function refreshExternalRulesToggles(context: vscode.ExtensionContext, workingDirectory: string): Promise<{
    windsurfLocalToggles: ClineRulesToggles;
    cursorLocalToggles: ClineRulesToggles;
}>;
/**
 * Gather formatted windsurf rules
 */
export declare const getLocalWindsurfRules: (cwd: string, toggles: ClineRulesToggles) => Promise<string | undefined>;
/**
 * Gather formatted cursor rules, which can come from two sources
 */
export declare const getLocalCursorRules: (cwd: string, toggles: ClineRulesToggles) => Promise<(string | undefined)[]>;
