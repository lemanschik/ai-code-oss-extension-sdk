import * as vscode from "vscode";
import type { FileMetadataEntry } from "./ContextTrackerTypes";
import type { ClineMessage } from "../../../shared/ExtensionMessage";
/**
This class is responsible for tracking file operations.
If the full contents of a file are passed to Cline via a tool, mention, or edit, the file is marked as active.
If a file is modified outside of Cline, we detect and track this change to prevent stale context.
This is used when restoring a task (non-git "checkpoint" restore), and mid-task.
*/
export declare class FileContextTracker {
    private context;
    readonly taskId: string;
    private fileWatchers;
    private recentlyModifiedFiles;
    private recentlyEditedByCline;
    constructor(context: vscode.ExtensionContext, taskId: string);
    /**
     * File watchers are set up for each file that is tracked in the task metadata.
     */
    setupFileWatcher(filePath: string): Promise<void>;
    /**
     * Tracks a file operation in metadata and sets up a watcher for the file
     * This is the main entry point for FileContextTracker and is called when a file is passed to Cline via a tool, mention, or edit.
     */
    trackFileContext(filePath: string, operation: "read_tool" | "user_edited" | "cline_edited" | "file_mentioned"): Promise<void>;
    /**
     * Adds a file to the metadata tracker
     * This handles the business logic of determining if the file is new, stale, or active.
     * It also updates the metadata with the latest read/edit dates.
     */
    addFileToFileContextTracker(context: vscode.ExtensionContext, taskId: string, filePath: string, source: FileMetadataEntry["record_source"]): Promise<void>;
    /**
     * Returns (and then clears) the set of recently modified files
     */
    getAndClearRecentlyModifiedFiles(): string[];
    /**
     * Marks a file as edited by Cline to prevent false positives in file watchers
     */
    markFileAsEditedByCline(filePath: string): void;
    /**
     * Disposes all file watchers
     */
    dispose(): void;
    /**
     * Detects files that were edited by Cline or users after a specific message timestamp
     * This is used when restoring checkpoints to warn about potential file content mismatches
     */
    detectFilesEditedAfterMessage(messageTs: number, deletedMessages: ClineMessage[]): Promise<string[]>;
    /**
     * Stores pending file context warning in workspace state so it persists across task reinitialization
     */
    storePendingFileContextWarning(files: string[]): Promise<void>;
    /**
     * Retrieves pending file context warning from workspace state (without clearing it)
     */
    retrievePendingFileContextWarning(): Promise<string[] | undefined>;
    /**
     * Retrieves and clears pending file context warning from workspace state
     */
    retrieveAndClearPendingFileContextWarning(): Promise<string[] | undefined>;
    /**
     * Static method to clean up orphaned pending file context warnings at startup
     * This removes warnings for tasks that may no longer exist
     */
    static cleanupOrphanedWarnings(context: vscode.ExtensionContext): Promise<void>;
}
