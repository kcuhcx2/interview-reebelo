import axios from 'axios';
import {UpdateOrderStatus, ResultType, UpdateOrderShipping} from "../../types";
import {logger} from "../../util";

export const accountManagementUpdateOrderStatus = async (order: UpdateOrderStatus): Promise<ResultType<undefined>> => {
  logger.info(`update order status fetcher called ${JSON.stringify(order)}`);
  const response = await axios.post('http://localhost:3001/api/orders', order);

  if(response.status !== 200) {
    throw new Error(`update order service failed with status code ${response.status}`);
  }

  return {
    status: response.status,
    success: true,
  };
}

export const accountManagementUpdateOrderShipping = async (order: UpdateOrderShipping): Promise<ResultType<undefined>> => {
  logger.info(`update order shipping info fetcher called ${JSON.stringify(order)}`);
  const response = await axios.post('http://localhost:3001/api/orders', order);

  if(response.status !== 200) {
    throw new Error(`update order service failed with status code ${response.status}`);
  }

  return {
    status: response.status,
    success: true,
  };
}