import { ApiConfiguration } from "../../api";
import { ApiConfiguration as ProtoApiConfiguration } from "../../proto/cline/state";
/**
 * Converts domain ApiConfiguration objects to proto ApiConfiguration objects
 */
export declare function convertApiConfigurationToProtoApiConfiguration(config: ApiConfiguration): ProtoApiConfiguration;
/**
 * Converts proto ApiConfiguration objects to domain ApiConfiguration objects
 */
export declare function convertProtoApiConfigurationToApiConfiguration(protoConfig: ProtoApiConfiguration): ApiConfiguration;
