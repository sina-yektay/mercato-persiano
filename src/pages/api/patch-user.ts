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
  try {
    await connectToDatabase();
    var hashedPassword;
    if (req.method === "PATCH") {
      if (!req.body) {
        return res.status(400).json({ error: "Data is missing" });
      } else {
        const { lastEmail, email, password, address, phone, name } = req.body;

        const userExists = await User.findOne({ email: lastEmail });

        if (!userExists) {
          return res.status(409).json({ error: "User Does Not Exist" });
        } else {
          if (password.length < 6 && password.length !== 0) {
            return res
              .status(409)
              .json({ error: "Password should be 6 character long" });
          } else {
            if (password.length !== 0) {
              hashedPassword = await hash(password, 12);

              const user = await userExists.patch({
                email,
                password: hashedPassword,
                address,
                phone,
                name,
                isAdmin: false,
              });
            } else {
              const user = await userExists.patch({
                email,
                address,
                phone,
                name,
                isAdmin: false,
              });
            }

            return res.status(200).json({
              status: true,
              message: "Data modified correctly",
            });
          }
        }
      }
    } else {
      res.status(405).json({ status: false, error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(409).json({
      status: false,
      error: "Error Occured in updating your data, please try again",
    });
  }
}
