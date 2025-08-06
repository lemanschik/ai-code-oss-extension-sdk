import type Anthropic from "../../anthropic-ai/sdk";
import { ClaudeCodeMessage } from "./types";
type ClaudeCodeOptions = {
    systemPrompt: string;
    messages: Anthropic.Messages.MessageParam[];
    path?: string;
    modelId: string;
    thinkingBudgetTokens?: number;
    shouldUseFile?: boolean;
};
export declare const MAX_SYSTEM_PROMPT_LENGTH = 65536;
export declare function runClaudeCode(options: ClaudeCodeOptions): AsyncGenerator<ClaudeCodeMessage | string>;
export {};
