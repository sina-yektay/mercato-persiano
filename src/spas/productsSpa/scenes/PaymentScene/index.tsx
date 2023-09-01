import { memo } from "react";
import { usePaymentScene } from "./index.hooks";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
type PaymentSceneProps = {};

export const PaymentScene = memo(({}: PaymentSceneProps) => {
  const { handleSubmit, clientSecret, handlePaymentChange, isPaymentValid } =
    usePaymentScene();
  const stripePromise = loadStripe(
    "pk_test_51Ng0klJSYYGIFSc6gKjj7npJKZ42KmiJOkWH47c7wQhhbAw5tePFljOdyFaobOuG05jEvA0WD5JMn25lPSIlZKnE00OGzAjMSE"
  );

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} p={3}>
              <Typography
                style={{ margin: "auto", marginBottom: 20 }}
                variant="h6"
                fontWeight="bold"
              >
                Payment
              </Typography>
              <PaymentElement onChange={handlePaymentChange} />
              <Button
                style={{ width: "100px", margin: "auto", marginTop: 30 }}
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isPaymentValid}
              >
                Pay
              </Button>
            </Stack>
          </form>
        </Elements>
      )}
    </>
  );
});
