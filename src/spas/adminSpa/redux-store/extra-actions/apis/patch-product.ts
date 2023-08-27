import { Iitem } from "@/model/client/item";
import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";
import { IUser } from "@/model/server/User";

export interface PatchProductParams {
  productName: string;
  productId: string;
  price: string;
  quantity: number;
  description: string;
  isDiscounted: boolean;
}

export interface PatchProductResponseData {
  message?: string;
  error?: string;
}

export default apiActionBuilder<
  PatchProductParams,
  ApiSuccessAction<PatchProductResponseData, PatchProductParams>
>("apis/product/patch", (params: PatchProductParams) => ({
  payload: apiRequestPayloadBuilder<PatchProductParams>({
    path: "/api/patch-product",
    method: HttpMethod.PATCH,
    body: {
      productName: params.productName,
      productId: params.productId,
      price: params.price,
      quantity: params.quantity,
      description: params.description,
      isDiscounted: params.isDiscounted,
    },
  }),
}));
