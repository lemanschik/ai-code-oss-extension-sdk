import { AssistantMessageContent } from ".";
/**
 * @description **Version 1**
 * Parses an assistant message string potentially containing mixed text and tool usage blocks
 * marked with XML-like tags into an array of structured content objects.
 *
 * This version iterates through the message character by character, building an accumulator string.
 * It maintains state to track whether it's currently parsing text, a tool use block, or a specific tool parameter.
 * It detects the start and end of tool uses and parameters by checking if the accumulator ends with
 * the corresponding opening or closing tags.
 * Special handling is included for `write_to_file` and `new_rule` tool uses to correctly parse
 * the `content` parameter, which might contain the closing tag itself, by looking for the *last*
 * occurrence of the closing tag.
 * If the input string ends mid-tag or mid-content, the last block (text or tool use) is marked as partial.
 *
 * @param assistantMessage The raw string output from the assistant.
 * @returns An array of `AssistantMessageContent` objects, which can be `TextContent` or `ToolUse`.
 *          Blocks that were not fully closed by the end of the input string will have their `partial` flag set to `true`.
 */
export declare function parseAssistantMessageV1(assistantMessage: string): AssistantMessageContent[];
/**
 * @description **Version 2**
 * Parses an assistant message string potentially containing mixed text and tool usage blocks
 * marked with XML-like tags into an array of structured content objects.
 *
 * This version aims for efficiency by avoiding the character-by-character accumulator of V1.
 * It iterates through the string using an index `i`. At each position, it checks if the substring
 * *ending* at `i` matches any known opening or closing tags for tools or parameters using `startsWith`
 * with an offset.
 * It uses pre-computed Maps (`toolUseOpenTags`, `toolParamOpenTags`) for quick tag lookups.
 * State is managed using indices (`currentTextContentStart`, `currentToolUseStart`, `currentParamValueStart`)
 * pointing to the start of the current block within the original `assistantMessage` string.
 * Slicing is used to extract content only when a block (text, parameter, or tool use) is completed.
 * Special handling for `write_to_file` and `new_rule` content parameters is included, using `indexOf`
 * and `lastIndexOf` on the relevant slice to handle potentially nested closing tags.
 * If the input string ends mid-block, the last open block is added and marked as partial.
 *
 * @param assistantMessage The raw string output from the assistant.
 * @returns An array of `AssistantMessageContent` objects, which can be `TextContent` or `ToolUse`.
 *          Blocks that were not fully closed by the end of the input string will have their `partial` flag set to `true`.
 */
export declare function parseAssistantMessageV2(assistantMessage: string): AssistantMessageContent[];
export declare function parseAssistantMessageV3(assistantMessage: string): AssistantMessageContent[];
