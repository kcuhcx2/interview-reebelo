import {logger} from "../../util";
import {
  CreateProductRequest,
  createProductValidationSchema,
  UpdateProductRequest,
  updateProductValidationSchema
} from "../../types";
import {accountManagementCreateProduct, accountManagementUpdateProduct} from "../fetchers";

export const createProductHandler = async (req: { body: string }) => {
  logger.info('Create product handlers called');
  logger.info(`request body: ${req.body}`);
  const request: CreateProductRequest = JSON.parse(req?.body || '{}');

  const isValid = createProductValidationSchema.isValidSync(request);
  const { price, quantity } = request;
  if(!isValid) {
    logger.info('Invalid request body');
    return {
      statusCode: 422,
      body: JSON.stringify({ success: false }),
    };
  }

  const createProductResponse = await accountManagementCreateProduct({quantity, price});

  return {
    statusCode: createProductResponse.status,
    body: JSON.stringify({ success: createProductResponse.success }),
  };
}

export const updateProductHandler = async (req: { body: string }) => {
  logger.info('Update product handlers called');
  logger.info(`request body: ${req.body}`);
  const request: UpdateProductRequest = JSON.parse(req?.body || '{}');

  const isValid = updateProductValidationSchema.isValidSync(request);
  const { price, productId, quantity } = request;
  if(!isValid) {
    logger.info('Invalid request body');
    return {
      statusCode: 422,
      body: JSON.stringify({ success: false }),
    };
  }

  const updateProductResponse = await accountManagementUpdateProduct({productId, price, quantity});

  return {
    statusCode: updateProductResponse.status,
    body: JSON.stringify({ success: updateProductResponse.success }),
  };
}