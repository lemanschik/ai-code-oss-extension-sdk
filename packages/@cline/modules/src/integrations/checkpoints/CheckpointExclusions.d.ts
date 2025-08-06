/**
 * CheckpointExclusions Module
 *
 * A specialized module within Cline's Checkpoints system that manages file exclusion rules
 * for the checkpoint tracking process. It provides:
 *
 * File Filtering:
 * - File types (build artifacts, media, cache files, etc.)
 * - Git LFS patterns from workspace
 * - Environment and configuration files
 * - Temporary and cache files
 *
 * Pattern Management:
 * - Extensible category-based pattern system
 * - Comprehensive file type coverage
 * - Easy pattern updates and maintenance
 *
 * Git Integration:
 * - Seamless integration with Git's exclude mechanism
 * - Support for workspace-specific LFS patterns
 * - Automatic pattern updates during checkpoints
 *
 * The module ensures efficient checkpoint creation by preventing unnecessary tracking
 * of large files, binary files, and temporary artifacts while maintaining a clean
 * and organized checkpoint history.
 */
/**
 * Returns the default list of file and directory patterns to exclude from checkpoints.
 * Combines built-in patterns with workspace-specific LFS patterns.
 *
 * @param lfsPatterns - Optional array of Git LFS patterns from workspace
 * @returns Array of glob patterns to exclude
 * @todo Make this configurable by the user
 */
export declare const getDefaultExclusions: (lfsPatterns?: string[]) => string[];
/**
 * Writes the combined exclusion patterns to Git's exclude file.
 * Creates the info directory if it doesn't exist.
 *
 * @param gitPath - Path to the .git directory
 * @param lfsPatterns - Optional array of Git LFS patterns to include
 */
export declare const writeExcludesFile: (gitPath: string, lfsPatterns?: string[]) => Promise<void>;
/**
 * Retrieves Git LFS patterns from the workspace's .gitattributes file.
 * Returns an empty array if no patterns found or file doesn't exist.
 *
 * @param workspacePath - Path to the workspace root
 * @returns Array of Git LFS patterns found in .gitattributes
 */
export declare const getLfsPatterns: (workspacePath: string) => Promise<string[]>;
