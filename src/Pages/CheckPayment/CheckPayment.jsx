
import React from "react";
import useAuth from "../Hooks/useAuth";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import './CheckPayment.css'

const CheckPayment = ({ cart, price }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
      setCardError("");
    }

    setProcessing(true);

    if (clientSecret) {
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });

      if (confirmError) {
        setCardError(confirmError.message);
      }

      console.log("payment intent", paymentIntent);
      setProcessing(false);

      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          date: new Date(),
          status: "service pending",
          courseItem: cart.map((item) => item.courseId),
          quantity: cart.length,
          cartItem: cart.map((item) => item._id),
          courseName: cart.map((item) => item.className),
        };

        axiosSecure.post("/payments", payment).then((res) => {
          console.log(res.data);
          
        });
      }
    }
  };

  return (
    <>
      <div className="bg-blue-100/30 rounded p-20 items-center flex flex-col justify-center align-middle">
        <form className="w-full" onSubmit={handleSubmit}>
          <CardElement className="input-pay" />
          <button
            className="mt-4 btn rounded-md px-10 btn-info"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </form>
      </div>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && <p className="text-green-600">Transaction completed</p>}
    </>
  );
};

export default CheckPayment;
