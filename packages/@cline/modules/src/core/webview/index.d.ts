import * as vscode from "vscode";
import { WebviewProviderType } from "../../shared/webview/types";
import { Controller } from "../controller/index";
import { Uri } from "vscode";
import { ExtensionMessage } from "../../shared/ExtensionMessage";
export declare abstract class WebviewProvider {
    readonly context: vscode.ExtensionContext;
    private readonly providerType;
    static readonly sideBarId = "claude-dev.SidebarProvider";
    static readonly tabPanelId = "claude-dev.TabPanelProvider";
    private static activeInstances;
    private static clientIdMap;
    controller: Controller;
    private clientId;
    constructor(context: vscode.ExtensionContext, providerType: WebviewProviderType);
    getClientId(): string;
    static getClientIdForInstance(instance: WebviewProvider): string | undefined;
    dispose(): Promise<void>;
    static getVisibleInstance(): WebviewProvider | undefined;
    static getActiveInstance(): WebviewProvider | undefined;
    static getAllInstances(): WebviewProvider[];
    static getSidebarInstance(): WebviewProvider | undefined;
    static getTabInstances(): WebviewProvider[];
    static disposeAllInstances(): Promise<void>;
    /**
     * Initializes and sets up the webview when it's first created.
     *
     * @param webviewView - The webview view or panel instance to be resolved
     * @returns A promise that resolves when the webview has been fully initialized
     */
    abstract resolveWebviewView(webviewView: vscode.WebviewView | vscode.WebviewPanel): Promise<void>;
    /**
     * Sends a message from the extension to the webview.
     *
     * @param message - The message to send to the webview
     * @returns A thenable that resolves to a boolean indicating success, or undefined if the webview is not available
     */
    abstract postMessageToWebview(message: ExtensionMessage): Thenable<boolean> | undefined;
    /**
     * Gets the current webview instance.
     *
     * @returns The webview instance (WebviewView, WebviewPanel, or similar)
     */
    abstract getWebview(): any;
    /**
     * Converts a local URI to a webview URI that can be used within the webview.
     *
     * @param uri - The local URI to convert
     * @returns A URI that can be used within the webview
     */
    abstract getWebviewUri(uri: Uri): Uri;
    /**
     * Gets the Content Security Policy source for the webview.
     *
     * @returns The CSP source string to be used in the webview's Content-Security-Policy
     */
    abstract getCspSource(): string;
    /**
     * Checks if the webview is currently visible to the user.
     *
     * @returns True if the webview is visible, false otherwise
     */
    abstract isVisible(): boolean;
    /**
     * Defines and returns the HTML that should be rendered within the webview panel.
     *
     * @remarks This is also the place where references to the React webview build files
     * are created and inserted into the webview HTML.
     *
     * @param webview A reference to the extension webview
     * @param extensionUri The URI of the directory containing the extension
     * @returns A template string literal containing the HTML that should be
     * rendered within the webview panel
     */
    getHtmlContent(): string;
    /**
     * Reads the Vite dev server port from the generated port file to avoid conflicts
     * Returns a Promise that resolves to the port number
     * If the file doesn't exist or can't be read, it resolves to the default port
     */
    private getDevServerPort;
    /**
     * Connects to the local Vite dev server to allow HMR, with fallback to the bundled assets
     *
     * @param webview A reference to the extension webview
     * @returns A template string literal containing the HTML that should be
     * rendered within the webview panel
     */
    protected getHMRHtmlContent(): Promise<string>;
    /**
     * A helper function which will get the webview URI of a given file or resource in the extension directory.
     *
     * @remarks This URI can be used within a webview's HTML as a link to the
     * given file/resource.
     *
     * @param pathList An array of strings representing the path to a file/resource in the extension directory.
     * @returns A URI pointing to the file/resource
     */
    private getExtensionUri;
}
