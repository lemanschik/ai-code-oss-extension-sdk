import { StreamingCallbacks } from "../../../host-provider-types";
export type ProtoService = {
    name: string;
    fullName: string;
    methods: {
        [key: string]: {
            name: string;
            requestType: any;
            responseType: any;
            requestStream: boolean;
            responseStream: boolean;
            options: any;
        };
    };
};
export type GrpcClientType<T extends ProtoService> = {
    [K in keyof T["methods"]]: T["methods"][K]["responseStream"] extends true ? (request: InstanceType<T["methods"][K]["requestType"]>, options: StreamingCallbacks<InstanceType<T["methods"][K]["responseType"]>>) => () => void : (request: InstanceType<T["methods"][K]["requestType"]>) => Promise<InstanceType<T["methods"][K]["responseType"]>>;
};
export declare function createGrpcClient<T extends ProtoService>(service: T): GrpcClientType<T>;
