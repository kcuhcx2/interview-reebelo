import * as yup from "yup";

export const createOrdersValidationSchema = yup.object().shape({
  productId: yup.string().uuid().required(),
  quantity: yup.number().min(1).required(),
});

export type Order = {
  productId: string,
  quantity: string,
}

export type OrderRequest = {
  productId?: string,
  quantity?: string,
}

export interface ResultType<T = undefined> {
  result?: T
  status: number
  success: boolean,
}