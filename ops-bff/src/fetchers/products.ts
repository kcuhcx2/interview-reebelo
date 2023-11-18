import axios from 'axios';
import {UpdateOrderStatus, ResultType, UpdateOrderShipping, CreateProduct, UpdateProduct} from "../../types";
import {logger} from "../../util";

export const accountManagementCreateProduct = async (product: CreateProduct): Promise<ResultType<undefined>> => {
  logger.info(`create product fetcher called ${JSON.stringify(product)}`);
  const response = await axios.post('http://localhost:3001/api/orders', product);

  if(response.status !== 200) {
    throw new Error(`create product failed with status code ${response.status}`);
  }

  return {
    status: response.status,
    success: true,
  };
}

export const accountManagementUpdateProduct = async (product: UpdateProduct): Promise<ResultType<undefined>> => {
  logger.info(`update product fetcher called ${JSON.stringify(product)}`);
  const response = await axios.post('http://localhost:3001/api/orders', product);

  if(response.status !== 200) {
    throw new Error(`update product failed with status code ${response.status}`);
  }

  return {
    status: response.status,
    success: true,
  };
}