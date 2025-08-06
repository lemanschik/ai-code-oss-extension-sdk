/**
 * CheckpointTracker Module
 *
 * Core implementation of Cline's Checkpoints system that provides version control
 * capabilities without interfering with the user's main Git repository. Key features:
 *
 * Shadow Git Repository:
 * - Creates and manages an isolated Git repository for tracking checkpoints
 * - Handles nested Git repositories by temporarily disabling them
 * - Configures Git settings automatically (identity, LFS, etc.)
 *
 * File Management:
 * - Integrates with CheckpointExclusions for file filtering
 * - Handles workspace validation and path resolution
 * - Manages Git worktree configuration
 *
 * Checkpoint Operations:
 * - Creates checkpoints (commits) of the current state
 * - Provides diff capabilities between checkpoints
 * - Supports resetting to previous checkpoints
 *
 * Safety Features:
 * - Prevents usage in sensitive directories (home, desktop, etc.)
 * - Validates workspace configuration
 * - Handles cleanup and resource disposal
 *
 * Checkpoint Architecture:
 * - Unique shadow git repository for each workspace
 * - Workspaces are identified by name, and hashed to a unique number
 * - All commits for a workspace are stored in one shadow git, under a single branch
 */
declare class CheckpointTracker {
    private globalStoragePath;
    private taskId;
    private cwd;
    private cwdHash;
    private lastRetrievedShadowGitConfigWorkTree?;
    private gitOperations;
    /**
     * Helper method to clean commit hashes that might have a "HEAD " prefix.
     * Used for backward compatibility with old tasks that stored hashes with the prefix.
     */
    private cleanCommitHash;
    /**
     * Creates a new CheckpointTracker instance to manage checkpoints for a specific task.
     * The constructor is private - use the static create() method to instantiate.
     *
     * @param taskId - Unique identifier for the task being tracked
     * @param cwd - The current working directory to track files in
     * @param cwdHash - Hash of the working directory path for shadow git organization
     */
    private constructor();
    /**
     * Creates a new CheckpointTracker instance for tracking changes in a task.
     * Handles initialization of the shadow git repository.
     *
     * @param taskId - Unique identifier for the task to track
     * @param globalStoragePath - the globalStorage path
     * @returns Promise resolving to new CheckpointTracker instance, or undefined if checkpoints are disabled
     * @throws Error if:
     * - globalStoragePath is not supplied
     * - Git is not installed
     * - Working directory is invalid or in a protected location
     * - Shadow git initialization fails
     *
     * Key operations:
     * - Validates git installation and settings
     * - Creates/initializes shadow git repository
     *
     * Configuration:
     * - Respects 'cline.enableCheckpoints' VS Code setting
     */
    static create(taskId: string, globalStoragePath: string | undefined, enableCheckpointsSetting: boolean): Promise<CheckpointTracker | undefined>;
    /**
     * Creates a new checkpoint commit in the shadow git repository.
     *
     * Key behaviors:
     * - Creates commit with checkpoint files in shadow git repo
     * - Caches the created commit hash
     *
     * Commit structure:
     * - Commit message: "checkpoint-{cwdHash}-{taskId}"
     * - Always allows empty commits
     *
     * Dependencies:
     * - Requires initialized shadow git (getShadowGitPath)
     * - Uses addCheckpointFiles to stage changes using 'git add .'
     * - Relies on git's native exclusion handling via the exclude file
     *
     * @returns Promise<string | undefined> The created commit hash, or undefined if:
     * - Shadow git access fails
     * - Staging files fails
     * - Commit creation fails
     * @throws Error if unable to:
     * - Access shadow git path
     * - Initialize simple-git
     * - Stage or commit files
     */
    commit(): Promise<string | undefined>;
    /**
     * Retrieves the worktree path from the shadow git configuration.
     * The worktree path indicates where the shadow git repository is tracking files,
     * which should match the current workspace directory.
     *
     * Key behaviors:
     * - Caches result in lastRetrievedShadowGitConfigWorkTree to avoid repeated reads
     * - Returns cached value if available
     * - Reads git config if no cached value exists
     *
     * Configuration read:
     * - Uses simple-git to read core.worktree config
     * - Operates on shadow git at path from getShadowGitPath()
     *
     * @returns Promise<string | undefined> The configured worktree path, or undefined if:
     * - Shadow git repository doesn't exist
     * - Config read fails
     * - No worktree is configured
     * @throws Error if unable to:
     * - Access shadow git path
     * - Initialize simple-git
     * - Read git configuration
     */
    getShadowGitConfigWorkTree(): Promise<string | undefined>;
    /**
     * Resets the shadow git repository's HEAD to a specific checkpoint commit.
     * This will discard all changes after the target commit and restore the
     * working directory to that checkpoint's state.
     *
     * Dependencies:
     * - Requires initialized shadow git (getShadowGitPath)
     * - Must be called with a valid commit hash from this task's history
     *
     * @param commitHash - The hash of the checkpoint commit to reset to
     * @returns Promise<void> Resolves when reset is complete
     * @throws Error if unable to:
     * - Access shadow git path
     * - Initialize simple-git
     * - Reset to target commit
     */
    resetHead(commitHash: string): Promise<void>;
    /**
     * Return an array describing changed files between one commit and either:
     *   - another commit, or
     *   - the current working directory (including uncommitted changes).
     *
     * If `rhsHash` is omitted, compares `lhsHash` to the working directory.
     * If you want truly untracked files to appear, `git add` them first.
     *
     * @param lhsHash - The commit to compare from (older commit)
     * @param rhsHash - The commit to compare to (newer commit).
     *                  If omitted, we compare to the working directory.
     * @returns Array of file changes with before/after content
     */
    getDiffSet(lhsHash: string, rhsHash?: string): Promise<Array<{
        relativePath: string;
        absolutePath: string;
        before: string;
        after: string;
    }>>;
    /**
     * Returns the number of files changed between two commits.
     *
     * @param lhsHash - The commit to compare from (older commit)
     * @param rhsHash - The commit to compare to (newer commit).
     *                  If omitted, we compare to the working directory.
     * @returns The number of files changed between the commits
     */
    getDiffCount(lhsHash: string, rhsHash?: string): Promise<number>;
}
export default CheckpointTracker;
