import { ClineRulesToggles } from "../../../../shared/cline-rules";
import * as vscode from "vscode";
/**
 * Recursively traverses directory and finds all files, including checking for optional whitelisted file extension
 */
export declare function readDirectoryRecursive(directoryPath: string, allowedFileExtension: string, excludedPaths?: string[][]): Promise<string[]>;
/**
 * Gets the up to date toggles
 */
export declare function synchronizeRuleToggles(rulesDirectoryPath: string, currentToggles: ClineRulesToggles, allowedFileExtension?: string, excludedPaths?: string[][]): Promise<ClineRulesToggles>;
/**
 * Certain project rules have more than a single location where rules are allowed to be stored
 */
export declare function combineRuleToggles(toggles1: ClineRulesToggles, toggles2: ClineRulesToggles): ClineRulesToggles;
/**
 * Read the content of rules files
 */
export declare const getRuleFilesTotalContent: (rulesFilePaths: string[], basePath: string, toggles: ClineRulesToggles) => Promise<string>;
/**
 * Handles converting any directory into a file (specifically used for .clinerules and .clinerules/workflows)
 * The old .clinerules file or .clinerules/workflows file will be renamed to a default filename
 * Doesn't do anything if the dir already exists or doesn't exist
 * Returns whether there are any uncaught errors
 */
export declare function ensureLocalClineDirExists(clinerulePath: string, defaultRuleFilename: string): Promise<boolean>;
/**
 * Create a rule file or workflow file
 */
export declare const createRuleFile: (isGlobal: boolean, filename: string, cwd: string, type: string) => Promise<{
    filePath: null;
    fileExists: boolean;
} | {
    filePath: string;
    fileExists: boolean;
}>;
/**
 * Delete a rule file or workflow file
 */
export declare function deleteRuleFile(context: vscode.ExtensionContext, rulePath: string, isGlobal: boolean, type: string): Promise<{
    success: boolean;
    message: string;
}>;
