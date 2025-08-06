import { BinaryReader, BinaryWriter } from "../../../bufbuild/protobuf/wire";
import { type handleUnaryCall, type UntypedServiceImplementation } from "../../../grpc/grpc-js";
import { Metadata } from "../cline/common";
export declare enum ShowMessageType {
    ERROR = 0,
    INFORMATION = 1,
    WARNING = 2,
    UNRECOGNIZED = -1
}
export declare function showMessageTypeFromJSON(object: any): ShowMessageType;
export declare function showMessageTypeToJSON(object: ShowMessageType): string;
export interface ShowTextDocumentRequest {
    metadata?: Metadata | undefined;
    path: string;
    options?: ShowTextDocumentOptions | undefined;
}
/** See https://code.visualstudio.com/api/references/vscode-api#TextDocumentShowOptions */
export interface ShowTextDocumentOptions {
    preview?: boolean | undefined;
    preserveFocus?: boolean | undefined;
    viewColumn?: number | undefined;
}
export interface TextEditorInfo {
    documentPath: string;
    viewColumn?: number | undefined;
    isActive: boolean;
}
export interface ShowOpenDialogueRequest {
    metadata?: Metadata | undefined;
    canSelectMany?: boolean | undefined;
    openLabel?: string | undefined;
    filters?: ShowOpenDialogueFilterOption | undefined;
}
export interface ShowOpenDialogueFilterOption {
    files: string[];
}
export interface SelectedResources {
    paths: string[];
}
export interface ShowMessageRequest {
    metadata?: Metadata | undefined;
    type: ShowMessageType;
    message: string;
    options?: ShowMessageRequestOptions | undefined;
}
export interface ShowMessageRequestOptions {
    items: string[];
    modal?: boolean | undefined;
    detail?: string | undefined;
}
export interface SelectedResponse {
    selectedOption?: string | undefined;
}
export interface ShowSaveDialogRequest {
    metadata?: Metadata | undefined;
    options?: ShowSaveDialogOptions | undefined;
}
export interface ShowSaveDialogOptions {
    defaultPath?: string | undefined;
    /**
     * A map of file types to extensions, e.g
     * "Text Files": { "extensions": ["txt", "md"] }
     */
    filters: {
        [key: string]: FileExtensionList;
    };
}
export interface ShowSaveDialogOptions_FiltersEntry {
    key: string;
    value?: FileExtensionList | undefined;
}
export interface FileExtensionList {
    extensions: string[];
}
export interface ShowSaveDialogResponse {
    /** If the user cancelled the dialog, this will be empty. */
    selectedPath?: string | undefined;
}
export interface ShowInputBoxRequest {
    metadata?: Metadata | undefined;
    title: string;
    prompt?: string | undefined;
    value?: string | undefined;
}
export interface ShowInputBoxResponse {
    response?: string | undefined;
}
export interface OpenFileRequest {
    metadata?: Metadata | undefined;
    filePath: string;
}
/** empty */
export interface OpenFileResponse {
}
/** empty */
export interface GetOpenTabsRequest {
}
export interface GetOpenTabsResponse {
    paths: string[];
}
/** empty */
export interface GetVisibleTabsRequest {
}
export interface GetVisibleTabsResponse {
    paths: string[];
}
export declare const ShowTextDocumentRequest: MessageFns<ShowTextDocumentRequest>;
export declare const ShowTextDocumentOptions: MessageFns<ShowTextDocumentOptions>;
export declare const TextEditorInfo: MessageFns<TextEditorInfo>;
export declare const ShowOpenDialogueRequest: MessageFns<ShowOpenDialogueRequest>;
export declare const ShowOpenDialogueFilterOption: MessageFns<ShowOpenDialogueFilterOption>;
export declare const SelectedResources: MessageFns<SelectedResources>;
export declare const ShowMessageRequest: MessageFns<ShowMessageRequest>;
export declare const ShowMessageRequestOptions: MessageFns<ShowMessageRequestOptions>;
export declare const SelectedResponse: MessageFns<SelectedResponse>;
export declare const ShowSaveDialogRequest: MessageFns<ShowSaveDialogRequest>;
export declare const ShowSaveDialogOptions: MessageFns<ShowSaveDialogOptions>;
export declare const ShowSaveDialogOptions_FiltersEntry: MessageFns<ShowSaveDialogOptions_FiltersEntry>;
export declare const FileExtensionList: MessageFns<FileExtensionList>;
export declare const ShowSaveDialogResponse: MessageFns<ShowSaveDialogResponse>;
export declare const ShowInputBoxRequest: MessageFns<ShowInputBoxRequest>;
export declare const ShowInputBoxResponse: MessageFns<ShowInputBoxResponse>;
export declare const OpenFileRequest: MessageFns<OpenFileRequest>;
export declare const OpenFileResponse: MessageFns<OpenFileResponse>;
export declare const GetOpenTabsRequest: MessageFns<GetOpenTabsRequest>;
export declare const GetOpenTabsResponse: MessageFns<GetOpenTabsResponse>;
export declare const GetVisibleTabsRequest: MessageFns<GetVisibleTabsRequest>;
export declare const GetVisibleTabsResponse: MessageFns<GetVisibleTabsResponse>;
/** Provides methods for working with IDE windows and editors. */
export type WindowServiceDefinition = typeof WindowServiceDefinition;
export declare const WindowServiceDefinition: {
    readonly name: "WindowService";
    readonly fullName: "host.WindowService";
    readonly methods: {
        /** Opens a text document in the editor and returns editor information. */
        readonly showTextDocument: {
            readonly name: "showTextDocument";
            readonly requestType: MessageFns<ShowTextDocumentRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TextEditorInfo>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly showOpenDialogue: {
            readonly name: "showOpenDialogue";
            readonly requestType: MessageFns<ShowOpenDialogueRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SelectedResources>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly showMessage: {
            readonly name: "showMessage";
            readonly requestType: MessageFns<ShowMessageRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SelectedResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly showInputBox: {
            readonly name: "showInputBox";
            readonly requestType: MessageFns<ShowInputBoxRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ShowInputBoxResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly showSaveDialog: {
            readonly name: "showSaveDialog";
            readonly requestType: MessageFns<ShowSaveDialogRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ShowSaveDialogResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly openFile: {
            readonly name: "openFile";
            readonly requestType: MessageFns<OpenFileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<OpenFileResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getOpenTabs: {
            readonly name: "getOpenTabs";
            readonly requestType: MessageFns<GetOpenTabsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetOpenTabsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getVisibleTabs: {
            readonly name: "getVisibleTabs";
            readonly requestType: MessageFns<GetVisibleTabsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetVisibleTabsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
/** Provides methods for working with IDE windows and editors. */
export type WindowServiceService = typeof WindowServiceService;
export declare const WindowServiceService: {
    /** Opens a text document in the editor and returns editor information. */
    readonly showTextDocument: {
        readonly path: "/host.WindowService/showTextDocument";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ShowTextDocumentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ShowTextDocumentRequest;
        readonly responseSerialize: (value: TextEditorInfo) => Buffer;
        readonly responseDeserialize: (value: Buffer) => TextEditorInfo;
    };
    readonly showOpenDialogue: {
        readonly path: "/host.WindowService/showOpenDialogue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ShowOpenDialogueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ShowOpenDialogueRequest;
        readonly responseSerialize: (value: SelectedResources) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SelectedResources;
    };
    readonly showMessage: {
        readonly path: "/host.WindowService/showMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ShowMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ShowMessageRequest;
        readonly responseSerialize: (value: SelectedResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SelectedResponse;
    };
    readonly showInputBox: {
        readonly path: "/host.WindowService/showInputBox";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ShowInputBoxRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ShowInputBoxRequest;
        readonly responseSerialize: (value: ShowInputBoxResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ShowInputBoxResponse;
    };
    readonly showSaveDialog: {
        readonly path: "/host.WindowService/showSaveDialog";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ShowSaveDialogRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ShowSaveDialogRequest;
        readonly responseSerialize: (value: ShowSaveDialogResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ShowSaveDialogResponse;
    };
    readonly openFile: {
        readonly path: "/host.WindowService/openFile";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: OpenFileRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => OpenFileRequest;
        readonly responseSerialize: (value: OpenFileResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => OpenFileResponse;
    };
    readonly getOpenTabs: {
        readonly path: "/host.WindowService/getOpenTabs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOpenTabsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOpenTabsRequest;
        readonly responseSerialize: (value: GetOpenTabsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetOpenTabsResponse;
    };
    readonly getVisibleTabs: {
        readonly path: "/host.WindowService/getVisibleTabs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetVisibleTabsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetVisibleTabsRequest;
        readonly responseSerialize: (value: GetVisibleTabsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetVisibleTabsResponse;
    };
};
export interface WindowServiceServer extends UntypedServiceImplementation {
    /** Opens a text document in the editor and returns editor information. */
    showTextDocument: handleUnaryCall<ShowTextDocumentRequest, TextEditorInfo>;
    showOpenDialogue: handleUnaryCall<ShowOpenDialogueRequest, SelectedResources>;
    showMessage: handleUnaryCall<ShowMessageRequest, SelectedResponse>;
    showInputBox: handleUnaryCall<ShowInputBoxRequest, ShowInputBoxResponse>;
    showSaveDialog: handleUnaryCall<ShowSaveDialogRequest, ShowSaveDialogResponse>;
    openFile: handleUnaryCall<OpenFileRequest, OpenFileResponse>;
    getOpenTabs: handleUnaryCall<GetOpenTabsRequest, GetOpenTabsResponse>;
    getVisibleTabs: handleUnaryCall<GetVisibleTabsRequest, GetVisibleTabsResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
