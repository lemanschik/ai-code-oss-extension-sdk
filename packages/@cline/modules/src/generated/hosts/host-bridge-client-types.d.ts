import * as proto from "../../shared/proto/index";
import { StreamingCallbacks } from "../../hosts/host-provider-types";
/**
 * Interface for DiffService client.
 */
export interface DiffServiceClientInterface {
    openDiff(request: proto.host.OpenDiffRequest): Promise<proto.host.OpenDiffResponse>;
    getDocumentText(request: proto.host.GetDocumentTextRequest): Promise<proto.host.GetDocumentTextResponse>;
    replaceText(request: proto.host.ReplaceTextRequest): Promise<proto.host.ReplaceTextResponse>;
    scrollDiff(request: proto.host.ScrollDiffRequest): Promise<proto.host.ScrollDiffResponse>;
    truncateDocument(request: proto.host.TruncateDocumentRequest): Promise<proto.host.TruncateDocumentResponse>;
    saveDocument(request: proto.host.SaveDocumentRequest): Promise<proto.host.SaveDocumentResponse>;
    closeDiff(request: proto.host.CloseDiffRequest): Promise<proto.host.CloseDiffResponse>;
}
/**
 * Interface for EnvService client.
 */
export interface EnvServiceClientInterface {
    clipboardWriteText(request: proto.cline.StringRequest): Promise<proto.cline.Empty>;
    clipboardReadText(request: proto.cline.EmptyRequest): Promise<proto.cline.String>;
}
/**
 * Interface for WatchService client.
 */
export interface WatchServiceClientInterface {
    subscribeToFile(request: proto.host.SubscribeToFileRequest, callbacks: StreamingCallbacks<proto.host.FileChangeEvent>): () => void;
}
/**
 * Interface for WindowService client.
 */
export interface WindowServiceClientInterface {
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
 * Interface for WorkspaceService client.
 */
export interface WorkspaceServiceClientInterface {
    getWorkspacePaths(request: proto.host.GetWorkspacePathsRequest): Promise<proto.host.GetWorkspacePathsResponse>;
    saveOpenDocumentIfDirty(request: proto.host.SaveOpenDocumentIfDirtyRequest): Promise<proto.host.SaveOpenDocumentIfDirtyResponse>;
}
