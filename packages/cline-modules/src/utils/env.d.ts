/**
 * Writes text to the system clipboard
 * @param text The text to write to the clipboard
 * @returns Promise that resolves when the operation is complete
 * @throws Error if the operation fails
 */
export declare function writeTextToClipboard(text: string): Promise<void>;
/**
 * Reads text from the system clipboard
 * @returns Promise that resolves to the clipboard text
 * @throws Error if the operation fails
 */
export declare function readTextFromClipboard(): Promise<string>;
/**
 * Opens an external URL in the default browser
 * @param url The URL to open
 * @returns Promise that resolves when the operation is complete
 * @throws Error if the operation fails
 */
export declare function openExternal(url: string): Promise<void>;
