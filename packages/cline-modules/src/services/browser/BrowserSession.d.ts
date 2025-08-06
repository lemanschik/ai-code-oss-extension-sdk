import * as vscode from "vscode";
import { Page, launch } from "puppeteer-core";
import { BrowserActionResult } from "../../shared/ExtensionMessage";
import { BrowserSettings } from "../../shared/BrowserSettings";
import { Controller } from "../../core/controller";
interface PCRStats {
    puppeteer: {
        launch: typeof launch;
    };
    executablePath: string;
}
export interface BrowserConnectionInfo {
    isConnected: boolean;
    isRemote: boolean;
    host?: string;
}
export declare class BrowserSession {
    private context;
    private browser?;
    private page?;
    private currentMousePosition?;
    private cachedWebSocketEndpoint?;
    private lastConnectionAttempt;
    browserSettings: BrowserSettings;
    private isConnectedToRemote;
    private useWebp;
    private sessionStartTime;
    private browserActions;
    private taskId?;
    constructor(context: vscode.ExtensionContext, browserSettings: BrowserSettings, useWebp?: boolean);
    testConnection(host: string): Promise<{
        success: boolean;
        message: string;
        endpoint?: string;
    }>;
    /**
     * Get current browser connection information
     */
    getConnectionInfo(): BrowserConnectionInfo;
    /**
     * Migrates the chromeExecutablePath setting from VSCode configuration to browserSettings
     */
    private migrateChromeExecutablePathSetting;
    getDetectedChromePath(): Promise<{
        path: string;
        isBundled: boolean;
    }>;
    ensureChromiumExists(): Promise<PCRStats>;
    relaunchChromeDebugMode(controller: Controller): Promise<string>;
    /**
     * Set the task ID for telemetry tracking
     * @param taskId The task ID to associate with browser actions
     */
    setTaskId(taskId: string): void;
    launchBrowser(): Promise<void>;
    launchLocalBrowser(): Promise<void>;
    launchRemoteBrowser(): Promise<void>;
    /**
     * Kill all Chrome instances, including those not launched by chrome-launcher
     */
    private killAllChromeBrowsers;
    closeBrowser(): Promise<BrowserActionResult>;
    doAction(action: (page: Page) => Promise<void>): Promise<BrowserActionResult>;
    navigateToUrl(url: string): Promise<BrowserActionResult>;
    private waitTillHTMLStable;
    click(coordinate: string): Promise<BrowserActionResult>;
    type(text: string): Promise<BrowserActionResult>;
    scrollDown(): Promise<BrowserActionResult>;
    scrollUp(): Promise<BrowserActionResult>;
    dispose(): Promise<void>;
}
export {};
