import { ClineError } from "./ClineError";
export declare class ErrorService {
    private static serviceEnabled;
    private static serviceLevel;
    static initialize(): void;
    static toggleEnabled(state: boolean): void;
    static setLevel(level: "error" | "all"): void;
    static logException(error: Error | ClineError): void;
    static logMessage(message: string, level?: "error" | "warning" | "log" | "debug" | "info"): void;
    static isEnabled(): boolean;
    static toClineError(rawError: any, modelId?: string, providerId?: string): ClineError;
}
