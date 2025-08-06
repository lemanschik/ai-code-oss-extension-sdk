export declare const FEATURE_FLAGS: {
    readonly CUSTOM_INSTRUCTIONS: "custom-instructions";
};
export type FeatureFlag = (typeof FEATURE_FLAGS)[keyof typeof FEATURE_FLAGS];
