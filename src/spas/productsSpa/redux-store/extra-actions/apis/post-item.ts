import { Iitem } from "@/model/client/item";
import { ApiSuccessAction, HttpMethod, apiActionBuilder, apiRequestPayloadBuilder } from "./api-builder";














export interface PostItemParams {
   productId: string;
   productName: string;
   price: string;
   quantity: number;
   image: string;
  }


  export interface PostItemResponseData {
    item: Iitem;
  }



  export default apiActionBuilder<
  PostItemParams,
  ApiSuccessAction<PostItemResponseData, PostItemParams>
//   ApiFailAction<PostArticlesParams>
>(
  "apis/articles/post",
  (params: PostItemParams) => ({
    payload: apiRequestPayloadBuilder<PostItemParams>(
      {
        path: "/articles",
        method: HttpMethod.POST,
        body: {
            productId: params.productId,
            productName: params.productName,
            price: params.price,
            quantity: params.quantity,
            image: params.image,
        },
      },
    ),
  })
);