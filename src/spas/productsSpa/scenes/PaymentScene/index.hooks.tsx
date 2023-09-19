import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store/slices";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

export const usePaymentScene = () => {
  const user = useSelector(selectors.getUser);
  const products = useSelector(selectors.getProductsInCart);
  const [clientSecret, setClientSecret] = useState("");
  const [isPaymentValid, setIsPaymentValid] = useState(false);
  const useHandleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const stripe = useStripe();
    const elements = useElements();
    dispatch(actions.changeBackDropState({ backDropState: true }));
    if (!stripe || !elements) {
      return;
    }
    const cardElement = await elements.getElement(CardElement);
    if (!cardElement) {
      console.log("CardElement is not ready yet.");
      return;
    }
    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        console.log("error occured in the payment process");
        dispatch(actions.changeBackDropState({ backDropState: false }));
      } else {
        console.log("payment done successfully");
        dispatch(
          actions.patchCart.request({
            email: user.email,
            products: products.map((item) => ({
              productName: item.productName,
              productId: item.productId,
              price: item.price,
              quantity: item.orderQuantity,
              description: item.description,
              image: item.productImage,
            })),
          })
        );
      }
    } catch {
      console.log("error occured in the payment process");
    }
  };
  const paymentAmount = useSelector(selectors.getAmount);
  const dispatch = useDispatch();

  const handlePaymentChange = (event: any) => {
    setIsPaymentValid(event.complete);
  };

  useEffect(() => {
    dispatch(actions.changeRoute({ index: false }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.changeBackDropState({ backDropState: true }));
    axios
      .get(`/api/get-client-secret?amount=${paymentAmount}`)
      .then((response) => {
        setClientSecret(response.data.clientSecret);
        dispatch(actions.changeBackDropState({ backDropState: false }));
      })
      .catch((error) => {
        console.error("Error fetching clientSecret:", error);
      });
  }, [dispatch, paymentAmount]);

  return { useHandleSubmit, clientSecret, handlePaymentChange, isPaymentValid };
};
