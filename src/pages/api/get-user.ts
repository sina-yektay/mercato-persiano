import { connectToDatabase } from "@/dbConfig";
import { User } from "@/model/server/User";
import type { NextApiRequest, NextApiResponse } from "next";

type requestResponseData = {
  error?: string;
  success?: boolean;
  message?: string;
  data?: User;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<requestResponseData>
) {
  try {
    if (req.method === "GET") {
      if (!req.query) {
        return res.status(400).json({ error: "Data is missing" });
      } else {
        const { email } = req.query as { email: string };
        await connectToDatabase();
        const user = await User.findOne({ email: email });
        console.log(user);
        return res.status(201).json({
          success: true,
          message: "User received correctly",
          data: user || undefined,
        });
      }
    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return res
      .status(500)
      .json({ success: false, error: "Error fetching the user" });
  }
}
