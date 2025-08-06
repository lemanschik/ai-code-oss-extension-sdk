import { McpServers } from "../../../shared/proto/cline/mcp";
import type { Controller } from "../index";
import { StringRequest } from "../../../shared/proto/cline/common";
/**
 * Restarts an MCP server connection
 * @param controller The controller instance
 * @param request The request containing the server name
 * @returns The updated list of MCP servers
 */
export declare function restartMcpServer(controller: Controller, request: StringRequest): Promise<McpServers>;
