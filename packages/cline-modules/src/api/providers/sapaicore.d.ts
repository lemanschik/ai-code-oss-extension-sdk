import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { ModelInfo, SapAiCoreModelId } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface SapAiCoreHandlerOptions {
    sapAiCoreClientId?: string;
    sapAiCoreClientSecret?: string;
    sapAiCoreTokenUrl?: string;
    sapAiResourceGroup?: string;
    sapAiCoreBaseUrl?: string;
    apiModelId?: string;
}
export declare class SapAiCoreHandler implements ApiHandler {
    private options;
    private token?;
    private deployments?;
    constructor(options: SapAiCoreHandlerOptions);
    private authenticate;
    private getToken;
    private getAiCoreDeployments;
    private getDeploymentForModel;
    private hasDeploymentForModel;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    private streamCompletion;
    private streamCompletionSonnet37;
    private streamCompletionGPT;
    private streamCompletionGemini;
    createUserReadableRequest(userContent: Array<Anthropic.TextBlockParam | Anthropic.ImageBlockParam | Anthropic.ToolUseBlockParam | Anthropic.ToolResultBlockParam>): any;
    getModel(): {
        id: SapAiCoreModelId;
        info: ModelInfo;
    };
    private getValidImageFormat;
    private convertToGeminiFormat;
    private convertAnthropicMessageToGemini;
    private formatAnthropicMessages;
}
export {};
