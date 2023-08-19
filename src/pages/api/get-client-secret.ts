import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

type responseType = {
  message?: string;
  error?: string;
};

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      if (!req.query) {
        return res.status(400).json({ error: "Data is missing" });
      } else {
        const { amount } = req.query;
        const priceInCent = Number(amount) * 100;
        const paymentIntent = await stripe.paymentIntents.create({
          amount: priceInCent,
          currency: "eur",
          description: "Shopping Payment",
        });
        res.status(200).json({ clientSecret: paymentIntent.client_secret });
      }
    } catch {
      res.status(500).json({ error: "Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
