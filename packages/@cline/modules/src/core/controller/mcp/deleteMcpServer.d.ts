import type { Controller } from "../index";
import { McpServers } from "../../../shared/proto/cline/mcp";
import { StringRequest } from "../../../shared/proto/cline/common";
/**
 * Deletes an MCP server
 * @param controller The controller instance
 * @param request The delete server request
 * @returns The list of remaining MCP servers after deletion
 */
export declare function deleteMcpServer(controller: Controller, request: StringRequest): Promise<McpServers>;
