import { cline } from "../../grpc-js";
// Account Service
import { accountLoginClicked } from "../../../core/controller/account/accountLoginClicked";
import { accountLogoutClicked } from "../../../core/controller/account/accountLogoutClicked";
import { subscribeToAuthStatusUpdate } from "../../../core/controller/account/subscribeToAuthStatusUpdate";
import { authStateChanged } from "../../../core/controller/account/authStateChanged";
import { getUserCredits } from "../../../core/controller/account/getUserCredits";
import { getOrganizationCredits } from "../../../core/controller/account/getOrganizationCredits";
import { getUserOrganizations } from "../../../core/controller/account/getUserOrganizations";
import { setUserOrganization } from "../../../core/controller/account/setUserOrganization";
// Browser Service
import { getBrowserConnectionInfo } from "../../../core/controller/browser/getBrowserConnectionInfo";
import { testBrowserConnection } from "../../../core/controller/browser/testBrowserConnection";
import { discoverBrowser } from "../../../core/controller/browser/discoverBrowser";
import { getDetectedChromePath } from "../../../core/controller/browser/getDetectedChromePath";
import { updateBrowserSettings } from "../../../core/controller/browser/updateBrowserSettings";
import { relaunchChromeDebugMode } from "../../../core/controller/browser/relaunchChromeDebugMode";
// Checkpoints Service
import { checkpointDiff } from "../../../core/controller/checkpoints/checkpointDiff";
import { checkpointRestore } from "../../../core/controller/checkpoints/checkpointRestore";
// File Service
import { copyToClipboard } from "../../../core/controller/file/copyToClipboard";
import { openFile } from "../../../core/controller/file/openFile";
import { openImage } from "../../../core/controller/file/openImage";
import { openMention } from "../../../core/controller/file/openMention";
import { deleteRuleFile } from "../../../core/controller/file/deleteRuleFile";
import { createRuleFile } from "../../../core/controller/file/createRuleFile";
import { searchCommits } from "../../../core/controller/file/searchCommits";
import { selectFiles } from "../../../core/controller/file/selectFiles";
import { getRelativePaths } from "../../../core/controller/file/getRelativePaths";
import { searchFiles } from "../../../core/controller/file/searchFiles";
import { toggleClineRule } from "../../../core/controller/file/toggleClineRule";
import { toggleCursorRule } from "../../../core/controller/file/toggleCursorRule";
import { toggleWindsurfRule } from "../../../core/controller/file/toggleWindsurfRule";
import { refreshRules } from "../../../core/controller/file/refreshRules";
import { openTaskHistory } from "../../../core/controller/file/openTaskHistory";
import { toggleWorkflow } from "../../../core/controller/file/toggleWorkflow";
import { subscribeToWorkspaceUpdates } from "../../../core/controller/file/subscribeToWorkspaceUpdates";
// Mcp Service
import { toggleMcpServer } from "../../../core/controller/mcp/toggleMcpServer";
import { updateMcpTimeout } from "../../../core/controller/mcp/updateMcpTimeout";
import { addRemoteMcpServer } from "../../../core/controller/mcp/addRemoteMcpServer";
import { downloadMcp } from "../../../core/controller/mcp/downloadMcp";
import { restartMcpServer } from "../../../core/controller/mcp/restartMcpServer";
import { deleteMcpServer } from "../../../core/controller/mcp/deleteMcpServer";
import { toggleToolAutoApprove } from "../../../core/controller/mcp/toggleToolAutoApprove";
import { refreshMcpMarketplace } from "../../../core/controller/mcp/refreshMcpMarketplace";
import { openMcpSettings } from "../../../core/controller/mcp/openMcpSettings";
import { subscribeToMcpMarketplaceCatalog } from "../../../core/controller/mcp/subscribeToMcpMarketplaceCatalog";
import { getLatestMcpServers } from "../../../core/controller/mcp/getLatestMcpServers";
import { subscribeToMcpServers } from "../../../core/controller/mcp/subscribeToMcpServers";
// Models Service
import { getOllamaModels } from "../../../core/controller/models/getOllamaModels";
import { getLmStudioModels } from "../../../core/controller/models/getLmStudioModels";
import { getVsCodeLmModels } from "../../../core/controller/models/getVsCodeLmModels";
import { refreshOpenRouterModels } from "../../../core/controller/models/refreshOpenRouterModels";
import { refreshHuggingFaceModels } from "../../../core/controller/models/refreshHuggingFaceModels";
import { refreshOpenAiModels } from "../../../core/controller/models/refreshOpenAiModels";
import { refreshRequestyModels } from "../../../core/controller/models/refreshRequestyModels";
import { subscribeToOpenRouterModels } from "../../../core/controller/models/subscribeToOpenRouterModels";
import { updateApiConfigurationProto } from "../../../core/controller/models/updateApiConfigurationProto";
import { refreshGroqModels } from "../../../core/controller/models/refreshGroqModels";
import { refreshBasetenModels } from "../../../core/controller/models/refreshBasetenModels";
// Slash Service
import { reportBug } from "../../../core/controller/slash/reportBug";
import { condense } from "../../../core/controller/slash/condense";
// State Service
import { getLatestState } from "../../../core/controller/state/getLatestState";
import { updateTerminalConnectionTimeout } from "../../../core/controller/state/updateTerminalConnectionTimeout";
import { updateTerminalReuseEnabled } from "../../../core/controller/state/updateTerminalReuseEnabled";
import { updateDefaultTerminalProfile } from "../../../core/controller/state/updateDefaultTerminalProfile";
import { getAvailableTerminalProfiles } from "../../../core/controller/state/getAvailableTerminalProfiles";
import { subscribeToState } from "../../../core/controller/state/subscribeToState";
import { toggleFavoriteModel } from "../../../core/controller/state/toggleFavoriteModel";
import { resetState } from "../../../core/controller/state/resetState";
import { togglePlanActModeProto } from "../../../core/controller/state/togglePlanActModeProto";
import { updateAutoApprovalSettings } from "../../../core/controller/state/updateAutoApprovalSettings";
import { updateSettings } from "../../../core/controller/state/updateSettings";
import { updateTelemetrySetting } from "../../../core/controller/state/updateTelemetrySetting";
import { setWelcomeViewCompleted } from "../../../core/controller/state/setWelcomeViewCompleted";
// Task Service
import { cancelTask } from "../../../core/controller/task/cancelTask";
import { clearTask } from "../../../core/controller/task/clearTask";
import { getTotalTasksSize } from "../../../core/controller/task/getTotalTasksSize";
import { deleteTasksWithIds } from "../../../core/controller/task/deleteTasksWithIds";
import { newTask } from "../../../core/controller/task/newTask";
import { showTaskWithId } from "../../../core/controller/task/showTaskWithId";
import { exportTaskWithId } from "../../../core/controller/task/exportTaskWithId";
import { toggleTaskFavorite } from "../../../core/controller/task/toggleTaskFavorite";
import { getTaskHistory } from "../../../core/controller/task/getTaskHistory";
import { askResponse } from "../../../core/controller/task/askResponse";
import { taskFeedback } from "../../../core/controller/task/taskFeedback";
import { taskCompletionViewChanges } from "../../../core/controller/task/taskCompletionViewChanges";
import { executeQuickWin } from "../../../core/controller/task/executeQuickWin";
import { deleteAllTaskHistory } from "../../../core/controller/task/deleteAllTaskHistory";
// Ui Service
import { scrollToSettings } from "../../../core/controller/ui/scrollToSettings";
import { onDidShowAnnouncement } from "../../../core/controller/ui/onDidShowAnnouncement";
import { subscribeToAddToInput } from "../../../core/controller/ui/subscribeToAddToInput";
import { subscribeToMcpButtonClicked } from "../../../core/controller/ui/subscribeToMcpButtonClicked";
import { subscribeToHistoryButtonClicked } from "../../../core/controller/ui/subscribeToHistoryButtonClicked";
import { subscribeToChatButtonClicked } from "../../../core/controller/ui/subscribeToChatButtonClicked";
import { subscribeToAccountButtonClicked } from "../../../core/controller/ui/subscribeToAccountButtonClicked";
import { subscribeToSettingsButtonClicked } from "../../../core/controller/ui/subscribeToSettingsButtonClicked";
import { subscribeToPartialMessage } from "../../../core/controller/ui/subscribeToPartialMessage";
import { subscribeToTheme } from "../../../core/controller/ui/subscribeToTheme";
import { initializeWebview } from "../../../core/controller/ui/initializeWebview";
import { subscribeToRelinquishControl } from "../../../core/controller/ui/subscribeToRelinquishControl";
import { subscribeToFocusChatInput } from "../../../core/controller/ui/subscribeToFocusChatInput";
import { subscribeToDidBecomeVisible } from "../../../core/controller/ui/subscribeToDidBecomeVisible";
import { getWebviewHtml } from "../../../core/controller/ui/getWebviewHtml";
import { openUrl } from "../../../core/controller/ui/openUrl";
// Web Service
import { checkIsImageUrl } from "../../../core/controller/web/checkIsImageUrl";
import { fetchOpenGraphData } from "../../../core/controller/web/fetchOpenGraphData";
import { openInBrowser } from "../../../core/controller/web/openInBrowser";
export function addProtobusServices(server, controller, wrapper, wrapStreamingResponse) {
    // Account Service
    server.addService(cline.AccountServiceService, {
        accountLoginClicked: wrapper(accountLoginClicked, controller),
        accountLogoutClicked: wrapper(accountLogoutClicked, controller),
        subscribeToAuthStatusUpdate: wrapStreamingResponse(subscribeToAuthStatusUpdate, controller),
        authStateChanged: wrapper(authStateChanged, controller),
        getUserCredits: wrapper(getUserCredits, controller),
        getOrganizationCredits: wrapper(getOrganizationCredits, controller),
        getUserOrganizations: wrapper(getUserOrganizations, controller),
        setUserOrganization: wrapper(setUserOrganization, controller),
    });
    // Browser Service
    server.addService(cline.BrowserServiceService, {
        getBrowserConnectionInfo: wrapper(getBrowserConnectionInfo, controller),
        testBrowserConnection: wrapper(testBrowserConnection, controller),
        discoverBrowser: wrapper(discoverBrowser, controller),
        getDetectedChromePath: wrapper(getDetectedChromePath, controller),
        updateBrowserSettings: wrapper(updateBrowserSettings, controller),
        relaunchChromeDebugMode: wrapper(relaunchChromeDebugMode, controller),
    });
    // Checkpoints Service
    server.addService(cline.CheckpointsServiceService, {
        checkpointDiff: wrapper(checkpointDiff, controller),
        checkpointRestore: wrapper(checkpointRestore, controller),
    });
    // File Service
    server.addService(cline.FileServiceService, {
        copyToClipboard: wrapper(copyToClipboard, controller),
        openFile: wrapper(openFile, controller),
        openImage: wrapper(openImage, controller),
        openMention: wrapper(openMention, controller),
        deleteRuleFile: wrapper(deleteRuleFile, controller),
        createRuleFile: wrapper(createRuleFile, controller),
        searchCommits: wrapper(searchCommits, controller),
        selectFiles: wrapper(selectFiles, controller),
        getRelativePaths: wrapper(getRelativePaths, controller),
        searchFiles: wrapper(searchFiles, controller),
        toggleClineRule: wrapper(toggleClineRule, controller),
        toggleCursorRule: wrapper(toggleCursorRule, controller),
        toggleWindsurfRule: wrapper(toggleWindsurfRule, controller),
        refreshRules: wrapper(refreshRules, controller),
        openTaskHistory: wrapper(openTaskHistory, controller),
        toggleWorkflow: wrapper(toggleWorkflow, controller),
        subscribeToWorkspaceUpdates: wrapStreamingResponse(subscribeToWorkspaceUpdates, controller),
    });
    // Mcp Service
    server.addService(cline.McpServiceService, {
        toggleMcpServer: wrapper(toggleMcpServer, controller),
        updateMcpTimeout: wrapper(updateMcpTimeout, controller),
        addRemoteMcpServer: wrapper(addRemoteMcpServer, controller),
        downloadMcp: wrapper(downloadMcp, controller),
        restartMcpServer: wrapper(restartMcpServer, controller),
        deleteMcpServer: wrapper(deleteMcpServer, controller),
        toggleToolAutoApprove: wrapper(toggleToolAutoApprove, controller),
        refreshMcpMarketplace: wrapper(refreshMcpMarketplace, controller),
        openMcpSettings: wrapper(openMcpSettings, controller),
        subscribeToMcpMarketplaceCatalog: wrapStreamingResponse(subscribeToMcpMarketplaceCatalog, controller),
        getLatestMcpServers: wrapper(getLatestMcpServers, controller),
        subscribeToMcpServers: wrapStreamingResponse(subscribeToMcpServers, controller),
    });
    // Models Service
    server.addService(cline.ModelsServiceService, {
        getOllamaModels: wrapper(getOllamaModels, controller),
        getLmStudioModels: wrapper(getLmStudioModels, controller),
        getVsCodeLmModels: wrapper(getVsCodeLmModels, controller),
        refreshOpenRouterModels: wrapper(refreshOpenRouterModels, controller),
        refreshHuggingFaceModels: wrapper(refreshHuggingFaceModels, controller),
        refreshOpenAiModels: wrapper(refreshOpenAiModels, controller),
        refreshRequestyModels: wrapper(refreshRequestyModels, controller),
        subscribeToOpenRouterModels: wrapStreamingResponse(subscribeToOpenRouterModels, controller),
        updateApiConfigurationProto: wrapper(updateApiConfigurationProto, controller),
        refreshGroqModels: wrapper(refreshGroqModels, controller),
        refreshBasetenModels: wrapper(refreshBasetenModels, controller),
    });
    // Slash Service
    server.addService(cline.SlashServiceService, {
        reportBug: wrapper(reportBug, controller),
        condense: wrapper(condense, controller),
    });
    // State Service
    server.addService(cline.StateServiceService, {
        getLatestState: wrapper(getLatestState, controller),
        updateTerminalConnectionTimeout: wrapper(updateTerminalConnectionTimeout, controller),
        updateTerminalReuseEnabled: wrapper(updateTerminalReuseEnabled, controller),
        updateDefaultTerminalProfile: wrapper(updateDefaultTerminalProfile, controller),
        getAvailableTerminalProfiles: wrapper(getAvailableTerminalProfiles, controller),
        subscribeToState: wrapStreamingResponse(subscribeToState, controller),
        toggleFavoriteModel: wrapper(toggleFavoriteModel, controller),
        resetState: wrapper(resetState, controller),
        togglePlanActModeProto: wrapper(togglePlanActModeProto, controller),
        updateAutoApprovalSettings: wrapper(updateAutoApprovalSettings, controller),
        updateSettings: wrapper(updateSettings, controller),
        updateTelemetrySetting: wrapper(updateTelemetrySetting, controller),
        setWelcomeViewCompleted: wrapper(setWelcomeViewCompleted, controller),
    });
    // Task Service
    server.addService(cline.TaskServiceService, {
        cancelTask: wrapper(cancelTask, controller),
        clearTask: wrapper(clearTask, controller),
        getTotalTasksSize: wrapper(getTotalTasksSize, controller),
        deleteTasksWithIds: wrapper(deleteTasksWithIds, controller),
        newTask: wrapper(newTask, controller),
        showTaskWithId: wrapper(showTaskWithId, controller),
        exportTaskWithId: wrapper(exportTaskWithId, controller),
        toggleTaskFavorite: wrapper(toggleTaskFavorite, controller),
        getTaskHistory: wrapper(getTaskHistory, controller),
        askResponse: wrapper(askResponse, controller),
        taskFeedback: wrapper(taskFeedback, controller),
        taskCompletionViewChanges: wrapper(taskCompletionViewChanges, controller),
        executeQuickWin: wrapper(executeQuickWin, controller),
        deleteAllTaskHistory: wrapper(deleteAllTaskHistory, controller),
    });
    // Ui Service
    server.addService(cline.UiServiceService, {
        scrollToSettings: wrapper(scrollToSettings, controller),
        onDidShowAnnouncement: wrapper(onDidShowAnnouncement, controller),
        subscribeToAddToInput: wrapStreamingResponse(subscribeToAddToInput, controller),
        subscribeToMcpButtonClicked: wrapStreamingResponse(subscribeToMcpButtonClicked, controller),
        subscribeToHistoryButtonClicked: wrapStreamingResponse(subscribeToHistoryButtonClicked, controller),
        subscribeToChatButtonClicked: wrapStreamingResponse(subscribeToChatButtonClicked, controller),
        subscribeToAccountButtonClicked: wrapStreamingResponse(subscribeToAccountButtonClicked, controller),
        subscribeToSettingsButtonClicked: wrapStreamingResponse(subscribeToSettingsButtonClicked, controller),
        subscribeToPartialMessage: wrapStreamingResponse(subscribeToPartialMessage, controller),
        subscribeToTheme: wrapStreamingResponse(subscribeToTheme, controller),
        initializeWebview: wrapper(initializeWebview, controller),
        subscribeToRelinquishControl: wrapStreamingResponse(subscribeToRelinquishControl, controller),
        subscribeToFocusChatInput: wrapStreamingResponse(subscribeToFocusChatInput, controller),
        subscribeToDidBecomeVisible: wrapStreamingResponse(subscribeToDidBecomeVisible, controller),
        getWebviewHtml: wrapper(getWebviewHtml, controller),
        openUrl: wrapper(openUrl, controller),
    });
    // Web Service
    server.addService(cline.WebServiceService, {
        checkIsImageUrl: wrapper(checkIsImageUrl, controller),
        fetchOpenGraphData: wrapper(fetchOpenGraphData, controller),
        openInBrowser: wrapper(openInBrowser, controller),
    });
}
