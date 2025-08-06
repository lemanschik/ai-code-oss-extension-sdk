import { McpServer } from "../../mcp";
import { McpServer as ProtoMcpServer } from "../../proto/cline/mcp";
export declare function convertMcpServersToProtoMcpServers(mcpServers: McpServer[]): ProtoMcpServer[];
export declare function convertProtoMcpServersToMcpServers(protoServers: ProtoMcpServer[]): McpServer[];
