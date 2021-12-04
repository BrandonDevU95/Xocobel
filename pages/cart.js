import useCart from '../hooks/useCart';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import { getProductByUrlApi } from '../api/products';
import SummaryCart from '../components/Cart/SummaryCart';
import ShippingAddress from '../components/Cart/ShippingAddress';
import Payment from '../components/Cart/Payment';
import Seo from '../components/Seo';
import { Container } from 'semantic-ui-react';

export default function Cart() {
   const { getProductsCart } = useCart();
   const products = getProductsCart();

   return !products ? <EmptyCart /> : <FullCart products={products} />;
}

function EmptyCart() {
   return (
      <BasicLayout className="cart-empty">
         <Seo title="XOCOBEL | MIS COMPRAS" />
         <Container fluid className="cart-empty-container">
            <h1>Tu carrito está vacío</h1>
            <p>Añade productos al carrito para poder comprarlos</p>
         </Container>
      </BasicLayout>
   );
}

function FullCart({ products }) {
   const [address, setAddress] = useState(null);
   const [reloadCart, setReloadCart] = useState(false);
   const [productsData, setProductsData] = useState(null);

   useEffect(() => {
      (async () => {
         const productsTemp = [];
         let i = 0;
         for await (const product of products) {
            const data = await getProductByUrlApi(product.product);
            data = {
               ...data,
               amount: product.amount,
               priceDiscount: 0,
               totalPrice: 0,
            };
            data.priceDiscount = parseFloat(
               (
                  data.price -
                  Math.floor(data.price * data.discount) / 100
               ).toFixed(2)
            );
            data.totalPrice = parseFloat(
               (data.priceDiscount * data.amount).toFixed(2)
            );
            i++;
            productsTemp.push(data);
         }
         setProductsData(productsTemp);
      })();
      setReloadCart(false);
   }, [reloadCart]);

   if (!productsData) return null;

   return (
      <BasicLayout className="cart-full">
         <Seo
            title={`XOCOBEL | MI CARRITO: ${
               products !== null || products ? products?.length : 0
            }`}
         />
         <section className="py-4">
            <div className="cart-full-container container">
               <SummaryCart
                  products={productsData}
                  reloadCart={reloadCart}
                  setReloadCart={setReloadCart}
               />
               <ShippingAddress setAddress={setAddress} />
               {address && (
                  <Payment
                     products={productsData}
                     address={address}
                     setReloadCart={setReloadCart}
                  />
               )}
            </div>
         </section>
      </BasicLayout>
   );
}
