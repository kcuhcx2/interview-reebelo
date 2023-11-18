import orderModel from '../models/orders';

export const createOrder = async (order: any) => {
  return orderModel.createOrder(order);
}

export const updateOrderStatus = async (order: any) => {
  return orderModel.updateOrderStatus(order);
}

export const updateOrderShipping = async (order: any) => {
  return orderModel.updateOrderShipping(order);
}
