import { Controller } from "../index";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { McpMarketplaceCatalog } from "../../../shared/proto/cline/mcp";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to MCP marketplace catalog updates
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToMcpMarketplaceCatalog(_controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<McpMarketplaceCatalog>, requestId?: string): Promise<void>;
/**
 * Send an MCP marketplace catalog event to all active subscribers
 */
export declare function sendMcpMarketplaceCatalogEvent(catalog: McpMarketplaceCatalog): Promise<void>;
