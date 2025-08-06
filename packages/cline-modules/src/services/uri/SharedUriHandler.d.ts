import * as vscode from "vscode";
/**
 * Shared URI handler that processes both VSCode URI events and HTTP server callbacks
 */
export declare class SharedUriHandler {
    /**
     * Processes a URI and routes it to the appropriate handler
     * @param uri The URI to process (can be from VSCode or converted from HTTP)
     * @returns Promise<boolean> indicating success (true) or failure (false)
     */
    static handleUri(uri: vscode.Uri): Promise<boolean>;
    /**
     * Converts an HTTP URL to a vscode.Uri for unified processing
     * @param httpUrl The HTTP URL to convert
     * @returns vscode.Uri representation of the URL
     */
    static convertHttpUrlToUri(httpUrl: string): vscode.Uri;
}
