import {createDbOrder, updateDbOrderShipping, updateDbOrderStatus} from "../repository";


const mapOrder = (order: any) => {
  return {
    orderId: order.orderId,
    status: order.status,
    tracking: order.tracking,
  }
}

export const createOrder = async (order: any) => {
  const dbOrder = await createDbOrder(order);
  return mapOrder(dbOrder);
}

const updateOrderStatus = async (order: any) => {
  const dbOrder = await updateDbOrderStatus(order);
  return mapOrder(dbOrder);
}

const updateOrderShipping = async (order: any) => {
  const dbOrder = await updateDbOrderShipping(order);
  return mapOrder(dbOrder);
}

export default {
  createOrder,
  updateOrderStatus,
  updateOrderShipping,
}