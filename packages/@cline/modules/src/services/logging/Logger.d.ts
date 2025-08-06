/**
 * Simple logging utility for the extension's backend code.
 */
export declare class Logger {
    #private;
    static error(message: string, error?: Error): void;
    static warn(message: string): void;
    static log(message: string): void;
    static debug(message: string): void;
    static info(message: string): void;
    static trace(message: string): void;
}
