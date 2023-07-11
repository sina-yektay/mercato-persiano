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
  if (req.method === "GET") {
    await connectToDatabase();
    const items = await Item.findMany();
    return res.status(201).json({
      success: true,
      message: "products received correctly",
      data: items,
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
