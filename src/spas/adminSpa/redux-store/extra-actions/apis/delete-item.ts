import { Iitem } from "@/model/server/Item";
import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";

export interface DeleteItemParams {
  productId: string;
}

export interface DeleteItemResponseData {
  message: string;
  error: string;
}

export default apiActionBuilder<
  DeleteItemParams,
  ApiSuccessAction<DeleteItemResponseData, DeleteItemParams>
>("apis/items/delete", (params: DeleteItemParams) => ({
  payload: apiRequestPayloadBuilder<DeleteItemParams>({
    path: "/api/delete-item",
    method: HttpMethod.DELETE,
    query: {
      productId: params.productId,
    },
  }),
}));
