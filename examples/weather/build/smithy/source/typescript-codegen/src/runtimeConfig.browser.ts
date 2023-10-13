// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-browser";
import {
  FetchHttpHandler as RequestHandler,
  streamCollector,
} from "@aws-sdk/fetch-http-handler";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { WeatherClientConfig } from "./WeatherClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@aws-sdk/smithy-client";
import { resolveDefaultsModeConfig } from "@aws-sdk/util-defaults-mode-browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WeatherClientConfig) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    requestHandler: config?.requestHandler ?? new RequestHandler(defaultConfigProvider),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
  };
};
