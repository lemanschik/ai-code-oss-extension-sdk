import { Anthropic } from "../../anthropic-ai/sdk";
import { LiteLLMModelInfo } from "../../shared/api";
import { ApiHandler } from "..";
import { ApiStream } from "../transform/stream";
interface LiteLlmHandlerOptions {
    liteLlmApiKey?: string;
    liteLlmBaseUrl?: string;
    liteLlmModelId?: string;
    liteLlmModelInfo?: LiteLLMModelInfo;
    thinkingBudgetTokens?: number;
    liteLlmUsePromptCache?: boolean;
    taskId?: string;
}
export declare class LiteLlmHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: LiteLlmHandlerOptions);
    private ensureClient;
    calculateCost(prompt_tokens: number, completion_tokens: number): Promise<number | undefined>;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: LiteLLMModelInfo;
    };
}
export {};
