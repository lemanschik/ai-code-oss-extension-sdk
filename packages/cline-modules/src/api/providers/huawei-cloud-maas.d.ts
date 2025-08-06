import { ApiHandler } from "..";
import { HuaweiCloudMaasModelId, ModelInfo } from "../../shared/api";
import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiStream } from "../transform/stream";
interface HuaweiCloudMaaSHandlerOptions {
    huaweiCloudMaasApiKey?: string;
    huaweiCloudMaasModelId?: string;
    huaweiCloudMaasModelInfo?: ModelInfo;
}
export declare class HuaweiCloudMaaSHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: HuaweiCloudMaaSHandlerOptions);
    private ensureClient;
    getModel(): {
        id: HuaweiCloudMaasModelId;
        info: ModelInfo;
    };
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
}
export {};
