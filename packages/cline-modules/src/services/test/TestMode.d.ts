/**
 * Module for managing test mode state across the extension
 * This provides a centralized way to check if the extension is running in test mode
 * instead of relying on process.env which may not be consistent across different parts of the extension
 */
import * as vscode from "vscode";
/**
 * Sets the test mode state
 * @param value Whether test mode is enabled
 */
export declare function setTestMode(value: boolean): void;
/**
 * Checks if the extension is running in test mode
 * @returns True if in test mode, false otherwise
 */
export declare function isInTestMode(): boolean;
/**
 * Initialize test mode detection and setup file watchers
 * @param webviewProvider The webview provider instance
 */
export declare function initializeTestMode(webviewProvider?: any): Promise<vscode.Disposable[]>;
/**
 * Clean up test mode resources
 */
export declare function cleanupTestMode(): void;
