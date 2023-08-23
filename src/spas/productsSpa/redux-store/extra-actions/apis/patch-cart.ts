import { Iitem } from "@/model/server/Item";
import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";

export interface PatchCartParams {
  email: string;
  products: Iitem[];
}

export interface PatchCartResponseData {
  message?: string;
  error?: string;
}

export default apiActionBuilder<
PatchCartParams,
  ApiSuccessAction<PatchCartResponseData, PatchCartParams>
>("apis/cart/patch", (params: PatchCartParams) => ({
  payload: apiRequestPayloadBuilder<PatchCartParams>({
    path: "/api/patch-cart",
    method: HttpMethod.PATCH,
    body: {
      email: params.email,
      products: params.products,
    },
  }),
}));
