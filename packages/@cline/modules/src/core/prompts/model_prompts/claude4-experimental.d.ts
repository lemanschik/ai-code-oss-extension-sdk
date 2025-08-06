import { McpHub } from "../../../services/mcp/McpHub";
import { BrowserSettings } from "../../../shared/BrowserSettings";
export declare const SYSTEM_PROMPT_CLAUDE4_EXPERIMENTAL: (cwd: string, supportsBrowserUse: boolean, mcpHub: McpHub, browserSettings: BrowserSettings) => Promise<string>;
