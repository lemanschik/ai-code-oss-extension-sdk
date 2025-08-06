import { BinaryReader, BinaryWriter } from "../../../bufbuild/protobuf/wire";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Metadata } from "../cline/common";
/** Request to subscribe to file changes */
export interface SubscribeToFileRequest {
    metadata?: Metadata | undefined;
    path: string;
}
/** Event representing a file change */
export interface FileChangeEvent {
    path: string;
    type: FileChangeEvent_ChangeType;
    /** Optional content of the file after change */
    content: string;
}
export declare enum FileChangeEvent_ChangeType {
    CREATED = 0,
    CHANGED = 1,
    DELETED = 2,
    UNRECOGNIZED = -1
}
export declare function fileChangeEvent_ChangeTypeFromJSON(object: any): FileChangeEvent_ChangeType;
export declare function fileChangeEvent_ChangeTypeToJSON(object: FileChangeEvent_ChangeType): string;
export declare const SubscribeToFileRequest: MessageFns<SubscribeToFileRequest>;
export declare const FileChangeEvent: MessageFns<FileChangeEvent>;
/** WatchService provides methods for watching files in the IDE */
export type WatchServiceDefinition = typeof WatchServiceDefinition;
export declare const WatchServiceDefinition: {
    readonly name: "WatchService";
    readonly fullName: "host.WatchService";
    readonly methods: {
        /** Subscribe to file changes */
        readonly subscribeToFile: {
            readonly name: "subscribeToFile";
            readonly requestType: MessageFns<SubscribeToFileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FileChangeEvent>;
            readonly responseStream: true;
            readonly options: {};
        };
    };
};
export interface WatchServiceImplementation<CallContextExt = {}> {
    /** Subscribe to file changes */
    subscribeToFile(request: SubscribeToFileRequest, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<FileChangeEvent>>;
}
export interface WatchServiceClient<CallOptionsExt = {}> {
    /** Subscribe to file changes */
    subscribeToFile(request: DeepPartial<SubscribeToFileRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<FileChangeEvent>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type ServerStreamingMethodResult<Response> = {
    [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
