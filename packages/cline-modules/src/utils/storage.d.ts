/**
 * Gets the total size of tasks and checkpoints directories
 * @param storagePath The base storage path (typically globalStorageUri.fsPath)
 * @returns The total size in bytes, or null if calculation fails
 */
export declare function getTotalTasksSize(storagePath: string): Promise<number | null>;
