import { Anthropic } from "../../anthropic-ai/sdk";
import * as vscode from "vscode";
/**
 * Safely converts a value into a plain object.
 */
export declare function asObjectSafe(value: any): object;
export declare function convertToVsCodeLmMessages(anthropicMessages: Anthropic.Messages.MessageParam[]): vscode.LanguageModelChatMessage[];
export declare function convertToAnthropicRole(vsCodeLmMessageRole: vscode.LanguageModelChatMessageRole): Anthropic.Messages.MessageParam["role"] | null;
export declare function convertToAnthropicMessage(vsCodeLmMessage: vscode.LanguageModelChatMessage): Anthropic.Messages.Message;
