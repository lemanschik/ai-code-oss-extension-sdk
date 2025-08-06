import type { AddRemoteMcpServerRequest } from "../../../shared/proto/cline/mcp";
import { McpServers } from "../../../shared/proto/cline/mcp";
import type { Controller } from "../index";
/**
 * Adds a new remote MCP server via gRPC
 * @param controller The controller instance
 * @param request The request containing server name and URL
 * @returns An array of McpServer objects
 */
export declare function addRemoteMcpServer(controller: Controller, request: AddRemoteMcpServerRequest): Promise<McpServers>;
