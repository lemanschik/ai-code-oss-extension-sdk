import { Anthropic } from "../anthropic-ai/sdk";
import { ApiConfiguration, ModelInfo } from "../shared/api";
import { ApiStream, ApiStreamUsageChunk } from "./transform/stream";
import { Mode } from "../shared/storage/types";
export interface ApiHandler {
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
    getApiStreamUsage?(): Promise<ApiStreamUsageChunk | undefined>;
}
export interface SingleCompletionHandler {
    completePrompt(prompt: string): Promise<string>;
}
export declare function buildApiHandler(configuration: ApiConfiguration, mode: Mode): ApiHandler;
