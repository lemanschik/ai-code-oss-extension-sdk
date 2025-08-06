import { StreamingCallbacks } from "../hosts/host-provider-types";
declare const log: (...args: unknown[]) => void;
declare function getPackageDefinition(): any;
/**
 * Converts an AsyncIterable to a callback-based API
 * @param stream The AsyncIterable stream to process
 * @param callbacks The callbacks to invoke for stream events
 */
declare function asyncIteratorToCallbacks<T>(stream: AsyncIterable<T>, callbacks: StreamingCallbacks<T>): Promise<void>;
export { getPackageDefinition, log, asyncIteratorToCallbacks };
