import {createDbProduct, updateDbProduct} from "../repository";


const mapProduct = (dbProduct: any) => {
  const { productId, quantity, price } = dbProduct
  return {
    productId,
    quantity,
    price
  }
}

const createProduct = async (product: any) => {
  const response = await createDbProduct(product);
  return mapProduct(response);
}

const updateProduct = async (product: any) => {
  const response = await updateDbProduct(product);
  return mapProduct(response);
}

export default {
  createProduct,
  updateProduct,
}