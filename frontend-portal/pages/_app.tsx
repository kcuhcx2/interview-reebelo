import { Header } from '@/components'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { OrdersContext } from '@/context/ordersContext'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

    const [orders, setOrders] = useState([]);
  return (
    <div>
        <OrdersContext.Provider value={{ orders, setOrders}}>
            <Header />
            <Component {...pageProps} />
        </OrdersContext.Provider>
    </div>
  )
}