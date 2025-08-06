export declare abstract class DiffViewProvider {
    editType?: "create" | "modify";
    isEditing: boolean;
    originalContent: string | undefined;
    private createdDirs;
    protected documentWasOpen: boolean;
    protected relPath?: string;
    protected absolutePath?: string;
    protected fileEncoding: string;
    private streamedLines;
    private newContent?;
    constructor();
    open(relPath: string): Promise<void>;
    /**
     * Opens a diff editor or viewer for the current file.
     *
     * Called automatically by the `open` method after ensuring the file exists and
     * creating any necessary directories.
     *
     * @returns A promise that resolves when the diff editor is open and ready
     */
    protected abstract openDiffEditor(): Promise<void>;
    /**
     * Scrolls the diff editor to reveal a specific line.
     *
     * It's used during streaming updates to keep the user's view focused on the changing content.
     *
     * @param line The 0-based line number to scroll to
     */
    protected abstract scrollEditorToLine(line: number): Promise<void>;
    /**
     * Creates a smooth scrolling animation between two lines in the diff editor.
     *
     * It's typically used when updates contain many lines, to help the user visually track the flow
     * of significant changes in the document.
     *
     * @param startLine The 0-based line number to begin the animation from
     * @param endLine The 0-based line number to animate to
     */
    protected abstract scrollAnimation(startLine: number, endLine: number): Promise<void>;
    /**
     * Removes content from the specified line to the end of the document.
     * Called after the final update is received.
     */
    protected abstract truncateDocument(lineNumber: number): Promise<void>;
    /**
     * Get the contents of the diff editor document.
     *
     * Returns undefined if the diff editor was closed.
     */
    protected abstract getDocumentText(): Promise<string | undefined>;
    /**
     * Get any new diagnostic problems that appeared after applying the diff.
     *
     * Getting diagnostics before and after the file edit is a better approach than
     * automatically tracking problems in real-time. This method ensures we only
     * report new problems that are a direct result of this specific edit.
     * Since these are new problems resulting from Cline's edit, we know they're
     * directly related to the work he's doing. This eliminates the risk of Cline
     * going off-task or getting distracted by unrelated issues, which was a problem
     * with the previous auto-debug approach. Some users' machines may be slow to
     * update diagnostics, so this approach provides a good balance between automation
     * and avoiding potential issues where Cline might get stuck in loops due to
     * outdated problem information. If no new problems show up by the time the user
     * accepts the changes, they can always debug later using the '../../problems' mention.
     * This way, Cline only becomes aware of new problems resulting from his edits
     * and can address them accordingly. If problems don't change immediately after
     * applying a fix, Cline won't be notified, which is generally fine since the
     * initial fix is usually correct and it may just take time for linters to catch up.
     */
    protected abstract getNewDiagnosticProblems(): Promise<string>;
    /**
     * Save the contents of the diff editor UI to the file.
     *
     * @returns true if the file was saved.
     */
    protected abstract saveDocument(): Promise<Boolean>;
    /**
     * Closes the diff editor tab or window.
     */
    protected abstract closeDiffView(): Promise<void>;
    /**
     * Cleans up the diff view resources and resets internal state.
     */
    protected abstract resetDiffView(): Promise<void>;
    update(accumulatedContent: string, isFinal: boolean, changeLocation?: {
        startLine: number;
        endLine: number;
        startChar: number;
        endChar: number;
    }): Promise<void>;
    /**
     * Replaces text in the diff editor with the specified content.
     *
     * This abstract method must be implemented by subclasses to handle the actual
     * text replacement in their specific diff editor implementation. It's called
     * during the streaming update process to progressively show changes.
     *
     * @param content The new content to insert into the document
     * @param rangeToReplace An object specifying the line range to replace
     * @param currentLine The current line number being edited, used for scroll positioning
     * @returns A promise that resolves when the text replacement is complete
     */
    abstract replaceText(content: string, rangeToReplace: {
        startLine: number;
        endLine: number;
    }, currentLine: number | undefined): Promise<void>;
    saveChanges(): Promise<{
        newProblemsMessage: string | undefined;
        userEdits: string | undefined;
        autoFormattingEdits: string | undefined;
        finalContent: string | undefined;
    }>;
    revertChanges(): Promise<void>;
    scrollToFirstDiff(): Promise<void>;
    reset(): Promise<void>;
}
