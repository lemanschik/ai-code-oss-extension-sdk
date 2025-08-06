import * as niceGrpc from "../../nice-grpc/index";
import { StreamingCallbacks } from "../../../hosts/host-provider-types";
import * as proto from "../../../shared/proto/index";
import { Channel } from "nice-grpc";
import { BaseGrpcClient } from "../../../hosts/external/grpc-types";
import { DiffServiceClientInterface } from "../host-bridge-client-types";
import { EnvServiceClientInterface } from "../host-bridge-client-types";
import { WatchServiceClientInterface } from "../host-bridge-client-types";
import { WindowServiceClientInterface } from "../host-bridge-client-types";
import { WorkspaceServiceClientInterface } from "../host-bridge-client-types";
/**
 * Type-safe client implementation for DiffService.
 */
export declare class DiffServiceClientImpl extends BaseGrpcClient<niceGrpc.host.DiffServiceClient> implements DiffServiceClientInterface {
    protected createClient(channel: Channel): niceGrpc.host.DiffServiceClient;
    openDiff(request: proto.host.OpenDiffRequest): Promise<proto.host.OpenDiffResponse>;
    getDocumentText(request: proto.host.GetDocumentTextRequest): Promise<proto.host.GetDocumentTextResponse>;
    replaceText(request: proto.host.ReplaceTextRequest): Promise<proto.host.ReplaceTextResponse>;
    scrollDiff(request: proto.host.ScrollDiffRequest): Promise<proto.host.ScrollDiffResponse>;
    truncateDocument(request: proto.host.TruncateDocumentRequest): Promise<proto.host.TruncateDocumentResponse>;
    saveDocument(request: proto.host.SaveDocumentRequest): Promise<proto.host.SaveDocumentResponse>;
    closeDiff(request: proto.host.CloseDiffRequest): Promise<proto.host.CloseDiffResponse>;
}
/**
 * Type-safe client implementation for EnvService.
 */
export declare class EnvServiceClientImpl extends BaseGrpcClient<niceGrpc.host.EnvServiceClient> implements EnvServiceClientInterface {
    protected createClient(channel: Channel): niceGrpc.host.EnvServiceClient;
    clipboardWriteText(request: proto.cline.StringRequest): Promise<proto.cline.Empty>;
    clipboardReadText(request: proto.cline.EmptyRequest): Promise<proto.cline.String>;
}
/**
 * Type-safe client implementation for WatchService.
 */
export declare class WatchServiceClientImpl extends BaseGrpcClient<niceGrpc.host.WatchServiceClient> implements WatchServiceClientInterface {
    protected createClient(channel: Channel): niceGrpc.host.WatchServiceClient;
    subscribeToFile(request: proto.host.SubscribeToFileRequest, callbacks: StreamingCallbacks<proto.host.FileChangeEvent>): () => void;
}
/**
 * Type-safe client implementation for WindowService.
 */
export declare class WindowServiceClientImpl extends BaseGrpcClient<niceGrpc.host.WindowServiceClient> implements WindowServiceClientInterface {
    protected createClient(channel: Channel): niceGrpc.host.WindowServiceClient;
    showTextDocument(request: proto.host.ShowTextDocumentRequest): Promise<proto.host.TextEditorInfo>;
    showOpenDialogue(request: proto.host.ShowOpenDialogueRequest): Promise<proto.host.SelectedResources>;
    showMessage(request: proto.host.ShowMessageRequest): Promise<proto.host.SelectedResponse>;
    showInputBox(request: proto.host.ShowInputBoxRequest): Promise<proto.host.ShowInputBoxResponse>;
    showSaveDialog(request: proto.host.ShowSaveDialogRequest): Promise<proto.host.ShowSaveDialogResponse>;
    openFile(request: proto.host.OpenFileRequest): Promise<proto.host.OpenFileResponse>;
    getOpenTabs(request: proto.host.GetOpenTabsRequest): Promise<proto.host.GetOpenTabsResponse>;
    getVisibleTabs(request: proto.host.GetVisibleTabsRequest): Promise<proto.host.GetVisibleTabsResponse>;
}
/**
 * Type-safe client implementation for WorkspaceService.
 */
export declare class WorkspaceServiceClientImpl extends BaseGrpcClient<niceGrpc.host.WorkspaceServiceClient> implements WorkspaceServiceClientInterface {
    protected createClient(channel: Channel): niceGrpc.host.WorkspaceServiceClient;
    getWorkspacePaths(request: proto.host.GetWorkspacePathsRequest): Promise<proto.host.GetWorkspacePathsResponse>;
    saveOpenDocumentIfDirty(request: proto.host.SaveOpenDocumentIfDirtyRequest): Promise<proto.host.SaveOpenDocumentIfDirtyResponse>;
}
