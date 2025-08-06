import type { ToggleToolAutoApproveRequest } from "../../../shared/proto/cline/mcp";
import { McpServers } from "../../../shared/proto/cline/mcp";
import type { Controller } from "../index";
/**
 * Toggles auto-approve setting for MCP server tools
 * @param controller The controller instance
 * @param request The toggle tool auto-approve request
 * @returns Updated list of MCP servers
 */
export declare function toggleToolAutoApprove(controller: Controller, request: ToggleToolAutoApproveRequest): Promise<McpServers>;
