// smithy-typescript generated code
import { parseUrl } from "@aws-sdk/url-parser";
import {
  fromBase64,
  toBase64,
} from "@aws-sdk/util-base64";
import {
  fromUtf8,
  toUtf8,
} from "@aws-sdk/util-utf8";
import { WeatherClientConfig } from "./WeatherClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WeatherClientConfig) => ({
  apiVersion: "2006-03-01",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf8,
  utf8Encoder: config?.utf8Encoder ?? toUtf8,
});
