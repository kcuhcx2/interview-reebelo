import axios from 'axios';
import {Order, ResultType} from "../../types";
import {logger} from "../../util";

export const accountManagementCreateOrder = async (order: Order): Promise<ResultType<undefined>> => {
  logger.info(`Create order fetcher called ${JSON.stringify(order)}`);
  const response = await axios.post('http://localhost:3001/api/orders', order);

  if(response.status !== 201) {
    throw new Error(`Create order service failed with status code ${response.status}`);
  }

  return {
    status: response.status,
    success: true,
  };
}