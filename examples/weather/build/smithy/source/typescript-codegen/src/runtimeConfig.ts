// smithy-typescript generated code
import { Hash } from "@aws-sdk/hash-node";
import {
  NodeHttpHandler as RequestHandler,
  streamCollector,
} from "@aws-sdk/node-http-handler";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { WeatherClientConfig } from "./WeatherClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@aws-sdk/smithy-client";
import { resolveDefaultsModeConfig } from "@aws-sdk/util-defaults-mode-node";
import { emitWarningIfUnsupportedVersion } from "@aws-sdk/smithy-client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WeatherClientConfig) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    requestHandler: config?.requestHandler ?? new RequestHandler(defaultConfigProvider),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
  };
};
