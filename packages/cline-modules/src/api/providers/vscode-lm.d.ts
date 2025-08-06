import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiStream } from "../transform/stream";
import { ModelInfo } from "../../shared/api";
import * as vscode from "vscode";
import { ApiHandler, SingleCompletionHandler } from "../";
import type { LanguageModelChatSelector as LanguageModelChatSelectorFromTypes } from "./types";
interface VsCodeLmHandlerOptions {
    vsCodeLmModelSelector?: any;
}
declare module "vscode" {
    enum LanguageModelChatMessageRole {
        User = 1,
        Assistant = 2
    }
    enum LanguageModelChatToolMode {
        Auto = 1,
        Required = 2
    }
    interface LanguageModelChatSelector extends LanguageModelChatSelectorFromTypes {
    }
    interface LanguageModelChatTool {
        name: string;
        description: string;
        inputSchema?: object;
    }
    interface LanguageModelChatRequestOptions {
        justification?: string;
        modelOptions?: {
            [name: string]: any;
        };
        tools?: LanguageModelChatTool[];
        toolMode?: LanguageModelChatToolMode;
    }
    class LanguageModelTextPart {
        value: string;
        constructor(value: string);
    }
    class LanguageModelToolCallPart {
        callId: string;
        name: string;
        input: object;
        constructor(callId: string, name: string, input: object);
    }
    interface LanguageModelChatResponse {
        stream: AsyncIterable<LanguageModelTextPart | LanguageModelToolCallPart | unknown>;
        text: AsyncIterable<string>;
    }
    interface LanguageModelChat {
        readonly name: string;
        readonly id: string;
        readonly vendor: string;
        readonly family: string;
        readonly version: string;
        readonly maxInputTokens: number;
        sendRequest(messages: LanguageModelChatMessage[], options?: LanguageModelChatRequestOptions, token?: CancellationToken): Thenable<LanguageModelChatResponse>;
        countTokens(text: string | LanguageModelChatMessage, token?: CancellationToken): Thenable<number>;
    }
    class LanguageModelPromptTsxPart {
        value: unknown;
        constructor(value: unknown);
    }
    class LanguageModelToolResultPart {
        callId: string;
        content: Array<LanguageModelTextPart | LanguageModelPromptTsxPart | unknown>;
        constructor(callId: string, content: Array<LanguageModelTextPart | LanguageModelPromptTsxPart | unknown>);
    }
    class LanguageModelChatMessage {
        static User(content: string | Array<LanguageModelTextPart | LanguageModelToolResultPart>, name?: string): LanguageModelChatMessage;
        static Assistant(content: string | Array<LanguageModelTextPart | LanguageModelToolCallPart>, name?: string): LanguageModelChatMessage;
        role: LanguageModelChatMessageRole;
        content: Array<LanguageModelTextPart | LanguageModelToolResultPart | LanguageModelToolCallPart>;
        name: string | undefined;
        constructor(role: LanguageModelChatMessageRole, content: string | Array<LanguageModelTextPart | LanguageModelToolResultPart | LanguageModelToolCallPart>, name?: string);
    }
    namespace lm {
        function selectChatModels(selector?: LanguageModelChatSelector): Thenable<LanguageModelChat[]>;
    }
}
/**
 * Handles interaction with VS Code's Language Model API for chat-based operations.
 * This handler implements the ApiHandler interface to provide VS Code LM specific functionality.
 *
 * @implements {ApiHandler}
 *
 * @remarks
 * The handler manages a VS Code language model chat client and provides methods to:
 * - Create and manage chat client instances
 * - Stream messages using VS Code's Language Model API
 * - Retrieve model information
 *
 * @example
 * ```typescript
 * const options = {
 *   vsCodeLmModelSelector: { vendor: "copilot", family: "gpt-4" }
 * };
 * const handler = new VsCodeLmHandler(options);
 *
 * // Stream a conversation
 * const systemPrompt = "You are a helpful assistant";
 * const messages = [{ role: "user", content: "Hello!" }];
 * for await (const chunk of handler.createMessage(systemPrompt, messages)) {
 *   console.log(chunk);
 * }
 * ```
 */
export declare class VsCodeLmHandler implements ApiHandler, SingleCompletionHandler {
    private options;
    private client;
    private disposable;
    private currentRequestCancellation;
    constructor(options: VsCodeLmHandlerOptions);
    /**
     * Creates a language model chat client based on the provided selector.
     *
     * @param selector - Selector criteria to filter language model chat instances
     * @returns Promise resolving to the first matching language model chat instance
     * @throws Error when no matching models are found with the given selector
     *
     * @example
     * const selector = { vendor: "copilot", family: "gpt-4o" };
     * const chatClient = await createClient(selector);
     */
    createClient(selector: vscode.LanguageModelChatSelector): Promise<vscode.LanguageModelChat>;
    /**
     * Creates and streams a message using the VS Code Language Model API.
     *
     * @param systemPrompt - The system prompt to initialize the conversation context
     * @param messages - An array of message parameters following the Anthropic message format
     *
     * @yields {ApiStream} An async generator that yields either text chunks or tool calls from the model response
     *
     * @throws {Error} When vsCodeLmModelSelector option is not provided
     * @throws {Error} When the response stream encounters an error
     *
     * @remarks
     * This method handles the initialization of the VS Code LM client if not already created,
     * converts the messages to VS Code LM format, and streams the response chunks.
     * Tool calls handling is currently a work in progress.
     */
    dispose(): void;
    private extractTextFromMessage;
    private isClaudeModel;
    private countTokens;
    private calculateTotalInputTokens;
    private ensureCleanState;
    private getClient;
    private cleanTerminalOutput;
    private cleanMessageContent;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
    completePrompt(prompt: string): Promise<string>;
}
export {};
