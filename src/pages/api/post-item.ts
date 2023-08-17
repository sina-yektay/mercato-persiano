import { connectToDatabase } from "@/dbConfig";
import { Item } from "@/model/server/Item";
import type { NextApiRequest, NextApiResponse } from "next";

type requestResponseData = {
  error?: string;
  success?: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<requestResponseData>
) {
  try {
    if (req.method === "POST") {
      if (!req.body) {
        return res.status(400).json({ error: "Data is missing" });
      } else {
        const { productId, productName, quantity, description, price, image } =
          req.body;

        await connectToDatabase();

        const productExists = await Item.findOne({ productId });
        if (productExists) {
          return res.status(409).json({ error: "Product Already Exists" });
        } else {
          const item = await Item.insertOne({
            productName,
            productId,
            quantity,
            description,
            price,
            image,
          });

          return res.status(201).json({
            success: true,
            message: "Product created correctly",
          });
        }
      }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error creating product:", error);
    return res
      .status(409)
      .json({ success: false, error: "Error in creating product" });
  }
}
