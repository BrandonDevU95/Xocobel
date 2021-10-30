import useCart from '../hooks/useCart';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import { getProductByUrlApi } from '../api/products';
import SummaryCart from '../components/Cart/SummaryCart';

export default function cart() {
   const { getProductsCart } = useCart();
   const products = getProductsCart();

   return !products ? <EmptyCart /> : <FullCart products={products} />;
}

function EmptyCart() {
   return (
      <BasicLayout className="cart-empty">
         <h1>Tu carrito está vacío</h1>
         <p>Añade productos al carrito para poder comprarlos</p>
      </BasicLayout>
   );
}

function FullCart({ products }) {
   const [productsData, setProductsData] = useState(null);

   useEffect(() => {
      (async () => {
         const productsTemp = [];
         for await (const product of products) {
            const data = await getProductByUrlApi(product);
            productsTemp.push(data);
         }
         setProductsData(productsTemp);
      })();
   }, []);

   return (
      <BasicLayout className="cart-full">
         <SummaryCart products={productsData} />
      </BasicLayout>
   );
}
