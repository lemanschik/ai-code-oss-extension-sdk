/**
 * Validates that the workspace path is valid and writable for Git operations
 * @param workspacePath The workspace path to validate
 * @throws Error if the workspace path is invalid or not writable
 */
export declare function validateWorkspacePath(workspacePath: string): Promise<void>;
/**
 * Cleans up any existing Git repository in the specified workspace path
 * @param workspacePath The workspace path to clean up
 */
export declare function cleanupPreviousGit(workspacePath: string): Promise<void>;
/**
 * Initializes a Git repository in the specified workspace path
 * @param workspacePath The workspace path to initialize Git in
 * @returns True if the repository was newly initialized
 */
export declare function initializeGitRepository(workspacePath: string): Promise<boolean>;
/**
 * Gets the file changes between the current state and the initial state
 * @param workspacePath The workspace path to check for changes
 * @returns Object containing lists of created, modified, and deleted files, plus the full diff
 */
export declare function getFileChanges(workspacePath: string): Promise<{
    created: string[];
    modified: string[];
    deleted: string[];
    diff: string;
}>;
/**
 * Calculates the tool success rate based on calls and failures
 * @param toolCalls Record of tool calls by name
 * @param toolFailures Record of tool failures by name
 * @returns The success rate as a number between 0 and 1
 */
export declare function calculateToolSuccessRate(toolCalls: Record<string, number>, toolFailures: Record<string, number>): number;
