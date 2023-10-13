// smithy-typescript generated code
import { WeatherServiceException as __BaseException } from "./WeatherServiceException";
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

export interface GetForecastInput {
  cityId: string | undefined;
}

/**
 * @internal
 */
export const GetForecastInputFilterSensitiveLog = (obj: GetForecastInput): any => ({
  ...obj,
})

export interface GetForecastOutput {
  chanceOfRain?: number;
}

/**
 * @internal
 */
export const GetForecastOutputFilterSensitiveLog = (obj: GetForecastOutput): any => ({
  ...obj,
})

export interface GetCityInput {
  cityId: string | undefined;
}

/**
 * @internal
 */
export const GetCityInputFilterSensitiveLog = (obj: GetCityInput): any => ({
  ...obj,
})

export interface CityCoordinates {
  latitude: number | undefined;
  longitude: number | undefined;
}

/**
 * @internal
 */
export const CityCoordinatesFilterSensitiveLog = (obj: CityCoordinates): any => ({
  ...obj,
})

export interface GetCityOutput {
  name: string | undefined;
  coordinates: CityCoordinates | undefined;
}

/**
 * @internal
 */
export const GetCityOutputFilterSensitiveLog = (obj: GetCityOutput): any => ({
  ...obj,
})

export class NoSuchResource extends __BaseException {
  readonly name: "NoSuchResource" = "NoSuchResource";
  readonly $fault: "client" = "client";
  resourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchResource, __BaseException>) {
    super({
      name: "NoSuchResource",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, NoSuchResource.prototype);
    this.resourceType = opts.resourceType;
  }
}

export interface ListCitiesInput {
  nextToken?: string;
  pageSize?: number;
}

/**
 * @internal
 */
export const ListCitiesInputFilterSensitiveLog = (obj: ListCitiesInput): any => ({
  ...obj,
})

export interface CitySummary {
  cityId: string | undefined;
  name: string | undefined;
}

/**
 * @internal
 */
export const CitySummaryFilterSensitiveLog = (obj: CitySummary): any => ({
  ...obj,
})

export interface ListCitiesOutput {
  nextToken?: string;
  items: (CitySummary)[] | undefined;
}

/**
 * @internal
 */
export const ListCitiesOutputFilterSensitiveLog = (obj: ListCitiesOutput): any => ({
  ...obj,
})

export interface GetCurrentTimeInput {
}

/**
 * @internal
 */
export const GetCurrentTimeInputFilterSensitiveLog = (obj: GetCurrentTimeInput): any => ({
  ...obj,
})

export interface GetCurrentTimeOutput {
  time: string | undefined;
}

/**
 * @internal
 */
export const GetCurrentTimeOutputFilterSensitiveLog = (obj: GetCurrentTimeOutput): any => ({
  ...obj,
})
