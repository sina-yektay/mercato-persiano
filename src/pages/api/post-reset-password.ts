import { connectToDatabase } from "@/dbConfig";
import { User } from "@/model/server/User";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { getParameterFromSSM } from "@/helper";

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
        const jwtSecret = await getParameterFromSSM("TORINASIA_JWT_SECRET");
        const resetToken = jwt.sign(
          { email },
          jwtSecret as string,
          { expiresIn: "1h" }
        );
        
        await user.patch({ resetToken });

        const clientId = await getParameterFromSSM("TORINASIA_CLIENT_ID");
        const clientSecret = await getParameterFromSSM("TORINASIA_CLIENT_SECRET");
        const refreshToken = await getParameterFromSSM("TORINASIA_GOOGLE_REFRESH_TOKEN");
        
        const oauth2Client = await new google.auth.OAuth2(
          clientId,
          clientSecret,
          refreshToken
        );
        

        oauth2Client.setCredentials({
          refresh_token: refreshToken,
        });
        const accessToken = await oauth2Client.getAccessToken();


        const transporter = await nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "torinasia.supp@gmail.com",
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refreshToken,
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
