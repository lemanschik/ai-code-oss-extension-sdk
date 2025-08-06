import { ClineMessage } from "../../../shared/ExtensionMessage";
import { ApiHandler } from "../../../api/index";
import { Anthropic } from "../../../anthropic-ai/sdk";
export declare class ContextManager {
    private contextHistoryUpdates;
    constructor();
    /**
     * public function for loading contextHistoryUpdates from disk, if it exists
     */
    initializeContextHistory(taskDirectory: string): Promise<void>;
    /**
     * get the stored context history updates from disk
     */
    private getSavedContextHistory;
    /**
     * save the context history updates to disk
     */
    private saveContextHistory;
    /**
     * primary entry point for getting up to date context & truncating when required
     */
    getNewContextMessagesAndMetadata(apiConversationHistory: Anthropic.Messages.MessageParam[], clineMessages: ClineMessage[], api: ApiHandler, conversationHistoryDeletedRange: [number, number] | undefined, previousApiReqIndex: number, taskDirectory: string): Promise<{
        conversationHistoryDeletedRange: [number, number] | undefined;
        updatedConversationHistoryDeletedRange: boolean;
        truncatedConversationHistory: Anthropic.Messages.MessageParam[];
    }>;
    /**
     * get truncation range
     */
    getNextTruncationRange(apiMessages: Anthropic.Messages.MessageParam[], currentDeletedRange: [number, number] | undefined, keep: "none" | "lastTwo" | "half" | "quarter"): [number, number];
    /**
     * external interface to support old calls
     */
    getTruncatedMessages(messages: Anthropic.Messages.MessageParam[], deletedRange: [number, number] | undefined): Anthropic.Messages.MessageParam[];
    /**
     * apply all required truncation methods to the messages in context
     */
    private getAndAlterTruncatedMessages;
    /**
     * applies deletedRange truncation and other alterations based on changes in this.contextHistoryUpdates
     */
    private applyContextHistoryUpdates;
    /**
     * removes all context history updates that occurred after the specified timestamp and saves to disk
     */
    truncateContextHistory(timestamp: number, taskDirectory: string): Promise<void>;
    /**
     * alters the context history to remove all alterations after a given timestamp
     * removes the index if there are no alterations there anymore, both outer and inner indices
     */
    private truncateContextHistoryAtTimestamp;
    /**
     * applies the context optimization steps and returns whether any changes were made
     */
    private applyContextOptimizations;
    /**
     * Public function for triggering potentially setting the truncation message
     * If the truncation message already exists, does nothing, otherwise adds the message
     */
    triggerApplyStandardContextTruncationNoticeChange(timestamp: number, taskDirectory: string): Promise<void>;
    /**
     * if there is any truncation and there is no other alteration already set, alter the assistant message to indicate this occurred
     */
    private applyStandardContextTruncationNoticeChange;
    /**
     * wraps the logic for determining file reads to overwrite, and altering state
     * returns whether any updates were made (bool) and indices where updates were made
     */
    private findAndPotentiallySaveFileReadContextHistoryUpdates;
    /**
     * generate a mapping from unique file reads from multiple tool calls to their outer index position(s)
     * also return additional metadata to support multiple file reads in file mention text blocks
     */
    private getPossibleDuplicateFileReads;
    /**
     * handles potential file content mentions in text blocks
     * there will not be more than one of the same file read in a text block
     */
    private handlePotentialFileMentionCalls;
    /**
     * parses specific tool call formats, returns null if no acceptable format is found
     */
    private parsePotentialToolCall;
    /**
     * file_read tool call always pastes the file, so this is always a hit
     */
    private handleReadFileToolCall;
    /**
     * write_to_file and replace_in_file tool output are handled similarly
     */
    private handlePotentialFileChangeToolCalls;
    /**
     * alter all occurrences of file read operations and track which messages were updated
     * returns the outer index of messages we alter, to count number of changes
     */
    private applyFileReadContextHistoryUpdates;
    /**
     * count total characters in messages and total savings within this range
     */
    private countCharactersAndSavingsInRange;
    /**
     * count total percentage character savings across in-range conversation
     */
    private calculateContextOptimizationMetrics;
}
