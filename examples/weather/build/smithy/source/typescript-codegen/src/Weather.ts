// smithy-typescript generated code
import { WeatherClient } from "./WeatherClient";
import {
  GetCityCommand,
  GetCityCommandInput,
  GetCityCommandOutput,
} from "./commands/GetCityCommand";
import {
  GetCurrentTimeCommand,
  GetCurrentTimeCommandInput,
  GetCurrentTimeCommandOutput,
} from "./commands/GetCurrentTimeCommand";
import {
  GetForecastCommand,
  GetForecastCommandInput,
  GetForecastCommandOutput,
} from "./commands/GetForecastCommand";
import {
  ListCitiesCommand,
  ListCitiesCommandInput,
  ListCitiesCommandOutput,
} from "./commands/ListCitiesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * Provides weather forecasts.
 */
export class Weather extends WeatherClient {
  public getCity(
    args: GetCityCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetCityCommandOutput>;
  public getCity(
    args: GetCityCommandInput,
    cb: (err: any, data?: GetCityCommandOutput) => void
  ): void;
  public getCity(
    args: GetCityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCityCommandOutput) => void
  ): void;
  public getCity(
    args: GetCityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCityCommandOutput) => void),
    cb?: (err: any, data?: GetCityCommandOutput) => void
  ): Promise<GetCityCommandOutput> | void {
    const command = new GetCityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public getCurrentTime(
    args: GetCurrentTimeCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetCurrentTimeCommandOutput>;
  public getCurrentTime(
    args: GetCurrentTimeCommandInput,
    cb: (err: any, data?: GetCurrentTimeCommandOutput) => void
  ): void;
  public getCurrentTime(
    args: GetCurrentTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCurrentTimeCommandOutput) => void
  ): void;
  public getCurrentTime(
    args: GetCurrentTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCurrentTimeCommandOutput) => void),
    cb?: (err: any, data?: GetCurrentTimeCommandOutput) => void
  ): Promise<GetCurrentTimeCommandOutput> | void {
    const command = new GetCurrentTimeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public getForecast(
    args: GetForecastCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetForecastCommandOutput>;
  public getForecast(
    args: GetForecastCommandInput,
    cb: (err: any, data?: GetForecastCommandOutput) => void
  ): void;
  public getForecast(
    args: GetForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetForecastCommandOutput) => void
  ): void;
  public getForecast(
    args: GetForecastCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetForecastCommandOutput) => void),
    cb?: (err: any, data?: GetForecastCommandOutput) => void
  ): Promise<GetForecastCommandOutput> | void {
    const command = new GetForecastCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public listCities(
    args: ListCitiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListCitiesCommandOutput>;
  public listCities(
    args: ListCitiesCommandInput,
    cb: (err: any, data?: ListCitiesCommandOutput) => void
  ): void;
  public listCities(
    args: ListCitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCitiesCommandOutput) => void
  ): void;
  public listCities(
    args: ListCitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCitiesCommandOutput) => void),
    cb?: (err: any, data?: ListCitiesCommandOutput) => void
  ): Promise<ListCitiesCommandOutput> | void {
    const command = new ListCitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

}
