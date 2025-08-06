import * as vscode from "vscode";
import { TerminalProcessResultPromise } from "./TerminalProcess";
import { TerminalInfo } from "./TerminalRegistry";
declare module "vscode" {
    interface Terminal {
        shellIntegration?: {
            cwd?: vscode.Uri;
            executeCommand?: (command: string) => {
                read: () => AsyncIterable<string>;
            };
        };
    }
    interface Window {
        onDidStartTerminalShellExecution?: (listener: (e: any) => any, thisArgs?: any, disposables?: vscode.Disposable[]) => vscode.Disposable;
    }
}
export declare class TerminalManager {
    private terminalIds;
    private processes;
    private disposables;
    private shellIntegrationTimeout;
    private terminalReuseEnabled;
    private terminalOutputLineLimit;
    private defaultTerminalProfile;
    constructor();
    private findTerminalInfoByTerminal;
    private isCwdMatchingExpected;
    runCommand(terminalInfo: TerminalInfo, command: string): TerminalProcessResultPromise;
    getOrCreateTerminal(cwd: string): Promise<TerminalInfo>;
    getTerminals(busy: boolean): {
        id: number;
        lastCommand: string;
    }[];
    getUnretrievedOutput(terminalId: number): string;
    isProcessHot(terminalId: number): boolean;
    disposeAll(): void;
    setShellIntegrationTimeout(timeout: number): void;
    setTerminalReuseEnabled(enabled: boolean): void;
    setTerminalOutputLineLimit(limit: number): void;
    processOutput(outputLines: string[]): string;
    setDefaultTerminalProfile(profileId: string): {
        closedCount: number;
        busyTerminals: TerminalInfo[];
    };
    /**
     * Filters terminals based on a provided criteria function
     * @param filterFn Function that accepts TerminalInfo and returns boolean
     * @returns Array of terminals that match the criteria
     */
    filterTerminals(filterFn: (terminal: TerminalInfo) => boolean): TerminalInfo[];
    /**
     * Closes terminals that match the provided criteria
     * @param filterFn Function that accepts TerminalInfo and returns boolean for terminals to close
     * @param force If true, closes even busy terminals (with warning)
     * @returns Number of terminals closed
     */
    closeTerminals(filterFn: (terminal: TerminalInfo) => boolean, force?: boolean): number;
    /**
     * Handles terminal management when the terminal profile changes
     * @param newShellPath New shell path to use
     * @returns Object with information about closed terminals and remaining busy terminals
     */
    handleTerminalProfileChange(newShellPath: string | undefined): {
        closedCount: number;
        busyTerminals: TerminalInfo[];
    };
    /**
     * Forces closure of all terminals (including busy ones)
     * @returns Number of terminals closed
     */
    closeAllTerminals(): number;
}
