import { QuantityDropdown } from "@/components";
import Modal from "@/components/Modal";
import { OrdersContext } from "@/context/ordersContext";
import Image from "next/image";
import { useContext, useState } from "react";

type ProductType = {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
}

const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]

export default function OrdersPage(){

    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<{productId: string, quantity: number} | null>(null)
    const { orders, setOrders } = useContext(OrdersContext);

    const handleProductClick = (product: ProductType, quantity: number) => {
        setSelectedProduct({productId: product.id.toString(), quantity});
        setOpen(true);
    }

    const handlePruchaseConfirm = () => {
        setOpen(false);
        // Do fetch request here
        // Lets assume the request was successful
        console.log('selectedProduct is -> ', selectedProduct);
        // Sotre the order locally raether than refetching the order constantly
        setOrders([...orders, selectedProduct])
        setSelectedProduct(null);
    }

      
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <Modal isOpen={open} onClose={() => setOpen(false)} onConfirm={handlePruchaseConfirm} />
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">You have {orders.length} Orders</h1>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image // Using nextjs Image component to help with optimisations
                    width={300}
                    height={300}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <div>
                    <QuantityDropdown numberOfAvailableProducts={10} onConfirm={(quantity) => handleProductClick(product, quantity)}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};