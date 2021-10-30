import { size } from 'lodash';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import useAuth from '../../../../hooks/useAuth';
import useCart from '../../../../hooks/useCart';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function FormPayment({ products, address }) {
   const handleSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <form className="form-payment" onSubmit={handleSubmit}>
         <CardElement />
         <Button type="submit">Pagar</Button>
      </form>
   );
}
