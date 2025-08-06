import { ToolDefinition } from "../prompts/model_prompts/jsonToolToXml";
import { BrowserSettings } from "../../shared/BrowserSettings";
export declare const browserActionToolName = "BrowserAction";
export declare const browserActionToolDefinition: (browserSettings: BrowserSettings) => ToolDefinition;
