import { connectToDatabase } from "@/dbConfig";
import { Item } from "@/model/server/Item";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    await connectToDatabase();
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    } else {
      const {
        productName,
        productId,
        price,
        quantity,
        description,
        isDiscounted,
      } = req.body;
      const product = await Item.findOne({ productId: productId });
      if (!product) {
        res.status(409).json({ error: "Product not found" });
      } else {
        await product.patch({
          productName,
          productId,
          price,
          quantity,
          description,
          isDiscounted,
        });
        return res.status(200).json({ message: "Product modified correctly" });
      }
    }
  } else {
    return res.status(405).json({ error: "Methos not allowed" });
  }
}
