import { RuleFileRequest } from "../../proto/cline/file";
export declare const DeleteRuleFileRequest: {
    create: (params: {
        rulePath: string;
        isGlobal: boolean;
        metadata?: any;
        type?: string;
    }) => RuleFileRequest;
};
export declare const CreateRuleFileRequest: {
    create: (params: {
        filename: string;
        isGlobal: boolean;
        metadata?: any;
        type?: string;
    }) => RuleFileRequest;
};
