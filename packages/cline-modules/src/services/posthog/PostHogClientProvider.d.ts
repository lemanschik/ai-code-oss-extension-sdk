import { PostHog } from "posthog-node";
declare class PostHogClientProvider {
    private static instance;
    private client;
    private constructor();
    static getInstance(): PostHogClientProvider;
    getClient(): PostHog;
    shutdown(): Promise<void>;
}
export declare const posthogClientProvider: PostHogClientProvider;
export {};
