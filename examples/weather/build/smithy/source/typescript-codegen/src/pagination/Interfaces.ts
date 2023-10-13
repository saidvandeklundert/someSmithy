// smithy-typescript generated code
import { Weather } from "../Weather";
import { WeatherClient } from "../WeatherClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface WeatherPaginationConfiguration extends PaginationConfiguration {
  client: Weather | WeatherClient;
}
