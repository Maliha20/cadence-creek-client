import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useCart from '../../Hooks/useCart';
import CheckPayment from '../../CheckPayment/CheckPayment';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, course)=> sum + course.price, 0)
  const price = parseFloat(total.toFixed(2))
  return (
       <div>
            <h3 className='text-3xl my-16 text-center font-bold text-blue-900'>Pay Now</h3>
          <Elements stripe={stripePromise}>
           <CheckPayment cart={cart} price={price}></CheckPayment>
          </Elements>
          
       </div>
    );
};

export default Payment;
