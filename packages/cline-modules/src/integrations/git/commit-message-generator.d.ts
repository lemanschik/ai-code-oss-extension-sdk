import * as vscode from "vscode";
/**
 * Git commit message generator module
 */
export declare const GitCommitGenerator: {
    generate: typeof generate;
    abort: typeof abort;
};
declare function generate(context: vscode.ExtensionContext, scm?: vscode.SourceControl): Promise<void>;
declare function abort(): void;
/**
 * Extracts the commit message from the AI response
 * @param str String containing the AI response
 * @returns The extracted commit message
 */
export declare function extractCommitMessage(str: string): string;
/**
 * Copies the generated commit message to the clipboard
 * @param message The commit message to copy
 */
export declare function copyCommitMessageToClipboard(message: string): Promise<void>;
/**
 * Shows a dialog with options to apply the generated commit message
 * @param message The generated commit message
 */
export declare function showCommitMessageOptions(message: string): Promise<void>;
export {};
