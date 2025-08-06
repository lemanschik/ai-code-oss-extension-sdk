import { WebviewProvider } from "../core/webview";
import { HostBridgeClientProvider } from "./host-provider-types";
import { WebviewProviderType } from "../shared/webview/types";
import { DiffViewProvider } from "../integrations/editor/DiffViewProvider";
/**
 * Singleton class that manages host-specific providers for dependency injection.
 *
 * This system runs on two different platforms (VSCode extension and cline-core),
 * so all the host-specific classes and properties are contained in here. The
 * rest of the codebase can use the host provider interface to access platform-specific
 * implementations in a platform-agnostic way.
 *
 * Usage:
 * - Initialize once: HostProvider.initialize(webviewCreator, diffCreator, hostBridge)
 * - Access HostBridge services: HostProvider.window.showMessage()
 * - Access Host Provider factories: HostProvider.get().createDiffViewProvider()
 */
export declare class HostProvider {
    private static instance;
    createWebviewProvider: WebviewProviderCreator;
    createDiffViewProvider: DiffViewProviderCreator;
    hostBridge: HostBridgeClientProvider;
    logToChannel: LogToChannel;
    private constructor();
    static initialize(webviewProviderCreator: WebviewProviderCreator, diffViewProviderCreator: DiffViewProviderCreator, hostBridgeProvider: HostBridgeClientProvider, logToChannel: LogToChannel): HostProvider;
    /**
     * Gets the singleton instance
     */
    static get(): HostProvider;
    static isInitialized(): boolean;
    /**
     * Resets the HostProvider instance (primarily for testing)
     * This allows tests to reinitialize the HostProvider with different configurations
     */
    static reset(): void;
    static get watch(): import("../generated/hosts/host-bridge-client-types").WatchServiceClientInterface;
    static get workspace(): import("../generated/hosts/host-bridge-client-types").WorkspaceServiceClientInterface;
    static get env(): import("../generated/hosts/host-bridge-client-types").EnvServiceClientInterface;
    static get window(): import("../generated/hosts/host-bridge-client-types").WindowServiceClientInterface;
    static get diff(): import("../generated/hosts/host-bridge-client-types").DiffServiceClientInterface;
}
/**
 * A function that creates WebviewProvider instances
 */
export type WebviewProviderCreator = (providerType: WebviewProviderType) => WebviewProvider;
/**
 * A function that creates DiffViewProvider instances
 */
export type DiffViewProviderCreator = () => DiffViewProvider;
export type LogToChannel = (message: string) => void;
