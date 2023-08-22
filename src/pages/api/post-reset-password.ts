import { connectToDatabase } from "@/dbConfig";
import { User } from "@/model/server/User";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { google } from "googleapis";

type requestResponseData = {
  error?: string;
  status?: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<requestResponseData>
) {
  if (req.method === "POST") {
    try {
      if (!req.body) {
        return res.status(400).json({ error: "Data is missing" });
      } else {
        const { email } = req.body;
        await connectToDatabase();
        const user = await User.findOne({ email: email });
        if (!user) {
          return res
            .status(400)
            .json({ error: "You are not registered, signup please" });
        }
        const resetToken = jwt.sign(
          { email },
          process.env.NEXT_PUBLIC_JWT_SECRET as string,
          { expiresIn: "1h" }
        );
        await user.patch({ resetToken });

        const oauth2Client = await new google.auth.OAuth2(
          process.env.NEXT_PUBLIC_CLIENT_ID,
          process.env.NEXT_PUBLIC_CLIENT_SECRET,
          process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
        );

        oauth2Client.setCredentials({
          refresh_token: process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN,
        });

        const accessToken = await oauth2Client.getAccessToken();

        const transporter = await nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "torinasia.supp@gmail.com",
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            refreshToken: process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN,
            accessToken: accessToken,
          },
        } as any);

        // const resetLink = `https://your-app-url.com/reset-password?token=${token}`;
        const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

        const mailOptions: nodemailer.SendMailOptions = {
          from: "torinasia.supp@gmail.com",
          to: email,
          subject: "Password Reset",
          text: `Click the following link to reset your password: ${resetLink}`,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({
          message: "You will shortly receive an email for password recovery.",
        });
      }
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ error: "Email sending failed." });
    }
  } else {
    return res.status(405).json({ status: false, error: "Method Not Allowed" });
  }
}
