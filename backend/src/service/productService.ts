import productsModel from '../models/products'
export const updateProduct = async (product: any) => {
  return productsModel.updateProduct(product)
}

export const createProduct = async (product: any) => {
    return productsModel.createProduct(product)
}