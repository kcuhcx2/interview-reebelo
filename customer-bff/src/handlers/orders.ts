import {logger} from "../../util";
import {createOrdersValidationSchema, OrderRequest} from "../../types";
import {createOrder} from "../services";

export const createOrderHandler = async (req: { body: string }) => {
  logger.info('Create order handlers called');
  logger.info(`request body: ${req.body}`);
  const request: OrderRequest = JSON.parse(req?.body || '{}');

  const isValid = createOrdersValidationSchema.isValidSync(request);
  const { quantity, productId } = request;
  if(!isValid) {
    logger.info('Invalid request body');
    return {
      statusCode: 422,
      body: JSON.stringify({ success: false }),
    };
  }

  const createOrderResponse = await createOrder({quantity, productId});

  return {
    statusCode: createOrderResponse.status,
    body: JSON.stringify({ success: createOrderResponse.success }),
  };
}
