import { Iitem } from "@/model/client/item";
import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";

export interface GetItemParams {}

export interface GetItemResponseData {
  data: Iitem[];
}

export default apiActionBuilder<
  GetItemParams,
  ApiSuccessAction<GetItemResponseData, GetItemParams>
>("apis/items/get", (params: GetItemParams) => ({
  payload: apiRequestPayloadBuilder<GetItemParams>({
    path: "/api/get-items",
    method: HttpMethod.GET,
  }),
}));
