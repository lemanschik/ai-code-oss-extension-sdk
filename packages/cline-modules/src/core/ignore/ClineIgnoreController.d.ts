export declare const LOCK_TEXT_SYMBOL = "\uD83D\uDD12";
/**
 * Controls LLM access to files by enforcing ignore patterns.
 * Designed to be instantiated once in Cline.ts and passed to file manipulation services.
 * Uses the 'ignore' library to support standard .gitignore syntax in .clineignore files.
 */
export declare class ClineIgnoreController {
    private cwd;
    private ignoreInstance;
    private disposables;
    clineIgnoreContent: string | undefined;
    constructor(cwd: string);
    /**
     * Initialize the controller by loading custom patterns
     * Must be called after construction and before using the controller
     */
    initialize(): Promise<void>;
    /**
     * Set up the file watcher for .clineignore changes
     */
    private setupFileWatcher;
    /**
     * Load custom patterns from .clineignore if it exists.
     * Supports "!include <filename>" to load additional ignore patterns from other files.
     */
    private loadClineIgnore;
    /**
     * Process ignore content and apply all ignore patterns
     */
    private processIgnoreContent;
    /**
     * Process !include directives and combine all included file contents
     */
    private processClineIgnoreIncludes;
    /**
     * Read content from an included file specified by !include directive
     */
    private readIncludedFile;
    /**
     * Check if a file should be accessible to the LLM
     * @param filePath - Path to check (relative to cwd)
     * @returns true if file is accessible, false if ignored
     */
    validateAccess(filePath: string): boolean;
    /**
     * Check if a terminal command should be allowed to execute based on file access patterns
     * @param command - Terminal command to validate
     * @returns path of file that is being accessed if it is being accessed, undefined if command is allowed
     */
    validateCommand(command: string): string | undefined;
    /**
     * Filter an array of paths, removing those that should be ignored
     * @param paths - Array of paths to filter (relative to cwd)
     * @returns Array of allowed paths
     */
    filterPaths(paths: string[]): string[];
    /**
     * Clean up resources when the controller is no longer needed
     */
    dispose(): void;
}
