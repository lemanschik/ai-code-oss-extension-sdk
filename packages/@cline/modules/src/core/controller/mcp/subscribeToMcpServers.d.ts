import { Controller } from "../index";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { McpServers } from "../../../shared/proto/cline/mcp";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to MCP servers events
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToMcpServers(controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<McpServers>, requestId?: string): Promise<void>;
/**
 * Send an MCP servers update to all active subscribers
 * @param mcpServers The MCP servers to send
 */
export declare function sendMcpServersUpdate(mcpServers: McpServers): Promise<void>;
