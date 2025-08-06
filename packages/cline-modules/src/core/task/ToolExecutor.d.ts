import { ApiHandler } from "../../api/index";
import { FileContextTracker } from "../context/context-tracking/FileContextTracker";
import { ClineIgnoreController } from "../ignore/ClineIgnoreController";
import { DiffViewProvider } from "../../integrations/editor/DiffViewProvider";
import WorkspaceTracker from "../../integrations/workspace/WorkspaceTracker";
import { BrowserSession } from "../../services/browser/BrowserSession";
import { UrlContentFetcher } from "../../services/browser/UrlContentFetcher";
import { McpHub } from "../../services/mcp/McpHub";
import { AutoApprovalSettings } from "../../shared/AutoApprovalSettings";
import { BrowserSettings } from "../../shared/BrowserSettings";
import { ClineAsk, ClineSay } from "../../shared/ExtensionMessage";
import { ClineAskResponse } from "../../shared/WebviewMessage";
import * as vscode from "vscode";
import { ToolUse, ToolUseName } from "../assistant-message";
import { ContextManager } from "../context/context-management/ContextManager";
import { CacheService } from "../storage/CacheService";
import { TaskState } from "./TaskState";
import { MessageStateHandler } from "./message-state";
import { Mode } from "../../shared/storage/types";
export declare class ToolExecutor {
    private context;
    private taskState;
    private messageStateHandler;
    private api;
    private urlContentFetcher;
    private browserSession;
    private diffViewProvider;
    private mcpHub;
    private fileContextTracker;
    private clineIgnoreController;
    private workspaceTracker;
    private contextManager;
    private cacheService;
    private autoApprovalSettings;
    private browserSettings;
    private cwd;
    private taskId;
    private mode;
    private strictPlanModeEnabled;
    private say;
    private ask;
    private saveCheckpoint;
    private sayAndCreateMissingParamError;
    private removeLastPartialMessageIfExistsWithType;
    private executeCommandTool;
    private doesLatestTaskCompletionHaveNewChanges;
    private autoApprover;
    private shouldAutoApproveTool;
    private shouldAutoApproveToolWithPath;
    constructor(context: vscode.ExtensionContext, taskState: TaskState, messageStateHandler: MessageStateHandler, api: ApiHandler, urlContentFetcher: UrlContentFetcher, browserSession: BrowserSession, diffViewProvider: DiffViewProvider, mcpHub: McpHub, fileContextTracker: FileContextTracker, clineIgnoreController: ClineIgnoreController, workspaceTracker: WorkspaceTracker, contextManager: ContextManager, cacheService: CacheService, autoApprovalSettings: AutoApprovalSettings, browserSettings: BrowserSettings, cwd: string, taskId: string, mode: Mode, strictPlanModeEnabled: boolean, say: (type: ClineSay, text?: string, images?: string[], files?: string[], partial?: boolean) => Promise<undefined>, ask: (type: ClineAsk, text?: string, partial?: boolean) => Promise<{
        response: ClineAskResponse;
        text?: string;
        images?: string[];
        files?: string[];
    }>, saveCheckpoint: (isAttemptCompletionMessage?: boolean) => Promise<void>, sayAndCreateMissingParamError: (toolName: ToolUseName, paramName: string, relPath?: string) => Promise<any>, removeLastPartialMessageIfExistsWithType: (type: "ask" | "say", askOrSay: ClineAsk | ClineSay) => Promise<void>, executeCommandTool: (command: string) => Promise<[boolean, any]>, doesLatestTaskCompletionHaveNewChanges: () => Promise<boolean>);
    /**
     * Updates the auto approval settings
     */
    updateAutoApprovalSettings(settings: AutoApprovalSettings): void;
    /**
     * Defines the tools which should be restricted in plan mode
     */
    private isPlanModeToolRestricted;
    updateMode(mode: Mode): void;
    updateStrictPlanModeEnabled(strictPlanModeEnabled: boolean): void;
    private pushToolResult;
    private toolDescription;
    private pushAdditionalToolFeedback;
    private askApproval;
    private handleError;
    private removeClosingTag;
    private handleStreamingJsonReplacement;
    executeTool(block: ToolUse): Promise<void>;
}
