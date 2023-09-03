import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { getParameterFromSSM } from "@/helper";

type responseType = {
  message?: string;
  error?: string;
  clientSecret?: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseType>
) {
  if (req.method === "GET") {
    const STRIPE_SECRET_KEY = await getParameterFromSSM(
      "TORINASIA_STRIPE_SECRET_KEY"
    );

    const stripe = new Stripe(STRIPE_SECRET_KEY as string, {
      apiVersion: "2022-11-15",
    });
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
        return res
          .status(200)
          .json({ clientSecret: paymentIntent.client_secret });
      }
    } catch {
      return res.status(500).json({ error: "Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
