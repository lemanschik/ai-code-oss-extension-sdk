import type { TaskFeedbackType } from "../../../shared/WebviewMessage";
import type { BrowserSettings } from "../../../shared/BrowserSettings";
import { Mode } from "../../../shared/storage/types";
import { ClineAccountUserInfo } from "../../auth/AuthService";
/**
 * TelemetryService handles telemetry event tracking for the Cline extension
 * Uses PostHog analytics to track user interactions and system events
 * Respects user privacy settings and VSCode's global telemetry configuration
 */
/**
 * Represents telemetry event categories that can be individually enabled or disabled
 * When adding a new category, add it both here and to the initial values in telemetryCategoryEnabled
 * Ensure `if (!this.isCategoryEnabled('<category_name>')` is added to the capture method
 */
type TelemetryCategory = "checkpoints" | "browser";
declare class TelemetryService {
    private telemetryCategoryEnabled;
    private static readonly EVENTS;
    /** Singleton instance of the TelemetryService */
    private static instance;
    /** PostHog client instance for sending analytics events */
    private client;
    /** Unique identifier for the current VSCode instance */
    distinctId: string;
    /** Whether telemetry is currently enabled based on user and VSCode settings */
    private telemetryEnabled;
    /** Current version of the extension */
    private readonly version;
    /** Whether the extension is running in development mode */
    private readonly isDev;
    /**
     * Private constructor to enforce singleton pattern
     * Initializes PostHog client with configuration
     */
    private constructor();
    private setDistinctId;
    /**
     * Updates the telemetry state based on user preferences and VSCode settings
     * Only enables telemetry if both VSCode global telemetry is enabled and user has opted in
     * @param didUserOptIn Whether the user has explicitly opted into telemetry
     */
    updateTelemetryState(didUserOptIn: boolean): Promise<void>;
    /**
     * Gets or creates the singleton instance of TelemetryService
     * @returns The TelemetryService instance
     */
    static getInstance(): TelemetryService;
    private addProperties;
    /**
     * Captures a telemetry event if telemetry is enabled
     * @param event The event to capture with its properties
     */
    capture(event: {
        event: string;
        properties?: any;
    }): void;
    captureExtensionActivated(installId: string): void;
    /**
     * Identifies the accounts user
     * @param userInfo The user's information
     */
    identifyAccount(userInfo: ClineAccountUserInfo): void;
    /**
     * Records when a new task/conversation is started
     * @param taskId Unique identifier for the new task
     * @param apiProvider Optional API provider
     */
    captureTaskCreated(taskId: string, apiProvider?: string): void;
    /**
     * Records when a task/conversation is restarted
     * @param taskId Unique identifier for the new task
     * @param apiProvider Optional API provider
     */
    captureTaskRestarted(taskId: string, apiProvider?: string): void;
    /**
     * Records when cline calls the task completion_result tool signifying that cline is done with the task
     * @param taskId Unique identifier for the task
     */
    captureTaskCompleted(taskId: string): void;
    /**
     * Captures that a message was sent, and includes the API provider and model used
     * @param taskId Unique identifier for the task
     * @param provider The API provider (e.g., OpenAI, Anthropic)
     * @param model The specific model used (e.g., GPT-4, Claude)
     * @param source The source of the message ("user" | "model"). Used to track message patterns and identify when users need to correct the model's responses.
     * @param tokenUsage Optional token usage data
     */
    captureConversationTurnEvent(taskId: string, provider: string | undefined, model: string | undefined, source: "user" | "assistant", tokenUsage?: {
        tokensIn?: number;
        tokensOut?: number;
        cacheWriteTokens?: number;
        cacheReadTokens?: number;
        totalCost?: number;
    }): void;
    /**
     * Records token usage metrics for cost tracking and usage analysis
     * @param taskId Unique identifier for the task
     * @param tokensIn Number of input tokens consumed
     * @param tokensOut Number of output tokens generated
     * @param model The model used for token calculation
     */
    captureTokenUsage(taskId: string, tokensIn: number, tokensOut: number, model: string): void;
    /**
     * Records when a task switches between plan and act modes
     * @param taskId Unique identifier for the task
     * @param mode The mode being switched to (plan or act)
     */
    captureModeSwitch(taskId: string, mode: Mode): void;
    /**
     * Records user feedback on completed tasks
     * @param taskId Unique identifier for the task
     * @param feedbackType The type of feedback ("thumbs_up" or "thumbs_down")
     */
    captureTaskFeedback(taskId: string, feedbackType: TaskFeedbackType): void;
    /**
     * Records when a tool is used during task execution
     * @param taskId Unique identifier for the task
     * @param tool Name of the tool being used
     * @param autoApproved Whether the tool was auto-approved based on settings
     * @param success Whether the tool execution was successful
     */
    captureToolUsage(taskId: string, tool: string, modelId: string, autoApproved: boolean, success: boolean): void;
    /**
     * Records interactions with the git-based checkpoint system
     * @param taskId Unique identifier for the task
     * @param action The type of checkpoint action
     * @param durationMs Optional duration of the operation in milliseconds
     */
    captureCheckpointUsage(taskId: string, action: "shadow_git_initialized" | "commit_created" | "restored" | "diff_generated", durationMs?: number): void;
    /**
     * Records when a diff edit (replace_in_file) operation fails
     * @param taskId Unique identifier for the task
     * @param errorType Type of error that occurred (e.g., "search_not_found", "invalid_format")
     */
    captureDiffEditFailure(taskId: string, modelId: string, errorType?: string): void;
    /**
     * Records when a different model is selected for use
     * @param model Name of the selected model
     * @param provider Provider of the selected model
     * @param taskId Optional task identifier if model was selected during a task
     */
    captureModelSelected(model: string, provider: string, taskId?: string): void;
    /**
     * Records when a historical task is loaded from storage
     * @param taskId Unique identifier for the historical task
     */
    captureHistoricalTaskLoaded(taskId: string): void;
    /**
     * Records when the retry button is clicked for failed operations
     * @param taskId Unique identifier for the task being retried
     */
    captureRetryClicked(taskId: string): void;
    /**
     * Records when the browser tool is started
     * @param taskId Unique identifier for the task
     * @param browserSettings The browser settings being used
     */
    captureBrowserToolStart(taskId: string, browserSettings: BrowserSettings): void;
    /**
     * Records when the browser tool is completed
     * @param taskId Unique identifier for the task
     * @param stats Statistics about the browser session
     */
    captureBrowserToolEnd(taskId: string, stats: {
        actionCount: number;
        duration: number;
        actions?: string[];
    }): void;
    /**
     * Records when browser errors occur during a task
     * @param taskId Unique identifier for the task
     * @param errorType Type of error that occurred (e.g., "launch_error", "connection_error", "navigation_error")
     * @param errorMessage The error message
     * @param context Additional context about where the error occurred
     */
    captureBrowserError(taskId: string, errorType: string, errorMessage: string, context?: {
        action?: string;
        url?: string;
        isRemote?: boolean;
        [key: string]: any;
    }): void;
    /**
     * Records when a user selects an option from AI-generated followup questions
     * @param taskId Unique identifier for the task
     * @param qty The quantity of options that were presented
     * @param mode The mode in which the option was selected ("plan" or "act")
     */
    captureOptionSelected(taskId: string, qty: number, mode: Mode): void;
    /**
     * Records when a user types a custom response instead of selecting one of the AI-generated followup questions
     * @param taskId Unique identifier for the task
     * @param qty The quantity of options that were presented
     * @param mode The mode in which the custom response was provided ("plan" or "act")
     */
    captureOptionsIgnored(taskId: string, qty: number, mode: Mode): void;
    /**
     * Captures Gemini API performance metrics.
     * @param taskId Unique identifier for the task
     * @param modelId Specific Gemini model ID
     * @param data Performance data including TTFT, durations, token counts, cache stats, and API success status
     */
    captureGeminiApiPerformance(taskId: string, modelId: string, data: {
        ttftSec?: number;
        totalDurationSec?: number;
        promptTokens: number;
        outputTokens: number;
        cacheReadTokens: number;
        cacheHit: boolean;
        cacheHitPercentage?: number;
        apiSuccess: boolean;
        apiError?: string;
        throughputTokensPerSec?: number;
    }): void;
    /**
     * Records when the user uses the model favorite button in the model picker
     * @param model The name of the model the user has interacted with
     * @param isFavorited Whether the model is being favorited (true) or unfavorited (false)
     */
    captureModelFavoritesUsage(model: string, isFavorited: boolean): void;
    captureButtonClick(button: string, taskId?: string): void;
    /**
     * Records telemetry when an API provider returns an error
     * @param taskId Unique identifier for the task
     * @param model Identifier of the model used
     * @param requestId Unique identifier for the specific API request
     * @param errorMessage Detailed error message from the API provider
     * @param errorStatus HTTP status code of the error response, if available
     * @param collect Optional flag to determine if the event should be collected for batch sending
     */
    captureProviderApiError(args: {
        taskId: string;
        model: string;
        errorMessage: string;
        errorStatus?: number | undefined;
        requestId?: string | undefined;
    }): void;
    /**
     * Checks if telemetry is enabled
     * @returns Boolean indicating whether telemetry is enabled
     */
    isTelemetryEnabled(): boolean;
    /**
     * Checks if a specific telemetry category is enabled
     * @param category The telemetry category to check
     * @returns Boolean indicating whether the specified telemetry category is enabled
     */
    isCategoryEnabled(category: TelemetryCategory): boolean;
    shutdown(): Promise<void>;
}
export declare const telemetryService: TelemetryService;
export {};
