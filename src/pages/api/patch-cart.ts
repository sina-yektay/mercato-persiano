import { User } from "@/model/server/User";
import { NextApiRequest, NextApiResponse } from "next";

type responseData = {
  error?: string;
  status?: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseData>
) {
  if (req.method === "PATCH") {
    try {
      if (!req.body) {
        return res.status(400).json({ error: "Data is missing" });
      }
      const { email, products } = req.body;
      const userExists = await User.findOne({ email });
      if (!userExists) {
        return res.status(409).json({ error: "User Does Not Exist" });
      } else {
        await userExists.addCart(products);
        return res.status(200).json({ error: "Card added successfully" });
      }
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(409).json({
        status: false,
        error: "Error Occured in updating your data, please try again",
      });
    }
  } else {
    res.status(405).json({ status: false, error: "Method Not Allowed" });
  }
}
