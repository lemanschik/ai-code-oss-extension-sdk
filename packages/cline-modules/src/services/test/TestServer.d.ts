import * as http from "http";
import * as vscode from "vscode";
import { WebviewProvider } from "../../core/webview";
/**
 * Creates and starts an HTTP server for test automation
 * @param webviewProvider The webview provider instance to use for message catching
 * @returns The created HTTP server instance
 */
export declare function createTestServer(webviewProvider?: WebviewProvider): http.Server;
/**
 * Creates a message catcher that logs all messages sent to the webview
 * and automatically responds to messages that require user intervention
 * @param webviewProvider The webview provider instance
 * @returns A disposable that can be used to clean up the message catcher
 */
export declare function createMessageCatcher(webviewProvider: WebviewProvider): vscode.Disposable;
/**
 * Shuts down the test server if it exists
 */
export declare function shutdownTestServer(): void;
