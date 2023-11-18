import { ROUTE_NAME } from '@/routes';
import { useRouter } from 'next/router';


export function Header() {
  const router = useRouter();
  const isOnHomePage = router.pathname === '/';
  const isOnOpsPage = router.pathname.includes('ops-portal');
  const isOnOrdersPage = router.pathname.includes('orders');

  return (
    <div>
        { !isOnHomePage && 
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className={`text-sm font-semibold leading-6 text-gray-900 cursor-pointer ${isOnHomePage ? 'underline' : ''}`}
                    onClick={() => router.push(ROUTE_NAME.HOME_PAGE)}>
                        Home
                    </div>
                    <div className={`text-sm font-semibold leading-6 text-gray-900 cursor-pointer ${isOnOrdersPage ? 'underline' : ''}`}
                    onClick={() => router.push(ROUTE_NAME.ORDERS)}>
                        Orders
                    </div>
                    <div className={`text-sm font-semibold leading-6 text-gray-900 cursor-pointer ${isOnOpsPage ? 'underline' : ''}`}
                    onClick={() => router.push(ROUTE_NAME.OPS_PORTAL)}>
                        Ops Portal
                    </div> 
                </nav>
            </header>
        }
    </div>
    )
}
