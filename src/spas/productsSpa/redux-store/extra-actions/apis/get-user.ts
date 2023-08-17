import { Iitem } from "@/model/client/item";
import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";
import { IUser } from "@/model/server/User";

export interface GetUserParams {
  email: string;
}

export interface GetUserResponseData {
  data: IUser;
}

export default apiActionBuilder<
  GetUserParams,
  ApiSuccessAction<GetUserResponseData, GetUserParams>
>("apis/user/get", (params: GetUserParams) => ({
  payload: apiRequestPayloadBuilder<GetUserParams>({
    path: "/api/get-user",
    method: HttpMethod.GET,
    query: { email: params.email },
  }),
}));
