import { z } from "zod";
export declare const AutoApproveSchema: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
export declare const BaseConfigSchema: z.ZodObject<{
    autoApprove: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    disabled: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    timeout: number;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
}, {
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
}>;
export declare const ServerConfigSchema: z.ZodUnion<[z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    autoApprove: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    disabled: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, {
    type: z.ZodOptional<z.ZodLiteral<"stdio">>;
    transportType: z.ZodOptional<z.ZodString>;
    command: z.ZodString;
    args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    cwd: z.ZodOptional<z.ZodString>;
    env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    url: z.ZodOptional<z.ZodString>;
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    timeout: number;
    command: string;
    type?: "stdio" | undefined;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
    url?: string | undefined;
    cwd?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}, {
    command: string;
    type?: "stdio" | undefined;
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
    url?: string | undefined;
    cwd?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}>, {
    type: "stdio";
    transportType: undefined;
    timeout: number;
    command: string;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
    url?: string | undefined;
    cwd?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    args?: string[] | undefined;
}, {
    command: string;
    type?: "stdio" | undefined;
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
    url?: string | undefined;
    cwd?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}>, {
    type: "stdio";
    transportType: undefined;
    timeout: number;
    command: string;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
    url?: string | undefined;
    cwd?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    args?: string[] | undefined;
}, {
    command: string;
    type?: "stdio" | undefined;
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
    url?: string | undefined;
    cwd?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}>, z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    autoApprove: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    disabled: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, {
    type: z.ZodOptional<z.ZodLiteral<"sse">>;
    transportType: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    command: z.ZodOptional<z.ZodString>;
    args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    timeout: number;
    url: string;
    type?: "sse" | undefined;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}, {
    url: string;
    type?: "sse" | undefined;
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}>, {
    type: "sse";
    transportType: undefined;
    timeout: number;
    url: string;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    args?: string[] | undefined;
}, {
    url: string;
    type?: "sse" | undefined;
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}>, {
    type: "sse";
    transportType: undefined;
    timeout: number;
    url: string;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    args?: string[] | undefined;
}, {
    url: string;
    type?: "sse" | undefined;
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}>, z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    autoApprove: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    disabled: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, {
    type: z.ZodOptional<z.ZodLiteral<"streamableHttp">>;
    transportType: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    command: z.ZodOptional<z.ZodString>;
    args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    timeout: number;
    url: string;
    type?: "streamableHttp" | undefined;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}, {
    url: string;
    type?: "streamableHttp" | undefined;
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}>, {
    type: "streamableHttp";
    transportType: undefined;
    timeout: number;
    url: string;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    args?: string[] | undefined;
}, {
    url: string;
    type?: "streamableHttp" | undefined;
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}>, {
    type: "streamableHttp";
    transportType: undefined;
    timeout: number;
    url: string;
    disabled?: boolean | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    args?: string[] | undefined;
}, {
    url: string;
    type?: "streamableHttp" | undefined;
    disabled?: boolean | undefined;
    timeout?: number | undefined;
    autoApprove?: string[] | undefined;
    command?: string | undefined;
    headers?: Record<string, string> | undefined;
    env?: Record<string, string> | undefined;
    transportType?: string | undefined;
    args?: string[] | undefined;
}>]>;
export declare const McpSettingsSchema: z.ZodObject<{
    mcpServers: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
        autoApprove: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
        disabled: z.ZodOptional<z.ZodBoolean>;
        timeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, {
        type: z.ZodOptional<z.ZodLiteral<"stdio">>;
        transportType: z.ZodOptional<z.ZodString>;
        command: z.ZodString;
        args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        cwd: z.ZodOptional<z.ZodString>;
        env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        url: z.ZodOptional<z.ZodString>;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }>, "strip", z.ZodTypeAny, {
        timeout: number;
        command: string;
        type?: "stdio" | undefined;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        url?: string | undefined;
        cwd?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }, {
        command: string;
        type?: "stdio" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        url?: string | undefined;
        cwd?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>, {
        type: "stdio";
        transportType: undefined;
        timeout: number;
        command: string;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        url?: string | undefined;
        cwd?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        args?: string[] | undefined;
    }, {
        command: string;
        type?: "stdio" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        url?: string | undefined;
        cwd?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>, {
        type: "stdio";
        transportType: undefined;
        timeout: number;
        command: string;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        url?: string | undefined;
        cwd?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        args?: string[] | undefined;
    }, {
        command: string;
        type?: "stdio" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        url?: string | undefined;
        cwd?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>, z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
        autoApprove: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
        disabled: z.ZodOptional<z.ZodBoolean>;
        timeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, {
        type: z.ZodOptional<z.ZodLiteral<"sse">>;
        transportType: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        command: z.ZodOptional<z.ZodString>;
        args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }>, "strip", z.ZodTypeAny, {
        timeout: number;
        url: string;
        type?: "sse" | undefined;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }, {
        url: string;
        type?: "sse" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>, {
        type: "sse";
        transportType: undefined;
        timeout: number;
        url: string;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        args?: string[] | undefined;
    }, {
        url: string;
        type?: "sse" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>, {
        type: "sse";
        transportType: undefined;
        timeout: number;
        url: string;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        args?: string[] | undefined;
    }, {
        url: string;
        type?: "sse" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>, z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
        autoApprove: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
        disabled: z.ZodOptional<z.ZodBoolean>;
        timeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, {
        type: z.ZodOptional<z.ZodLiteral<"streamableHttp">>;
        transportType: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        command: z.ZodOptional<z.ZodString>;
        args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }>, "strip", z.ZodTypeAny, {
        timeout: number;
        url: string;
        type?: "streamableHttp" | undefined;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }, {
        url: string;
        type?: "streamableHttp" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>, {
        type: "streamableHttp";
        transportType: undefined;
        timeout: number;
        url: string;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        args?: string[] | undefined;
    }, {
        url: string;
        type?: "streamableHttp" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>, {
        type: "streamableHttp";
        transportType: undefined;
        timeout: number;
        url: string;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        args?: string[] | undefined;
    }, {
        url: string;
        type?: "streamableHttp" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    mcpServers: Record<string, {
        type: "stdio";
        transportType: undefined;
        timeout: number;
        command: string;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        url?: string | undefined;
        cwd?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        args?: string[] | undefined;
    } | {
        type: "sse";
        transportType: undefined;
        timeout: number;
        url: string;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        args?: string[] | undefined;
    } | {
        type: "streamableHttp";
        transportType: undefined;
        timeout: number;
        url: string;
        disabled?: boolean | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        args?: string[] | undefined;
    }>;
}, {
    mcpServers: Record<string, {
        command: string;
        type?: "stdio" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        url?: string | undefined;
        cwd?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    } | {
        url: string;
        type?: "sse" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    } | {
        url: string;
        type?: "streamableHttp" | undefined;
        disabled?: boolean | undefined;
        timeout?: number | undefined;
        autoApprove?: string[] | undefined;
        command?: string | undefined;
        headers?: Record<string, string> | undefined;
        env?: Record<string, string> | undefined;
        transportType?: string | undefined;
        args?: string[] | undefined;
    }>;
}>;
