import { size, forEach } from 'lodash';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useCart from '../../../../hooks/useCart';
import { paymentCartApi } from '../../../../api/cart';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getMeApi } from '../../../../api/user';

export default function FormPayment({ products, address, setReloadCart }) {
   const router = useRouter();
   const stripe = useStripe();
   const elements = useElements();
   const { auth, logout } = useAuth();
   const { clearProductsCart } = useCart();
   const [loading, setLoading] = useState(false);
   const [totalPrice, setTotalPrice] = useState(0);
   const [user, setUser] = useState(undefined);

   useEffect(() => {
      (async () => {
         const response = await getMeApi(logout);
         setUser(response);
      })();
   }, [auth]);

   useEffect(() => {
      let price = 0;
      forEach(products, (product) => {
         price += product.price;
      });
      setTotalPrice(price);
   }, [products]);

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
            const response = await paymentCartApi(
               result.token,
               products,
               address,
               user,
               logout
            );
            if (size(response) > 0 && response.statusCode !== 500) {
               toast.success('Pago realizado con éxito');
               clearProductsCart();
               router.push('/orders');
               setLoading(false);
            } else {
               toast.error('Error al realizar el pago');
            }
            setLoading(false);
         }
      }
   };

   if (!user) {
      return null;
   }

   return (
      <form className="form-payment" onSubmit={handleSubmit}>
         <CardElement />
         <Button type="submit" loading={loading} disabled={!stripe}>
            Pagar
         </Button>
      </form>
   );
}
