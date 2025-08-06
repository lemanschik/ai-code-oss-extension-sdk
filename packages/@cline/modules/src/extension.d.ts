import * as vscode from "vscode";
import "./utils/path";
export declare function activate(context: vscode.ExtensionContext): Promise<import("./exports/cline").ClineAPI>;
export declare function deactivate(): Promise<void>;
