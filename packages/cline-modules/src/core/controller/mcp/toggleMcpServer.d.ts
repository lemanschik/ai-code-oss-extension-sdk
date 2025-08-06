import type { ToggleMcpServerRequest } from "../../../shared/proto/cline/mcp";
import { McpServers } from "../../../shared/proto/cline/mcp";
import type { Controller } from "../index";
/**
 * Toggles an MCP server's enabled/disabled status
 * @param controller The controller instance
 * @param request The request containing server ID and disabled status
 * @returns A response indicating success or failure
 */
export declare function toggleMcpServer(controller: Controller, request: ToggleMcpServerRequest): Promise<McpServers>;
