import { BinaryReader, BinaryWriter } from "../../../bufbuild/protobuf/wire";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Metadata } from "../cline/common";
export interface OpenDiffRequest {
    metadata?: Metadata | undefined;
    /** The absolute path of the document being edited. */
    path?: string | undefined;
    /** The new content for the file. */
    content?: string | undefined;
}
export interface OpenDiffResponse {
    /** A unique identifier for the diff view that was opened. */
    diffId?: string | undefined;
}
export interface GetDocumentTextRequest {
    metadata?: Metadata | undefined;
    diffId?: string | undefined;
}
export interface GetDocumentTextResponse {
    content?: string | undefined;
}
export interface ReplaceTextRequest {
    metadata?: Metadata | undefined;
    diffId?: string | undefined;
    content?: string | undefined;
    startLine?: number | undefined;
    endLine?: number | undefined;
}
export interface ReplaceTextResponse {
}
export interface ScrollDiffRequest {
    diffId?: string | undefined;
    line?: number | undefined;
}
export interface ScrollDiffResponse {
}
export interface TruncateDocumentRequest {
    metadata?: Metadata | undefined;
    diffId?: string | undefined;
    endLine?: number | undefined;
}
export interface TruncateDocumentResponse {
}
export interface CloseDiffRequest {
    metadata?: Metadata | undefined;
    diffId?: string | undefined;
}
export interface CloseDiffResponse {
}
export interface SaveDocumentRequest {
    metadata?: Metadata | undefined;
    diffId?: string | undefined;
}
export interface SaveDocumentResponse {
}
export declare const OpenDiffRequest: MessageFns<OpenDiffRequest>;
export declare const OpenDiffResponse: MessageFns<OpenDiffResponse>;
export declare const GetDocumentTextRequest: MessageFns<GetDocumentTextRequest>;
export declare const GetDocumentTextResponse: MessageFns<GetDocumentTextResponse>;
export declare const ReplaceTextRequest: MessageFns<ReplaceTextRequest>;
export declare const ReplaceTextResponse: MessageFns<ReplaceTextResponse>;
export declare const ScrollDiffRequest: MessageFns<ScrollDiffRequest>;
export declare const ScrollDiffResponse: MessageFns<ScrollDiffResponse>;
export declare const TruncateDocumentRequest: MessageFns<TruncateDocumentRequest>;
export declare const TruncateDocumentResponse: MessageFns<TruncateDocumentResponse>;
export declare const CloseDiffRequest: MessageFns<CloseDiffRequest>;
export declare const CloseDiffResponse: MessageFns<CloseDiffResponse>;
export declare const SaveDocumentRequest: MessageFns<SaveDocumentRequest>;
export declare const SaveDocumentResponse: MessageFns<SaveDocumentResponse>;
/** Provides methods for diff views. */
export type DiffServiceDefinition = typeof DiffServiceDefinition;
export declare const DiffServiceDefinition: {
    readonly name: "DiffService";
    readonly fullName: "host.DiffService";
    readonly methods: {
        /** Open the diff view/editor. */
        readonly openDiff: {
            readonly name: "openDiff";
            readonly requestType: MessageFns<OpenDiffRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<OpenDiffResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Get the contents of the diff view. */
        readonly getDocumentText: {
            readonly name: "getDocumentText";
            readonly requestType: MessageFns<GetDocumentTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDocumentTextResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Replace a text selection in the diff. */
        readonly replaceText: {
            readonly name: "replaceText";
            readonly requestType: MessageFns<ReplaceTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReplaceTextResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly scrollDiff: {
            readonly name: "scrollDiff";
            readonly requestType: MessageFns<ScrollDiffRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ScrollDiffResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Truncate the diff document. */
        readonly truncateDocument: {
            readonly name: "truncateDocument";
            readonly requestType: MessageFns<TruncateDocumentRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TruncateDocumentResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Save the diff document. */
        readonly saveDocument: {
            readonly name: "saveDocument";
            readonly requestType: MessageFns<SaveDocumentRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SaveDocumentResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Close the diff editor UI. */
        readonly closeDiff: {
            readonly name: "closeDiff";
            readonly requestType: MessageFns<CloseDiffRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CloseDiffResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface DiffServiceImplementation<CallContextExt = {}> {
    /** Open the diff view/editor. */
    openDiff(request: OpenDiffRequest, context: CallContext & CallContextExt): Promise<DeepPartial<OpenDiffResponse>>;
    /** Get the contents of the diff view. */
    getDocumentText(request: GetDocumentTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDocumentTextResponse>>;
    /** Replace a text selection in the diff. */
    replaceText(request: ReplaceTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReplaceTextResponse>>;
    scrollDiff(request: ScrollDiffRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ScrollDiffResponse>>;
    /** Truncate the diff document. */
    truncateDocument(request: TruncateDocumentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TruncateDocumentResponse>>;
    /** Save the diff document. */
    saveDocument(request: SaveDocumentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SaveDocumentResponse>>;
    /** Close the diff editor UI. */
    closeDiff(request: CloseDiffRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CloseDiffResponse>>;
}
export interface DiffServiceClient<CallOptionsExt = {}> {
    /** Open the diff view/editor. */
    openDiff(request: DeepPartial<OpenDiffRequest>, options?: CallOptions & CallOptionsExt): Promise<OpenDiffResponse>;
    /** Get the contents of the diff view. */
    getDocumentText(request: DeepPartial<GetDocumentTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDocumentTextResponse>;
    /** Replace a text selection in the diff. */
    replaceText(request: DeepPartial<ReplaceTextRequest>, options?: CallOptions & CallOptionsExt): Promise<ReplaceTextResponse>;
    scrollDiff(request: DeepPartial<ScrollDiffRequest>, options?: CallOptions & CallOptionsExt): Promise<ScrollDiffResponse>;
    /** Truncate the diff document. */
    truncateDocument(request: DeepPartial<TruncateDocumentRequest>, options?: CallOptions & CallOptionsExt): Promise<TruncateDocumentResponse>;
    /** Save the diff document. */
    saveDocument(request: DeepPartial<SaveDocumentRequest>, options?: CallOptions & CallOptionsExt): Promise<SaveDocumentResponse>;
    /** Close the diff editor UI. */
    closeDiff(request: DeepPartial<CloseDiffRequest>, options?: CallOptions & CallOptionsExt): Promise<CloseDiffResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
