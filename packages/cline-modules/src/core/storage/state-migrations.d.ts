import * as vscode from "vscode";
export declare function migrateWorkspaceToGlobalStorage(context: vscode.ExtensionContext): Promise<void>;
export declare function migrateMcpMarketplaceEnableSetting(mcpMarketplaceEnabledRaw: boolean | undefined): Promise<boolean>;
export declare function migrateEnableCheckpointsSetting(enableCheckpointsSettingRaw: boolean | undefined): Promise<boolean>;
export declare function migrateCustomInstructionsToGlobalRules(context: vscode.ExtensionContext): Promise<void>;
export declare function migrateLegacyApiConfigurationToModeSpecific(context: vscode.ExtensionContext): Promise<void>;
export declare function migrateWelcomeViewCompleted(context: vscode.ExtensionContext): Promise<void>;
