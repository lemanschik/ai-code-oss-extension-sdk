import { Anthropic } from "../../anthropic-ai/sdk";
import WorkspaceTracker from "../../integrations/workspace/WorkspaceTracker";
import { ClineAccountService } from "../../services/account/ClineAccountService";
import { McpHub } from "../../services/mcp/McpHub";
import { ModelInfo } from "../../shared/api";
import { ChatContent } from "../../shared/ChatContent";
import { Mode } from "../../shared/storage/types";
import { ExtensionMessage, ExtensionState } from "../../shared/ExtensionMessage";
import { HistoryItem } from "../../shared/HistoryItem";
import { McpMarketplaceCatalog } from "../../shared/mcp";
import { TelemetrySetting } from "../../shared/TelemetrySetting";
import { UserInfo } from "../../shared/UserInfo";
import { WebviewMessage } from "../../shared/WebviewMessage";
import * as vscode from "vscode";
import { CacheService } from "../storage/CacheService";
import { Task } from "../task";
export declare class Controller {
    readonly context: vscode.ExtensionContext;
    readonly id: string;
    private postMessage;
    private disposables;
    task?: Task;
    workspaceTracker: WorkspaceTracker;
    mcpHub: McpHub;
    accountService: ClineAccountService;
    readonly cacheService: CacheService;
    constructor(context: vscode.ExtensionContext, postMessage: (message: ExtensionMessage) => Thenable<boolean> | undefined, id: string);
    getCurrentMode(): Promise<Mode>;
    dispose(): Promise<void>;
    handleSignOut(): Promise<void>;
    setUserInfo(info?: UserInfo): Promise<void>;
    initTask(task?: string, images?: string[], files?: string[], historyItem?: HistoryItem): Promise<void>;
    reinitExistingTaskFromId(taskId: string): Promise<void>;
    postMessageToWebview(message: ExtensionMessage): Promise<void>;
    /**
     * Sets up an event listener to listen for messages passed from the webview context and
     * executes code based on the message that is received.
     *
     * @param webview A reference to the extension webview
     */
    handleWebviewMessage(message: WebviewMessage): Promise<void>;
    updateTelemetrySetting(telemetrySetting: TelemetrySetting): Promise<void>;
    togglePlanActMode(modeToSwitchTo: Mode, chatContent?: ChatContent): Promise<boolean>;
    cancelTask(): Promise<void>;
    handleAuthCallback(customToken: string, provider?: string | null): Promise<void>;
    private fetchMcpMarketplaceFromApi;
    private fetchMcpMarketplaceFromApiRPC;
    silentlyRefreshMcpMarketplace(): Promise<void>;
    /**
     * RPC variant that silently refreshes the MCP marketplace catalog and returns the result
     * Unlike silentlyRefreshMcpMarketplace, this doesn't post a message to the webview
     * @returns MCP marketplace catalog or undefined if refresh failed
     */
    silentlyRefreshMcpMarketplaceRPC(): Promise<McpMarketplaceCatalog | undefined>;
    handleOpenRouterCallback(code: string): Promise<void>;
    private ensureCacheDirectoryExists;
    readOpenRouterModels(): Promise<Record<string, ModelInfo> | undefined>;
    getFileMentionFromPath(filePath: string): Promise<string>;
    addSelectedCodeToChat(code: string, filePath: string, languageId: string, diagnostics?: vscode.Diagnostic[]): Promise<void>;
    addSelectedTerminalOutputToChat(output: string, terminalName: string): Promise<void>;
    fixWithCline(code: string, filePath: string, languageId: string, diagnostics: vscode.Diagnostic[]): Promise<void>;
    convertDiagnosticsToProblemsString(diagnostics: vscode.Diagnostic[]): string;
    getTaskWithId(id: string): Promise<{
        historyItem: HistoryItem;
        taskDirPath: string;
        apiConversationHistoryFilePath: string;
        uiMessagesFilePath: string;
        contextHistoryFilePath: string;
        taskMetadataFilePath: string;
        apiConversationHistory: Anthropic.MessageParam[];
    }>;
    exportTaskWithId(id: string): Promise<void>;
    deleteTaskFromState(id: string): Promise<HistoryItem[]>;
    postStateToWebview(): Promise<void>;
    getStateToPostToWebview(): Promise<ExtensionState>;
    clearTask(): Promise<void>;
    updateTaskHistory(item: HistoryItem): Promise<HistoryItem[]>;
}
