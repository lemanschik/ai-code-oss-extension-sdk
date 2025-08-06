import { McpHub } from "../../../services/mcp/McpHub";
import { BrowserSettings } from "../../../shared/BrowserSettings";
export declare const SYSTEM_PROMPT_CLAUDE4: (cwd: string, supportsBrowserUse: boolean, mcpHub: McpHub, browserSettings: BrowserSettings) => Promise<string>;
export declare function addUserInstructions(globalClineRulesFileInstructions?: string, localClineRulesFileInstructions?: string, localCursorRulesFileInstructions?: string, localCursorRulesDirInstructions?: string, localWindsurfRulesFileInstructions?: string, clineIgnoreInstructions?: string, preferredLanguageInstructions?: string): string;
