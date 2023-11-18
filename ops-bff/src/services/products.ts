import {CreateProduct, UpdateProduct} from "../../types";
import {logger} from "../../util";
import {
  accountManagementCreateProduct,
  accountManagementUpdateProduct
} from "../fetchers";

export const createProduct = async (product: CreateProduct) => {
  try {
    logger.info(`Create product called ${JSON.stringify(product)}`);
    return await accountManagementCreateProduct(product);
  } catch (e) {
    logger.error(`Create product failed ${e}`);
    return {
      status: 500,
      success: false,
    }
  }
}

export const updateProduct = async (product: UpdateProduct) => {
  try {
    logger.info(`Update product called ${JSON.stringify(product)}`);
    return await accountManagementUpdateProduct(product);
  } catch (e) {
    logger.error(`Update product failed ${e}`);
    return {
      status: 500,
      success: false,
    }
  }
}