import type { EmptyRequest } from "../../../shared/proto/cline/common";
import { McpMarketplaceCatalog } from "../../../shared/proto/cline/mcp";
import type { Controller } from "../index";
/**
 * RPC handler that silently refreshes the MCP marketplace catalog
 * @param controller Controller instance
 * @param _request Empty request
 * @returns MCP marketplace catalog
 */
export declare function refreshMcpMarketplace(controller: Controller, _request: EmptyRequest): Promise<McpMarketplaceCatalog>;
