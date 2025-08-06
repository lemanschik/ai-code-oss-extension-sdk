import * as vscode from "vscode";
import type { EnvironmentVariableMutatorOptions, EnvironmentVariableMutator, EnvironmentVariableScope } from "vscode";
export declare class SecretStore implements vscode.SecretStorage {
    private data;
    private readonly _onDidChange;
    constructor(filepath: string);
    readonly onDidChange: vscode.Event<vscode.SecretStorageChangeEvent>;
    get(key: string): Thenable<string | undefined>;
    store(key: string, value: string): Thenable<void>;
    delete(key: string): Thenable<void>;
}
export declare class MementoStore implements vscode.Memento {
    private data;
    constructor(filepath: string);
    keys(): readonly string[];
    get<T>(key: string): T | undefined;
    update(key: string, value: any): Thenable<void>;
    setKeysForSync(_keys: readonly string[]): void;
}
export declare class EventEmitter<T> {
    private listeners;
    event: vscode.Event<T>;
    fire(data: T): void;
}
/** A simple key-value store for secrets backed by a JSON file. This is not secure, and it is not thread-safe. */
export declare class JsonKeyValueStore<T> {
    private data;
    private filePath;
    constructor(filePath: string);
    get(key: string): T | undefined;
    put(key: string, value: T): void;
    delete(key: string): void;
    keys(): Iterable<string> | ArrayLike<string>;
    private load;
    private save;
}
/** This is not used in cline, none of the methods are implemented. */
export declare class EnvironmentVariableCollection implements EnvironmentVariableCollection {
    persistent: boolean;
    description: string | undefined;
    replace(_variable: string, _value: string, _options?: EnvironmentVariableMutatorOptions): void;
    append(_variable: string, _value: string, _options?: EnvironmentVariableMutatorOptions): void;
    prepend(_variable: string, _value: string, _options?: EnvironmentVariableMutatorOptions): void;
    get(_variable: string): EnvironmentVariableMutator | undefined;
    forEach(_callback: (variable: string, mutator: EnvironmentVariableMutator, collection: EnvironmentVariableCollection) => any, _thisArg?: any): void;
    delete(_variable: string): void;
    clear(): void;
    [Symbol.iterator](): Iterator<[variable: string, mutator: EnvironmentVariableMutator], any, any>;
    getScoped(_scope: EnvironmentVariableScope): EnvironmentVariableCollection;
}
export declare function readJson(filePath: string): any;
