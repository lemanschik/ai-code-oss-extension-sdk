export declare enum Environment {
    production = "production",
    staging = "staging",
    local = "local"
}
interface EnvironmentConfig {
    appBaseUrl: string;
    apiBaseUrl: string;
    mcpBaseUrl: string;
    firebase: {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket?: string;
        messagingSenderId?: string;
        appId?: string;
    };
}
export declare const clineEnvConfig: EnvironmentConfig;
export {};
