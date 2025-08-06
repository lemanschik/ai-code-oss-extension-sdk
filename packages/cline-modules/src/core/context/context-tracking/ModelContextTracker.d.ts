import * as vscode from "vscode";
export declare class ModelContextTracker {
    readonly taskId: string;
    private context;
    constructor(context: vscode.ExtensionContext, taskId: string);
    recordModelUsage(apiProviderId: string, modelId: string, mode: string): Promise<void>;
}
