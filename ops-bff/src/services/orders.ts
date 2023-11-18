import {UpdateOrderShipping, UpdateOrderStatus} from "../../types";
import {logger} from "../../util";
import {accountManagementUpdateOrderStatus, accountManagementUpdateOrderShipping} from "../fetchers";

export const updateOrderStatus = async (order: UpdateOrderStatus) => {
  try {
    logger.info(`Update order status called ${JSON.stringify(order)}`);
    return await accountManagementUpdateOrderStatus(order);
  } catch (e) {
    logger.error(`Update order service failed ${e}`);
    return {
      status: 500,
      success: false,
    }
  }
}

export const updateOrderShipping = async (order: UpdateOrderShipping) => {
  try {
    logger.info(`Update order shipping info called ${JSON.stringify(order)}`);
    return await accountManagementUpdateOrderShipping(order);
  } catch (e) {
    logger.error(`Update order service failed ${e}`);
    return {
      status: 500,
      success: false,
    }
  }
}