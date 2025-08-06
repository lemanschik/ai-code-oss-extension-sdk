export interface AutoApprovalSettings {
    version: number;
    enabled: boolean;
    actions: {
        readFiles: boolean;
        readFilesExternally?: boolean;
        editFiles: boolean;
        editFilesExternally?: boolean;
        executeSafeCommands?: boolean;
        executeAllCommands?: boolean;
        useBrowser: boolean;
        useMcp: boolean;
    };
    maxRequests: number;
    enableNotifications: boolean;
    favorites: string[];
}
export declare const DEFAULT_AUTO_APPROVAL_SETTINGS: AutoApprovalSettings;
