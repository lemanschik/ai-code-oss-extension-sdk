import * as vscode from "vscode";
export interface TerminalInfo {
    terminal: vscode.Terminal;
    busy: boolean;
    lastCommand: string;
    id: number;
    shellPath?: string;
    lastActive: number;
    pendingCwdChange?: string;
    cwdResolved?: {
        resolve: () => void;
        reject: (error: Error) => void;
    };
}
export declare class TerminalRegistry {
    private static terminals;
    private static nextTerminalId;
    static createTerminal(cwd?: string | vscode.Uri | undefined, shellPath?: string): TerminalInfo;
    static getTerminal(id: number): TerminalInfo | undefined;
    static updateTerminal(id: number, updates: Partial<TerminalInfo>): void;
    static removeTerminal(id: number): void;
    static getAllTerminals(): TerminalInfo[];
    private static isTerminalClosed;
}
