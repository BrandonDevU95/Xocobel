import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_TOKEN } from '../../../utils/constants';
import FormPayment from './FormPayment';

const stripePromise = loadStripe(STRIPE_TOKEN);

export default function Payment({ products, address, billData }) {
   return (
      <div className="payment py-4">
         <div className="title">Pago</div>
         <div className="data">
            <Elements stripe={stripePromise}>
               <FormPayment
                  products={products}
                  address={address}
                  billData={billData}
               />
            </Elements>
         </div>
      </div>
   );
}
