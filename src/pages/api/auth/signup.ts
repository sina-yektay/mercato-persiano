import { connectToDatabase } from "@/dbConfig";
import { User } from "@/model/server/User";

import { hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

type responseData = {
  error?: string;
  success?: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseData>
) {
  console.log("wwwwwwwwwwwwwwwwwwwwewewewwwwwwwwwwwwwwwwwwwwwwwwwwww");

  try {
    await connectToDatabase();

    if (req.method === "POST") {
      if (!req.body) {
        return res.status(400).json({ error: "Data is missing" });
      } else {
        const { email, password, address, phone, name, isAdmin } = req.body;
        console.log(isAdmin);
        const userExists = await User.findOne({ email });

        if (userExists) {
          return res.status(409).json({ error: "User Already Exists" });
        } else {
          if (password.length < 6) {
            return res
              .status(409)
              .json({ error: "Password should be 6 character long" });
          } else {
            const hashedPassword = await hash(password, 12);

            console.log(email);
            console.log(password);

      

            const user = await User.insertOne({
              email,
              password: hashedPassword,
              address,
              phone,
              name,
              isAdmin,
            });

            return res.status(201).json({
              success: true,
              message: "user created correctly",
            });
          }
        }
      }
    } else {
      res.status(405).json({ success: false, error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res
      .status(409)
      .json({ success: false, error: "error in creating user" });
  }
}
