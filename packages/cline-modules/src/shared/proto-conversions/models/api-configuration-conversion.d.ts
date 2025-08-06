import { ApiConfiguration } from "../../api";
import { ModelsApiConfiguration as ProtoApiConfiguration } from "../../proto/cline/models";
export declare function convertApiConfigurationToProto(config: ApiConfiguration): ProtoApiConfiguration;
export declare function convertProtoToApiConfiguration(protoConfig: ProtoApiConfiguration): ApiConfiguration;
