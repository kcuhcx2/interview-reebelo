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