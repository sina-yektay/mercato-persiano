import { Iitem } from "@/model/client/item";
import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";

export interface PostItemParams {
  productId: string;
  productName: string;
  price: string;
  quantity: number;
  description: string;
  image: string;
}

export interface PostItemResponseData {
  item: Iitem;
}

export default apiActionBuilder<
  PostItemParams,
  ApiSuccessAction<PostItemResponseData, PostItemParams>
  //   ApiFailAction<PostArticlesParams>
>("apis/articles/post", (params: PostItemParams) => ({
  payload: apiRequestPayloadBuilder<PostItemParams>({
    path: "/api/post-item",
    method: HttpMethod.POST,
    body: {
      productId: params.productId,
      productName: params.productName,
      price: params.price,
      quantity: params.quantity,
      description: params.description,
      image: params.image,
    },
  }),
}));
