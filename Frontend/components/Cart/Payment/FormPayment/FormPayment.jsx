import { size, forEach, lowerCase } from 'lodash';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useCart from '../../../../hooks/useCart';
import { paymentCartApi } from '../../../../api/cart';
import { checkStockProductApi } from '../../../../api/products';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function FormPayment({ products, address, setReloadCart }) {
   const router = useRouter();
   const stripe = useStripe();
   const elements = useElements();
   const { auth, logout } = useAuth();
   const { clearProductsCart, removeProductCart } = useCart();
   const [loading, setLoading] = useState(false);
   const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      let price = 0;
      forEach(products, (product) => {
         price += product.price;
      });
      setTotalPrice(price);
   }, [products]);

   const removeProduct = (product) => {
      removeProductCart(product);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (totalPrice <= 20) {
         toast.warning('El monto minimo de compra es de $20');
      } else {
         setLoading(true);
         if (!stripe && !elements) return null;

         const cardElement = elements.getElement(CardElement);
         const result = await stripe.createToken(cardElement);

         if (result.error) {
            toast.error(result.error.message);
         } else {
            let stock = [];
            for await (const { _id, url, title } of products) {
               const result = await checkStockProductApi(_id);
               if (!result) {
                  stock.push({ url, title });
               }
            }
            if (size(stock) > 0) {
               forEach(stock, (product) => {
                  toast.error(
                     `El producto ${lowerCase(product.title)} no tiene stock`
                  );
                  removeProduct(product.url);
               });
               setReloadCart(true);
               setLoading(false);
               return null;
            } else {
               const response = await paymentCartApi(
                  result.token,
                  products,
                  auth.idUser,
                  address,
                  logout
               );
               if (size(response) > 0 && response.statusCode !== 500) {
                  toast.success('Pago realizado con éxito');
                  clearProductsCart();
                  router.push('/orders');
                  return null;
               } else {
                  toast.error('Error al realizar el pago');
               }
            }
            setLoading(false);
         }
      }
   };

   return (
      <form className="form-payment" onSubmit={handleSubmit}>
         <CardElement />
         <Button type="submit" loading={loading} disabled={!stripe}>
            Pagar
         </Button>
      </form>
   );
}
