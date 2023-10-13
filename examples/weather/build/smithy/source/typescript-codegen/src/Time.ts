// smithy-typescript generated code
import { TimeClient } from "./TimeClient";
import {
  GetCurrentTimeCommand,
  GetCurrentTimeCommandInput,
  GetCurrentTimeCommandOutput,
} from "./commands/GetCurrentTimeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

export class Time extends TimeClient {
  /**
   * An operation for getting the current time
   */
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

}
