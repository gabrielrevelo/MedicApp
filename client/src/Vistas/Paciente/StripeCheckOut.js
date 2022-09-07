import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from "./CheckOutForm"
const stripePromise = loadStripe('pk_test_51Lf84jLDOm9knXDHOZk52E13D4VzljEMOHTdPnNpsc9cvlbwxtgah44IxdLnEDOg1UAr7ZlewBgiNmWCgSGE9Tcs00aGyOwtnE')

function Stripe(precio) {
    return (
      <div>
     
        <Elements stripe={stripePromise}>
          <CheckOutForm precio={precio} />
        </Elements>
      </div>
    );
  }
  
  export default Stripe;