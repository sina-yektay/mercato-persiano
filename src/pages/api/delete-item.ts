import { connectToDatabase } from "@/dbConfig";
import { Item } from "@/model/server/Item";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

type responseType = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseType>
) {
  if (req.method === "DELETE") {
    if (!req.query) {
      return res.status(400).json({ error: "Data is missing" });
    } else {
      await connectToDatabase();
      const { productId } = req.query;
      const product = await Item.findOne({ productId: productId as string });
      if (!product) {
        return res.status(409).json({ error: "Product Does Not Exist" });
      } else {
        if (product._id) {
          await Item.delete(product._id);
          return res.status(204).json({});
        }
      }
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
