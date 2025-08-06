import { ExtensionMessage } from "../../shared/ExtensionMessage";
import { WebviewProviderType } from "../../shared/webview/types";
import * as vscode from "vscode";
import { URI } from "vscode-uri";
import { WebviewProvider } from "../../core/webview";
export declare class ExternalWebviewProvider extends WebviewProvider {
    private RESOURCE_HOSTNAME;
    constructor(context: vscode.ExtensionContext, providerType: WebviewProviderType);
    getWebviewUri(uri: URI): URI;
    getCspSource(): string;
    postMessageToWebview(message: ExtensionMessage): undefined;
    isVisible(): boolean;
    getWebview(): {};
    resolveWebviewView(_: any): Promise<void>;
}
