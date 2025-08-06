import { EventEmitter } from "events";
import * as vscode from "vscode";
export interface TerminalProcessEvents {
    line: [line: string];
    continue: [];
    completed: [];
    error: [error: Error];
    no_shell_integration: [];
}
export declare class TerminalProcess extends EventEmitter<TerminalProcessEvents> {
    waitForShellIntegration: boolean;
    private isListening;
    private buffer;
    private fullOutput;
    private lastRetrievedIndex;
    isHot: boolean;
    private hotTimer;
    private command;
    private gracePeriodTimer;
    private hasEmittedCompleted;
    private emitCurrentTerminalContents;
    run(terminal: vscode.Terminal, command: string): Promise<void>;
    private initializeForNewCommand;
    private runWithShellIntegration;
    private executeCommandWithShellIntegration;
    private initializeStreamState;
    private setupNoOutputTimeout;
    private processOutputStream;
    private processChunk;
    private cleanFirstChunk;
    private removeCommandEcho;
    private isCommandInterrupted;
    private handleInterruption;
    private updateHotState;
    private detectCompilationStatus;
    private handleChunkOutput;
    private cleanupAfterStream;
    private handleCommandCompletion;
    private analyzeCommandType;
    private runWithoutShellIntegration;
    private emitIfEol;
    private emitRemainingBufferIfListening;
    private startGracePeriod;
    continue(): void;
    getUnretrievedOutput(): string;
    removeLastLineArtifacts(output: string): string;
}
export type TerminalProcessResultPromise = TerminalProcess & Promise<void>;
export declare function mergePromise(process: TerminalProcess, promise: Promise<void>): TerminalProcessResultPromise;
