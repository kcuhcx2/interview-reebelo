import {createProduct,updateProduct } from '../service/productService';
import {notifyOps} from "../service/opsService";

export const createProductsHandler = async (req: any) => {
  await createProduct(req.body);
  notifyOps(req.body);
}

export const updateProductsHandler = async (req: any) => {
  await updateProduct(req.body);
  notifyOps(req.body);
}

