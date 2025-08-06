export declare const subscribeToAuthStatusUpdate: (controller: import("..").Controller, _request: import("../../../shared/proto/index.cline").EmptyRequest, responseStream: import("../grpc-handler").StreamingResponseHandler<import("../../../shared/proto/index.cline").AuthState>, requestId?: string) => Promise<void>;
export declare const sendAuthStatusUpdateEvent: () => Promise<void>;
