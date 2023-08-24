import { connectToDatabase } from "@/dbConfig";
import { User } from "@/model/server/User";
import { hash } from "bcryptjs";
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
      await connectToDatabase();
      if (!req.body) {
        return res.status(400).json({ error: "Data is missing" });
      }
      const { token, password } = req.body;
      const user = await User.findOne({ resetToken: token });

      if (!user) {
        return res.status(409).json({ error: "You are not allowed to modify the password with this link" });
      } else {
        if (password.length < 6 && password.length !== 0) {
          return res
            .status(409)
            .json({ error: "Password should be 6 character long" });
        } else {
          const hashedPassword = await hash(password, 12);
          await user.patch({ password: hashedPassword, resetToken: "" });

          return res.status(201).json({
            status: true,
            message: "Password modified correctly",
          });
        }
      }
    } catch (error) {
      return res.status(409).json({
        status: false,
        error: "Error Occured in updating your password, please try again",
      });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
