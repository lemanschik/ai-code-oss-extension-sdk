import * as vscode from "vscode";
import { ClineMessage } from "../../shared/ExtensionMessage";
import CheckpointTracker from "../../integrations/checkpoints/CheckpointTracker";
import { HistoryItem } from "../../shared/HistoryItem";
import Anthropic from "../../anthropic-ai/sdk";
import { TaskState } from "./TaskState";
interface MessageStateHandlerParams {
    context: vscode.ExtensionContext;
    taskId: string;
    taskIsFavorited?: boolean;
    updateTaskHistory: (historyItem: HistoryItem) => Promise<HistoryItem[]>;
    taskState: TaskState;
    checkpointTrackerErrorMessage?: string;
}
export declare class MessageStateHandler {
    private apiConversationHistory;
    private clineMessages;
    private taskIsFavorited;
    private checkpointTracker;
    private checkpointTrackerErrorMessage;
    private updateTaskHistory;
    private context;
    private taskId;
    private taskState;
    constructor(params: MessageStateHandlerParams);
    setCheckpointTracker(tracker: CheckpointTracker | undefined): void;
    getApiConversationHistory(): Anthropic.MessageParam[];
    setApiConversationHistory(newHistory: Anthropic.MessageParam[]): void;
    getClineMessages(): ClineMessage[];
    setClineMessages(newMessages: ClineMessage[]): void;
    saveClineMessagesAndUpdateHistory(): Promise<void>;
    addToApiConversationHistory(message: Anthropic.MessageParam): Promise<void>;
    overwriteApiConversationHistory(newHistory: Anthropic.MessageParam[]): Promise<void>;
    addToClineMessages(message: ClineMessage): Promise<void>;
    overwriteClineMessages(newMessages: ClineMessage[]): Promise<void>;
    updateClineMessage(index: number, updates: Partial<ClineMessage>): Promise<void>;
}
export {};
