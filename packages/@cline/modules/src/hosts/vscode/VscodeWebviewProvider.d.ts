import { WebviewProvider } from "../../core/webview";
import type { Uri } from "vscode";
import * as vscode from "vscode";
import type { ExtensionMessage } from "../../shared/ExtensionMessage";
import type { WebviewProviderType } from "../../shared/webview/types";
export declare class VscodeWebviewProvider extends WebviewProvider implements vscode.WebviewViewProvider {
    private webview?;
    private disposables;
    constructor(context: vscode.ExtensionContext, providerType: WebviewProviderType);
    getWebviewUri(uri: Uri): Uri;
    getCspSource(): string;
    postMessageToWebview(message: ExtensionMessage): Thenable<boolean> | undefined;
    isVisible(): boolean;
    getWebview(): vscode.WebviewView | vscode.WebviewPanel | undefined;
    resolveWebviewView(webviewView: vscode.WebviewView | vscode.WebviewPanel): Promise<void>;
    /**
     * Sets up an event listener to listen for messages passed from the webview context and
     * executes code based on the message that is received.
     *
     * IMPORTANT: When passing methods as callbacks in JavaScript/TypeScript, the method's
     * 'this' context can be lost. This happens because the method is passed as a
     * standalone function reference, detached from its original object.
     *
     * The Problem:
     * Doing: webview.onDidReceiveMessage(this.controller.handleWebviewMessage)
     * Would cause 'this' inside handleWebviewMessage to be undefined or wrong,
     * leading to "TypeError: this.setUserInfo is not a function"
     *
     * The Solution:
     * We wrap the method call in an arrow function, which:
     * 1. Preserves the lexical scope's 'this' binding
     * 2. Ensures handleWebviewMessage is called as a method on the controller instance
     * 3. Maintains access to all controller methods and properties
     *
     * Alternative solutions could use .bind() or making handleWebviewMessage an arrow
     * function property, but this approach is clean and explicit.
     *
     * @param webview The webview instance to attach the message listener to
     */
    private setWebviewMessageListener;
    dispose(): Promise<void>;
}
