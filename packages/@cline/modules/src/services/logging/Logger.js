import { HostProvider } from "../../hosts/host-provider";
import { ErrorService } from "../error/ErrorService";
/**
 * Simple logging utility for the extension's backend code.
 */
export class Logger {
    static error(message, error) {
        Logger.#output("ERROR", message, error);
        ErrorService.logMessage(message, "error");
        error && ErrorService.logException(error);
    }
    static warn(message) {
        Logger.#output("WARN", message);
        ErrorService.logMessage(message, "warning");
    }
    static log(message) {
        Logger.#output("LOG", message);
    }
    static debug(message) {
        Logger.#output("DEBUG", message);
    }
    static info(message) {
        Logger.#output("INFO", message);
    }
    static trace(message) {
        Logger.#output("TRACE", message);
    }
    static #output(level, message, error) {
        let fullMessage = message;
        if (error?.message) {
            fullMessage += ` ${error.message}`;
        }
        HostProvider.get().logToChannel(`${level} ${fullMessage}`);
        if (error?.stack) {
            console.log(`Stack trace:\n${error.stack}`);
        }
    }
}
