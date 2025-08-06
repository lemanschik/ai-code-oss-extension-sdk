export type AssistantMessageContent = TextContent | ToolUse;
export { parseAssistantMessageV1, parseAssistantMessageV2, parseAssistantMessageV3 } from "./parse-assistant-message";
export interface TextContent {
    type: "text";
    content: string;
    partial: boolean;
}
export declare const toolUseNames: readonly ["execute_command", "read_file", "write_to_file", "replace_in_file", "search_files", "list_files", "list_code_definition_names", "browser_action", "use_mcp_tool", "access_mcp_resource", "ask_followup_question", "plan_mode_respond", "load_mcp_documentation", "attempt_completion", "new_task", "condense", "report_bug", "new_rule", "web_fetch"];
export type ToolUseName = (typeof toolUseNames)[number];
export declare const toolParamNames: readonly ["command", "requires_approval", "path", "content", "diff", "regex", "file_pattern", "recursive", "action", "url", "coordinate", "text", "server_name", "tool_name", "arguments", "uri", "question", "options", "response", "result", "context", "title", "what_happened", "steps_to_reproduce", "api_request_output", "additional_context"];
export type ToolParamName = (typeof toolParamNames)[number];
export interface ToolUse {
    type: "tool_use";
    name: ToolUseName;
    params: Partial<Record<ToolParamName, string>>;
    partial: boolean;
}
