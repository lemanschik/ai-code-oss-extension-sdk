import { BinaryReader, BinaryWriter } from "../../../bufbuild/protobuf/wire";
import { type CallContext, type CallOptions } from "nice-grpc-common";
export interface GetWorkspacePathsRequest {
    /**
     * The unique ID for the workspace/project.
     * This is currently optional in vscode. It is required in other environments where cline is running at
     * the application level, and the user can open multiple projects.
     */
    id?: string | undefined;
}
export interface GetWorkspacePathsResponse {
    /** The unique ID for the workspace/project. */
    id?: string | undefined;
    paths: string[];
}
export interface SaveOpenDocumentIfDirtyRequest {
    filePath?: string | undefined;
}
export interface SaveOpenDocumentIfDirtyResponse {
    /** Returns true if the document was saved. */
    wasSaved?: boolean | undefined;
}
export declare const GetWorkspacePathsRequest: MessageFns<GetWorkspacePathsRequest>;
export declare const GetWorkspacePathsResponse: MessageFns<GetWorkspacePathsResponse>;
export declare const SaveOpenDocumentIfDirtyRequest: MessageFns<SaveOpenDocumentIfDirtyRequest>;
export declare const SaveOpenDocumentIfDirtyResponse: MessageFns<SaveOpenDocumentIfDirtyResponse>;
/** Provides methods for working with workspaces/projects. */
export type WorkspaceServiceDefinition = typeof WorkspaceServiceDefinition;
export declare const WorkspaceServiceDefinition: {
    readonly name: "WorkspaceService";
    readonly fullName: "host.WorkspaceService";
    readonly methods: {
        /** Returns a list of the top level directories of the workspace. */
        readonly getWorkspacePaths: {
            readonly name: "getWorkspacePaths";
            readonly requestType: MessageFns<GetWorkspacePathsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetWorkspacePathsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Saves an open document if it's open in the editor and has unsaved changes.
         * Returns true if the document was saved, returns false if the document was not found, or did not
         * need to be saved.
         */
        readonly saveOpenDocumentIfDirty: {
            readonly name: "saveOpenDocumentIfDirty";
            readonly requestType: MessageFns<SaveOpenDocumentIfDirtyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SaveOpenDocumentIfDirtyResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface WorkspaceServiceImplementation<CallContextExt = {}> {
    /** Returns a list of the top level directories of the workspace. */
    getWorkspacePaths(request: GetWorkspacePathsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetWorkspacePathsResponse>>;
    /**
     * Saves an open document if it's open in the editor and has unsaved changes.
     * Returns true if the document was saved, returns false if the document was not found, or did not
     * need to be saved.
     */
    saveOpenDocumentIfDirty(request: SaveOpenDocumentIfDirtyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SaveOpenDocumentIfDirtyResponse>>;
}
export interface WorkspaceServiceClient<CallOptionsExt = {}> {
    /** Returns a list of the top level directories of the workspace. */
    getWorkspacePaths(request: DeepPartial<GetWorkspacePathsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetWorkspacePathsResponse>;
    /**
     * Saves an open document if it's open in the editor and has unsaved changes.
     * Returns true if the document was saved, returns false if the document was not found, or did not
     * need to be saved.
     */
    saveOpenDocumentIfDirty(request: DeepPartial<SaveOpenDocumentIfDirtyRequest>, options?: CallOptions & CallOptionsExt): Promise<SaveOpenDocumentIfDirtyResponse>;
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
