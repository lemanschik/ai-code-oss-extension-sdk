import type { ExtensionContext } from "vscode";
import { postMessage } from "./vscode-context-stubs";
declare const extensionContext: ExtensionContext;
export { extensionContext, postMessage };
