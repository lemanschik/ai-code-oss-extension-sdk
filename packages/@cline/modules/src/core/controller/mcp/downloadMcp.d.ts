import { Controller } from "..";
import { StringRequest } from "../../../shared/proto/cline/common";
import { McpDownloadResponse } from "../../../shared/proto/cline/mcp";
/**
 * Download an MCP server from the marketplace
 * @param controller The controller instance
 * @param request The request containing the MCP ID
 * @returns MCP download response with details or error
 */
export declare function downloadMcp(controller: Controller, request: StringRequest): Promise<McpDownloadResponse>;
