import { ApiConfiguration } from "../../shared/api";
import { SecretKey, GlobalStateKey, LocalStateKey } from "./state-keys";
import type { ExtensionContext } from "vscode";
/**
 * Interface for persistence error event data
 */
export interface PersistenceErrorEvent {
    error: Error;
}
/**
 * In-memory cache service for fast state access
 * Provides immediate reads/writes with async disk persistence
 */
export declare class CacheService {
    private globalStateCache;
    private secretsCache;
    private workspaceStateCache;
    private context;
    private isInitialized;
    private pendingGlobalState;
    private pendingSecrets;
    private pendingWorkspaceState;
    private persistenceTimeout;
    private readonly PERSISTENCE_DELAY_MS;
    onPersistenceError?: (event: PersistenceErrorEvent) => void;
    constructor(context: ExtensionContext);
    /**
     * Initialize the cache by loading data from disk
     */
    initialize(): Promise<void>;
    /**
     * Set method for global state keys - updates cache immediately and schedules debounced persistence
     */
    setGlobalState<T>(key: GlobalStateKey, value: T): void;
    /**
     * Batch set method for global state keys - updates cache immediately and schedules debounced persistence
     */
    setGlobalStateBatch(updates: Partial<Record<GlobalStateKey, any>>): void;
    /**
     * Set method for secret keys - updates cache immediately and schedules debounced persistence
     */
    setSecret(key: SecretKey, value: string | undefined): void;
    /**
     * Batch set method for secret keys - updates cache immediately and schedules debounced persistence
     */
    setSecretsBatch(updates: Partial<Record<SecretKey, string | undefined>>): void;
    /**
     * Set method for workspace state keys - updates cache immediately and schedules debounced persistence
     */
    setWorkspaceState<T>(key: LocalStateKey, value: T): void;
    /**
     * Batch set method for workspace state keys - updates cache immediately and schedules debounced persistence
     */
    setWorkspaceStateBatch(updates: Partial<Record<LocalStateKey, any>>): void;
    /**
     * Convenience method for getting API configuration
     * Ensures cache is initialized if not already done
     */
    getApiConfiguration(): ApiConfiguration;
    /**
     * Convenience method for setting API configuration
     */
    setApiConfiguration(apiConfiguration: ApiConfiguration): void;
    /**
     * Get method for global state keys - reads from in-memory cache
     */
    getGlobalStateKey<T>(key: GlobalStateKey): T | undefined;
    /**
     * Get method for secret keys - reads from in-memory cache
     */
    getSecretKey(key: SecretKey): string | undefined;
    /**
     * Get method for workspace state keys - reads from in-memory cache
     */
    getWorkspaceStateKey<T>(key: LocalStateKey): T | undefined;
    /**
     * Reinitialize the cache service by clearing all state and reloading from disk
     * Used for error recovery when write operations fail
     */
    reInitialize(): Promise<void>;
    /**
     * Dispose of the cache service
     */
    private dispose;
    /**
     * Schedule debounced persistence - simple timeout-based persistence
     */
    private scheduleDebouncedPersistence;
    /**
     * Private method to batch persist global state keys with Promise.all
     */
    private persistGlobalStateBatch;
    /**
     * Private method to batch persist secrets with Promise.all
     */
    private persistSecretsBatch;
    /**
     * Private method to batch persist workspace state keys with Promise.all
     */
    private persistWorkspaceStateBatch;
    /**
     * Private method to populate API configuration cache without triggering persistence
     * Used during initialization
     */
    private populateApiConfigurationCache;
    /**
     * Construct API configuration from cached component keys
     */
    private constructApiConfigurationFromCache;
}
