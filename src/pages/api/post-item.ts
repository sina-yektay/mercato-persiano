import { connectToDatabase } from "@/dbConfig";
import { getParameterFromSSM } from "@/helper";
import { Item } from "@/model/server/Item";
import type { NextApiRequest, NextApiResponse } from "next";
import { S3 } from "aws-sdk";
import multer from "multer";

type requestResponseData = {
  error?: string;
  success?: boolean;
  message?: string;
};
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => cb(null, true),
});
import { Request, Response } from "express";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<requestResponseData>
) {
  try {
    if (req.method === "POST") {
      const expressReq = req as unknown as Request;
      const expressRes = req as unknown as Response;
      upload.single("image")(expressReq, expressRes, async function (error) {
        if (error instanceof multer.MulterError) {
          return res.status(400).json({ error: error.message });
        } else if (error) {
          console.log(error);
          return res
            .status(500)
            .json({ error: "An error occurred while processing the file." });
        }

        const uploadedImage = expressReq.file;
        if (!req.body) {
          return res.status(400).json({ error: "Data is missing" });
        } else {
          const {
            productId,
            productName,
            quantity,
            isDiscounted,
            description,
            price,
          } = req.body;
          const isDiscountedBool = isDiscounted === "true";
          const quantityNumber = parseInt(quantity, 10);
          await connectToDatabase();
          const productExists = await Item.findOne({ productId });
          if (productExists) {
            return res.status(409).json({ error: "Product Already Exists" });
          } else {
            const ACCESS_ID = await getParameterFromSSM(
              "TORINASIA_AWS_ACCESS_KEY_ID"
            );
            const SECRET_ACCESS = await getParameterFromSSM(
              "TORINASIA_AWS_SECRET_ACCESS_KEY"
            );
            const REGION = await getParameterFromSSM("TORINASIA_AWS_REGION");

            var imageUrl: string;
            const s3 = new S3({
              accessKeyId: ACCESS_ID,
              secretAccessKey: SECRET_ACCESS,
              region: REGION,
            });

            const fileName = uploadedImage?.originalname;
            const params = {
              Bucket: "sina9612-bucket",
              Key: fileName as string,
              Body: uploadedImage?.buffer,
              ContentType: "image/jpeg",
              ContentDisposition: "inline",
            };

            try {
              const { Location } = await s3.upload(params).promise();
              imageUrl = Location;
            } catch (error) {
              console.error("Error uploading file:", error);
              throw error;
            }

            const item = await Item.insertOne({
              productName,
              productId,
              quantity: quantityNumber,
              isDiscounted: isDiscountedBool,
              description,
              price,
              image: imageUrl,
            });

            return res.status(201).json({
              success: true,
              message: "Product created correctly",
            });
          }
        }
      });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error creating product:", error);
    return res
      .status(409)
      .json({ success: false, error: "Error in creating product" });
  }
}
