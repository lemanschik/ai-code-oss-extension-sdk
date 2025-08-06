import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../../api/index";
import { ApiStream } from "../../api/transform/stream";
import { TerminalManager } from "../../integrations/terminal/TerminalManager";
import { BrowserSession } from "../../services/browser/BrowserSession";
import { ApiConfiguration } from "../../shared/api";
import { AutoApprovalSettings } from "../../shared/AutoApprovalSettings";
import { BrowserSettings } from "../../shared/BrowserSettings";
import { ClineAsk, ClineSay } from "../../shared/ExtensionMessage";
import { HistoryItem } from "../../shared/HistoryItem";
import { ClineAskResponse, ClineCheckpointRestore } from "../../shared/WebviewMessage";
import * as vscode from "vscode";
import { ToolUseName } from "../assistant-message";
import { ContextManager } from "../context/context-management/ContextManager";
import WorkspaceTracker from "../../integrations/workspace/WorkspaceTracker";
import { McpHub } from "../../services/mcp/McpHub";
import { MessageStateHandler } from "./message-state";
import { TaskState } from "./TaskState";
import { CacheService } from "../storage/CacheService";
import { Mode, OpenaiReasoningEffort } from "../../shared/storage/types";
export declare const USE_EXPERIMENTAL_CLAUDE4_FEATURES = false;
export type ToolResponse = string | Array<Anthropic.TextBlockParam | Anthropic.ImageBlockParam>;
type UserContent = Array<Anthropic.ContentBlockParam>;
export declare class Task {
    readonly taskId: string;
    private taskIsFavorited?;
    private cwd;
    taskState: TaskState;
    private enableCheckpoints;
    private context;
    private mcpHub;
    private workspaceTracker;
    api: ApiHandler;
    terminalManager: TerminalManager;
    private urlContentFetcher;
    browserSession: BrowserSession;
    contextManager: ContextManager;
    private diffViewProvider;
    private checkpointTracker?;
    private clineIgnoreController;
    private toolExecutor;
    private fileContextTracker;
    private modelContextTracker;
    private updateTaskHistory;
    private postStateToWebview;
    private reinitExistingTaskFromId;
    private cancelTask;
    private cacheService;
    autoApprovalSettings: AutoApprovalSettings;
    browserSettings: BrowserSettings;
    preferredLanguage: string;
    openaiReasoningEffort: OpenaiReasoningEffort;
    mode: Mode;
    messageStateHandler: MessageStateHandler;
    constructor(context: vscode.ExtensionContext, mcpHub: McpHub, workspaceTracker: WorkspaceTracker, updateTaskHistory: (historyItem: HistoryItem) => Promise<HistoryItem[]>, postStateToWebview: () => Promise<void>, reinitExistingTaskFromId: (taskId: string) => Promise<void>, cancelTask: () => Promise<void>, apiConfiguration: ApiConfiguration, autoApprovalSettings: AutoApprovalSettings, browserSettings: BrowserSettings, preferredLanguage: string, openaiReasoningEffort: OpenaiReasoningEffort, mode: Mode, strictPlanModeEnabled: boolean, shellIntegrationTimeout: number, terminalReuseEnabled: boolean, terminalOutputLineLimit: number, defaultTerminalProfile: string, enableCheckpointsSetting: boolean, cwd: string, cacheService: CacheService, task?: string, images?: string[], files?: string[], historyItem?: HistoryItem);
    updateMode(mode: Mode): void;
    updateStrictPlanMode(strictPlanModeEnabled: boolean): void;
    private getContext;
    /**
     * Updates the auto approval settings for this task
     */
    updateAutoApprovalSettings(settings: AutoApprovalSettings): void;
    restoreCheckpoint(messageTs: number, restoreType: ClineCheckpointRestore, offset?: number): Promise<void>;
    presentMultifileDiff(messageTs: number, seeNewChangesSinceLastTaskCompletion: boolean): Promise<void>;
    doesLatestTaskCompletionHaveNewChanges(): Promise<boolean>;
    ask(type: ClineAsk, text?: string, partial?: boolean): Promise<{
        response: ClineAskResponse;
        text?: string;
        images?: string[];
        files?: string[];
    }>;
    handleWebviewAskResponse(askResponse: ClineAskResponse, text?: string, images?: string[], files?: string[]): Promise<void>;
    say(type: ClineSay, text?: string, images?: string[], files?: string[], partial?: boolean): Promise<undefined>;
    sayAndCreateMissingParamError(toolName: ToolUseName, paramName: string, relPath?: string): Promise<string>;
    removeLastPartialMessageIfExistsWithType(type: "ask" | "say", askOrSay: ClineAsk | ClineSay): Promise<void>;
    private startTask;
    private resumeTaskFromHistory;
    private initiateTaskLoop;
    abortTask(): Promise<void>;
    saveCheckpoint(isAttemptCompletionMessage?: boolean): Promise<void>;
    /**
     * Executes a command directly in Node.js using execa
     * This is used in test mode to capture the full output without using the VS Code terminal
     * Commands are automatically terminated after 30 seconds using Promise.race
     */
    private executeCommandInNode;
    executeCommandTool(command: string): Promise<[boolean, ToolResponse]>;
    /**
     * Migrates the disableBrowserTool setting from VSCode configuration to browserSettings
     */
    private migrateDisableBrowserToolSetting;
    private getCurrentProviderInfo;
    attemptApiRequest(previousApiReqIndex: number): ApiStream;
    presentAssistantMessage(): Promise<void>;
    recursivelyMakeClineRequests(userContent: UserContent, includeFileDetails?: boolean): Promise<boolean>;
    loadContext(userContent: UserContent, includeFileDetails?: boolean): Promise<[UserContent, string, boolean]>;
    getEnvironmentDetails(includeFileDetails?: boolean): Promise<string>;
}
export {};
