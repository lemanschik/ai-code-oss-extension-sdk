import { SimpleGit } from "simple-git";
interface CheckpointAddResult {
    success: boolean;
}
/**
 * GitOperations Class
 *
 * Handles git-specific operations for Cline's Checkpoints system.
 *
 * Key responsibilities:
 * - Git repository initialization and configuration
 * - Git settings management (user, LFS, etc.)
 * - Worktree configuration and management
 * - Managing nested git repositories during checkpoint operations
 * - File staging and checkpoint creation
 * - Shadow git repository maintenance and cleanup
 */
export declare class GitOperations {
    private cwd;
    /**
     * Creates a new GitOperations instance.
     *
     * @param cwd - The current working directory for git operations
     */
    constructor(cwd: string);
    /**
     * Initializes or verifies a shadow Git repository for checkpoint tracking.
     * Creates a new repository if one doesn't exist, or verifies the worktree
     * configuration if it does.
     *
     * Key operations:
     * - Creates/verifies shadow git repository
     * - Configures git settings (user, LFS, etc.)
     * - Sets up worktree to point to workspace
     *
     * @param gitPath - Path to the .git directory
     * @param cwd - The current working directory for git operations
     * @returns Promise<string> Path to the initialized .git directory
     * @throws Error if:
     * - Worktree verification fails for existing repository
     * - Git initialization or configuration fails
     * - Unable to create initial commit
     * - LFS pattern setup fails
     */
    initShadowGit(gitPath: string, cwd: string, taskId: string): Promise<string>;
    /**
     * Retrieves the worktree path from the shadow git configuration.
     * The worktree path indicates where the shadow git repository is tracking files,
     * which should match the current workspace directory.
     *
     * @param gitPath - Path to the .git directory
     * @returns Promise<string | undefined> The worktree path or undefined if not found
     * @throws Error if unable to get worktree path
     */
    getShadowGitConfigWorkTree(gitPath: string): Promise<string | undefined>;
    /**
     * Since we use git to track checkpoints, we need to temporarily disable nested git repos to work around git's
     * requirement of using submodules for nested repos.
     *
     * This method renames nested .git directories by adding/removing a suffix to temporarily disable/enable them.
     * The root .git directory is preserved. Uses VS Code's workspace API to find nested .git directories and
     * only processes actual directories (not files named .git).
     *
     * @param disable - If true, adds suffix to disable nested git repos. If false, removes suffix to re-enable them.
     * @throws Error if renaming any .git directory fails
     */
    renameNestedGitRepos(disable: boolean): Promise<void>;
    /**
     * Adds files to the shadow git repository while handling nested git repos.
     * Uses git commands to list files and stages them for commit.
     * Respects .gitignore and handles LFS patterns.
     *
     * Process:
     * 1. Updates exclude patterns from LFS config
     * 2. Temporarily disables nested git repos
     * 3. Gets list of tracked and untracked files from git (respecting .gitignore)
     * 4. Adds all files to git staging
     * 5. Re-enables nested git repos
     *
     * @param git - SimpleGit instance configured for the shadow git repo
     * @returns Promise<CheckpointAddResult> Object containing success status, message, and file count
     * @throws Error if:
     *  - File operations fail
     *  - Git commands error
     *  - LFS pattern updates fail
     *  - Nested git repo handling fails
     */
    addCheckpointFiles(git: SimpleGit): Promise<CheckpointAddResult>;
}
export declare const GIT_DISABLED_SUFFIX = "_disabled";
export {};
