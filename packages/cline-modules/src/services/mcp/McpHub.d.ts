import { McpResourceResponse, McpServer, McpToolCallResponse } from "../../shared/mcp";
import { McpConnection, McpServerConfig } from "./types";
export declare class McpHub {
    getMcpServersPath: () => Promise<string>;
    private getSettingsDirectoryPath;
    private clientVersion;
    private disposables;
    private settingsWatcher?;
    private fileWatchers;
    connections: McpConnection[];
    isConnecting: boolean;
    private pendingNotifications;
    private notificationCallback?;
    constructor(getMcpServersPath: () => Promise<string>, getSettingsDirectoryPath: () => Promise<string>, clientVersion: string);
    getServers(): McpServer[];
    getMcpSettingsFilePath(): Promise<string>;
    private readAndValidateMcpSettingsFile;
    private watchMcpSettingsFile;
    private initializeMcpServers;
    private findConnection;
    private connectToServer;
    private appendErrorMessage;
    private fetchToolsList;
    private fetchResourcesList;
    private fetchResourceTemplatesList;
    deleteConnection(name: string): Promise<void>;
    updateServerConnectionsRPC(newServers: Record<string, McpServerConfig>): Promise<void>;
    updateServerConnections(newServers: Record<string, McpServerConfig>): Promise<void>;
    private setupFileWatcher;
    private removeAllFileWatchers;
    restartConnectionRPC(serverName: string): Promise<McpServer[]>;
    restartConnection(serverName: string): Promise<void>;
    /**
     * Gets sorted MCP servers based on the order defined in settings
     * @param serverOrder Array of server names in the order they appear in settings
     * @returns Array of McpServer objects sorted according to settings order
     */
    private getSortedMcpServers;
    private notifyWebviewOfServerChanges;
    sendLatestMcpServers(): Promise<void>;
    getLatestMcpServersRPC(): Promise<McpServer[]>;
    toggleServerDisabledRPC(serverName: string, disabled: boolean): Promise<McpServer[]>;
    readResource(serverName: string, uri: string): Promise<McpResourceResponse>;
    callTool(serverName: string, toolName: string, toolArguments?: Record<string, unknown>): Promise<McpToolCallResponse>;
    /**
     * RPC variant of toggleToolAutoApprove that returns the updated servers instead of notifying the webview
     * @param serverName The name of the MCP server
     * @param toolNames Array of tool names to toggle auto-approve for
     * @param shouldAllow Whether to enable or disable auto-approve
     * @returns Array of updated MCP servers
     */
    toggleToolAutoApproveRPC(serverName: string, toolNames: string[], shouldAllow: boolean): Promise<McpServer[]>;
    toggleToolAutoApprove(serverName: string, toolNames: string[], shouldAllow: boolean): Promise<void>;
    addRemoteServer(serverName: string, serverUrl: string): Promise<McpServer[]>;
    /**
     * RPC variant of deleteServer that returns the updated server list directly
     * @param serverName The name of the server to delete
     * @returns Array of remaining MCP servers
     */
    deleteServerRPC(serverName: string): Promise<McpServer[]>;
    updateServerTimeoutRPC(serverName: string, timeout: number): Promise<McpServer[]>;
    /**
     * Get and clear pending notifications
     * @returns Array of pending notifications
     */
    getPendingNotifications(): Array<{
        serverName: string;
        level: string;
        message: string;
        timestamp: number;
    }>;
    /**
     * Set the notification callback for real-time notifications
     * @param callback Function to call when notifications arrive
     */
    setNotificationCallback(callback: (serverName: string, level: string, message: string) => void): void;
    /**
     * Clear the notification callback
     */
    clearNotificationCallback(): void;
    dispose(): Promise<void>;
}
