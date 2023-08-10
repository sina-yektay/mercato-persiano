import { Iitem } from "@/model/client/item";
import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";

export interface GetItemParams {}

export interface GetItemResponseData {
  items: Iitem[];
}

export default apiActionBuilder<
  GetItemParams,
  ApiSuccessAction<GetItemResponseData, GetItemParams>
>("apis/articles/post", (params: GetItemParams) => ({
  payload: apiRequestPayloadBuilder<GetItemParams>({
    path: "/api/get-item",
    method: HttpMethod.GET,
  }),
}));
