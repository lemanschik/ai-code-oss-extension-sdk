import { ClineApiReqCancelReason } from "../../shared/ExtensionMessage";
import { MessageStateHandler } from "./message-state";
import { ApiHandler } from "../../api";
export declare const showNotificationForApprovalIfAutoApprovalEnabled: (message: string, autoApprovalSettingsEnabled: boolean, notificationsEnabled: boolean) => void;
type UpdateApiReqMsgParams = {
    messageStateHandler: MessageStateHandler;
    lastApiReqIndex: number;
    inputTokens: number;
    outputTokens: number;
    cacheWriteTokens: number;
    cacheReadTokens: number;
    totalCost?: number;
    api: ApiHandler;
    cancelReason?: ClineApiReqCancelReason;
    streamingFailedMessage?: string;
};
export declare const updateApiReqMsg: (params: UpdateApiReqMsgParams) => Promise<void>;
export {};
