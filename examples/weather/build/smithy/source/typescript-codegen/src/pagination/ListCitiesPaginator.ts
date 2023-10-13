// smithy-typescript generated code
import { Weather } from "../Weather";
import { WeatherClient } from "../WeatherClient";
import {
  ListCitiesCommand,
  ListCitiesCommandInput,
  ListCitiesCommandOutput,
} from "../commands/ListCitiesCommand";
import { WeatherPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (client: WeatherClient, input: ListCitiesCommandInput, ...args: any): Promise<ListCitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCitiesCommand(input), ...args);
}
/**
 * @private
 */
const makePagedRequest = async (client: Weather, input: ListCitiesCommandInput, ...args: any): Promise<ListCitiesCommandOutput> => {
  // @ts-ignore
  return await client.listCities(input, ...args);
}
export async function* paginateListCities(config: WeatherPaginationConfiguration, input: ListCitiesCommandInput, ...additionalArguments: any): Paginator<ListCitiesCommandOutput>{
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCitiesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof Weather) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    }
    else if (config.client instanceof WeatherClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    }
    else {
      throw new Error("Invalid client, expected Weather | WeatherClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
