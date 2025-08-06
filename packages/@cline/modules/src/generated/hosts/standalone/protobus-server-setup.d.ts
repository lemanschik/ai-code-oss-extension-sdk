import * as grpc from "../../../grpc/grpc-js";
import { Controller } from "../../../core/controller";
import { GrpcHandlerWrapper, GrpcStreamingResponseHandlerWrapper } from "../../../hosts/external/grpc-types";
export declare function addProtobusServices(server: grpc.Server, controller: Controller, wrapper: GrpcHandlerWrapper, wrapStreamingResponse: GrpcStreamingResponseHandlerWrapper): void;
