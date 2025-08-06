import type { Empty } from "../../../shared/proto/cline/common";
import { McpServers } from "../../../shared/proto/cline/mcp";
import type { Controller } from "../index";
/**
 * RPC handler for getting the latest MCP servers
 * @param controller The controller instance
 * @param _request Empty request
 * @returns McpServers response with list of all MCP servers
 */
export declare function getLatestMcpServers(controller: Controller, _request: Empty): Promise<McpServers>;
