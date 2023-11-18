import {Order} from "../../types";
import {logger} from "../../util";
import {accountManagementCreateOrder} from "../fetchers";

export const createOrder = async (order: Order) => {
  try {
    logger.info(`Create order service called ${JSON.stringify(order)}`);
    return await accountManagementCreateOrder(order);
  } catch (e) {
    logger.error(`Create order service failed ${e}`);
    return {
      status: 500,
      success: false,
    }
  }
}

export const keepTrackOfIdempotencyKey = async (idempotencyKey: string) => {
  /**
   * In terms of implementation, we can use a database to store the idempotency key
   * and check if it has been used before. If it has been used before, we can return
   * a 409 Conflict response. If it has not been used before, we can store it in the
   * database and proceed with the request.
   */
  return;
}
