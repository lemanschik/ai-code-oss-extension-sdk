import { BinaryReader, BinaryWriter } from "../../../bufbuild/protobuf/wire";
export interface Metadata {
}
export interface EmptyRequest {
    metadata?: Metadata | undefined;
}
export interface Empty {
}
export interface StringRequest {
    metadata?: Metadata | undefined;
    value: string;
}
export interface StringArrayRequest {
    metadata?: Metadata | undefined;
    value: string[];
}
export interface String {
    value: string;
}
export interface Int64Request {
    metadata?: Metadata | undefined;
    value: number;
}
export interface Int64 {
    value: number;
}
export interface BytesRequest {
    metadata?: Metadata | undefined;
    value: Buffer;
}
export interface Bytes {
    value: Buffer;
}
export interface BooleanRequest {
    metadata?: Metadata | undefined;
    value: boolean;
}
export interface Boolean {
    value: boolean;
}
export interface StringArray {
    values: string[];
}
export interface StringArrays {
    values1: string[];
    values2: string[];
}
export interface KeyValuePair {
    key: string;
    value: string;
}
export declare const Metadata: MessageFns<Metadata>;
export declare const EmptyRequest: MessageFns<EmptyRequest>;
export declare const Empty: MessageFns<Empty>;
export declare const StringRequest: MessageFns<StringRequest>;
export declare const StringArrayRequest: MessageFns<StringArrayRequest>;
export declare const String: MessageFns<String>;
export declare const Int64Request: MessageFns<Int64Request>;
export declare const Int64: MessageFns<Int64>;
export declare const BytesRequest: MessageFns<BytesRequest>;
export declare const Bytes: MessageFns<Bytes>;
export declare const BooleanRequest: MessageFns<BooleanRequest>;
export declare const Boolean: MessageFns<Boolean>;
export declare const StringArray: MessageFns<StringArray>;
export declare const StringArrays: MessageFns<StringArrays>;
export declare const KeyValuePair: MessageFns<KeyValuePair>;
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
