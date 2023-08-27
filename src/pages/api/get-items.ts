import { connectToDatabase } from "@/dbConfig";
import { Item } from "@/model/server/Item";
import type { NextApiRequest, NextApiResponse } from "next";

type requestResponseData = {
  error?: string;
  success?: boolean;
  message?: string;
  data?: Item[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<requestResponseData>
) {
  try {
    if (req.method === "GET") {
      await connectToDatabase();

      const items = await Item.findMany();
      return res.status(201).json({
        success: true,
        message: "Products received correctly",
        data: items,
      });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return res
      .status(500)
      .json({ success: false, error: "Error fetching products" });
  }
}
