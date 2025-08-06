import "should";
import * as vscode from "vscode";
declare module "vscode" {
    interface Terminal {
        shellIntegration?: {
            cwd?: vscode.Uri;
            executeCommand?: (command: string) => {
                read: () => AsyncIterable<string>;
            };
        };
    }
}
