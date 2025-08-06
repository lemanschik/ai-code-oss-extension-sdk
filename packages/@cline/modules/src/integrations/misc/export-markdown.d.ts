import { Anthropic } from "../../anthropic-ai/sdk";
export declare function downloadTask(dateTs: number, conversationHistory: Anthropic.MessageParam[]): Promise<void>;
export declare function formatContentBlockToMarkdown(block: Anthropic.ContentBlockParam): string;
