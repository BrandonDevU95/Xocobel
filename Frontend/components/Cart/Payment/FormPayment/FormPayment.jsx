import { size } from 'lodash';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import useAuth from '../../../../hooks/useAuth';
import useCart from '../../../../hooks/useCart';
import { paymentCartApi } from '../../../../api/cart';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function FormPayment({ products, address }) {
   const { auth, logout } = useAuth();
   const stripe = useStripe();
   const elements = useElements();
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (event) => {
      event.preventDefault();
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
            auth.idUser,
            address,
            logout
         );
         if (size(response) > 0) {
            toast.success('Pago completado');
         } else {
            toast.error('Error al realizar el pago');
         }
      }

      setLoading(false);
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
