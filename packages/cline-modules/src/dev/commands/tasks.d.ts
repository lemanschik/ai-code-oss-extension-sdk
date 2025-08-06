import * as vscode from "vscode";
import { Controller } from "../../core/controller";
/**
 * Registers development-only commands for task manipulation.
 * These are only activated in development mode.
 */
export declare function registerTaskCommands(context: vscode.ExtensionContext, controller: Controller): vscode.Disposable[];
