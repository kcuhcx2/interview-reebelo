import {logger} from "../../util";
import {
  UpdateOrderStatusRequest,
  updateOrderStatusValidationSchema,
  updateOrderShippingValidationSchema,
  UpdateOrderShippingRequest
} from "../../types";
import {updateOrderShipping, updateOrderStatus} from "../services";

export const updateOrderStatusHandler = async (req: { body: string }) => {
  logger.info('Update order status handlers called');
  logger.info(`request body: ${req.body}`);
  const request: UpdateOrderStatusRequest = JSON.parse(req?.body || '{}');

  const isValid = updateOrderStatusValidationSchema.isValidSync(request);
  const { status, orderId } = request;
  if(!isValid) {
    logger.info('Invalid request body');
    return {
      statusCode: 422,
      body: JSON.stringify({ success: false }),
    };
  }

  const createOrderResponse = await updateOrderStatus({orderId, status});

  return {
    statusCode: createOrderResponse.status,
    body: JSON.stringify({ success: createOrderResponse.success }),
  };
}

export const updateOrderShippingHandler = async (req: { body: string }) => {
  logger.info('Update order shipping handlers called');
  logger.info(`request body: ${req.body}`);
  const request: UpdateOrderShippingRequest = JSON.parse(req?.body || '{}');

  const isValid = updateOrderShippingValidationSchema.isValidSync(request);
  const { tracking, orderId } = request;
  if(!isValid) {
    logger.info('Invalid request body');
    return {
      statusCode: 422,
      body: JSON.stringify({ success: false }),
    };
  }

  const createOrderResponse = await updateOrderShipping({orderId, tracking});

  return {
    statusCode: createOrderResponse.status,
    body: JSON.stringify({ success: createOrderResponse.success }),
  };
}
