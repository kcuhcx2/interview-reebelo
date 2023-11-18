import * as yup from "yup";

export const updateOrderStatusValidationSchema = yup.object().shape({
  orderId: yup.string().uuid().required(),
  status: yup.string().required(),
});

export const updateOrderShippingValidationSchema = yup.object().shape({
  orderId: yup.string().uuid().required(),
  tracking: yup.object().shape({
    companyId: yup.string().required(),
    number: yup.string().required(),
  }),
});

export const createProductValidationSchema = yup.object().shape({
  quantity: yup.number().required(),
  price: yup.number().required(),
});

export const updateProductValidationSchema = yup.object().shape({
  quantity: yup.number().required(),
  price: yup.number().required(),
  productId: yup.string().uuid().required(),
});

export interface ResultType<T = undefined> {
  result?: T
  status: number
  success: boolean,
}

export type UpdateOrderStatusRequest = {
  status: OrderStatus,
  orderId: string,
}

export type UpdateOrderStatus = {
  status: OrderStatus,
  orderId: string,
}

export enum OrderStatus {
  PROCESSING = 'PROCESSING',
  CANCELLED = 'CANCELLED',
  DELIVERED = 'DELIVERED',
}

type ShippingInfo = {
  companyId: string
  number: string
}

export type UpdateOrderShippingRequest = {
  tracking?: ShippingInfo
  orderId: string
}

export type UpdateOrderShipping = {
  tracking?: ShippingInfo
  orderId: string
}

export type CreateProductRequest = {
  quantity: number
  price: number;
}

export type CreateProduct = {
  quantity: number
  price: number;
}

export type UpdateProductRequest = {
  quantity: number,
  price: number,
  productId: string,
}

export type UpdateProduct = {
  quantity: number,
  price: number,
  productId: string,
}
