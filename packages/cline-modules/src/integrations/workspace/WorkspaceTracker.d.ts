declare class WorkspaceTracker {
    private disposables;
    private filePaths;
    private cwd;
    constructor();
    private initializeCwd;
    private get activeFiles();
    populateFilePaths(): Promise<void>;
    private registerListeners;
    private onFilesCreated;
    private onFilesDeleted;
    private onFilesRenamed;
    private workspaceDidUpdate;
    private normalizeFilePath;
    private addFilePath;
    private removeFilePath;
    dispose(): void;
}
export default WorkspaceTracker;
