/**
 * Cleans up legacy checkpoints from task folders.
 * This is a one-time operation that runs when the extension is updated to use the new checkpoint system.
 *
 * @param globalStoragePath - Path to the extension's global storage
 */
export declare function cleanupLegacyCheckpoints(globalStoragePath: string): Promise<void>;
