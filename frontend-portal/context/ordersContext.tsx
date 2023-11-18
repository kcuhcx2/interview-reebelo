import { createContext } from "react";

export const OrdersContext = createContext({
    orders: [],
    setOrders: (orders: any) => {}
});