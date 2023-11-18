import { updateOrderShipping, createOrder, updateOrderStatus } from '../service/ordersService';
import {notifyOps} from "../service/opsService";

export const updateOrderStatusHandler = async (req: any) => {
  await updateOrderStatus(req.body)
  notifyOps(req.body);
}

export const updateOrderShippingHandler = async (req: any) => {
  await updateOrderShipping(req.body)
  notifyOps(req.body);
}

export const createOrderHandler = async (req: any) => {
  await createOrder(req.body)
  notifyOps(req.body);
}