import { UrlContentFetcher } from "../../services/browser/UrlContentFetcher";
import { FileContextTracker } from "../context/context-tracking/FileContextTracker";
export declare function openMention(mention?: string): Promise<void>;
export declare function parseMentions(text: string, cwd: string, urlContentFetcher: UrlContentFetcher, fileContextTracker?: FileContextTracker): Promise<string>;
