import { Controller } from "..";
import { UpdateMcpTimeoutRequest, McpServers } from "../../../shared/proto/cline/mcp";
/**
 * Updates the timeout configuration for an MCP server.
 * @param controller - The Controller instance
 * @param request - Contains server name and timeout value
 * @returns Array of updated McpServer objects
 */
export declare function updateMcpTimeout(controller: Controller, request: UpdateMcpTimeoutRequest): Promise<McpServers>;
