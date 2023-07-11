import { connectToDatabase } from "@/dbConfig";
import { Item } from "@/model/server/Item";
import type { NextApiRequest, NextApiResponse } from 'next'

type requestResponseData = {
  error?: string,
  success?:boolean,
  message?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<requestResponseData>
) {


  


if(req.method === "POST"){
    console.log("001100110011001100110011001100110011001100110011001100110011")
    if (!req.body) {
        return res.status(400).json({ error: "Data is missing" });
      } else{
        const { productId ,productName , quantity, price, image } = req.body;
        console.log("£££££££££££££££££££££££££££££")
        console.log(req.body)
        await connectToDatabase();
        const productExists = await Item.findOne({ productId });
        console.log("777777RRRRRRRRRRRRRRRRRRR7777777777RRRRRRRRRRR")
        if (productExists) {
            return res.status(409).json({error:"Product Already Exists"});
          }else{


            const item = await Item.insertOne({productName ,productId , quantity, price, image})


            return res.status(201).json({
                success: true,
                message: "user created correctly",
              });

          }
      }
}else{
    res.status(405).json({ error: "Method Not Allowed" });  
}


}
