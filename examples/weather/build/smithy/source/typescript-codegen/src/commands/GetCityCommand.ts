// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WeatherClientResolvedConfig,
} from "../WeatherClient";
import {
  GetCityInput,
  GetCityInputFilterSensitiveLog,
  GetCityOutput,
  GetCityOutputFilterSensitiveLog,
} from "../models/models_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetCityCommandInput extends GetCityInput {}
export interface GetCityCommandOutput extends GetCityOutput, __MetadataBearer {}

export class GetCityCommand extends $Command<GetCityCommandInput, GetCityCommandOutput, WeatherClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WeatherClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCityCommandInput, GetCityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WeatherClient";
    const commandName = "GetCityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        GetCityInputFilterSensitiveLog,
      outputFilterSensitiveLog:
        GetCityOutputFilterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    throw new Error("No supported protocol was found");
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCityCommandOutput> {
    throw new Error("No supported protocol was found");
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
