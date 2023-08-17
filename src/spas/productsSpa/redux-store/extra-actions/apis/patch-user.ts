import { Iitem } from "@/model/client/item";
import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";
import { IUser } from "@/model/server/User";

export interface PatchUserParams {
  lastEmail: string;
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

export interface PatchUserResponseData {
  message?: string;
  error?: string;
}

export default apiActionBuilder<
  PatchUserParams,
  ApiSuccessAction<PatchUserResponseData, PatchUserParams>
>("apis/user/patch", (params: PatchUserParams) => ({
  payload: apiRequestPayloadBuilder<PatchUserParams>({
    path: "/api/patch-user",
    method: HttpMethod.PATCH,
    body: {
      lastEmail: params.lastEmail,
      email: params.email,
      password: params.password,
      name: params.name,
      address: params.address,
      phone: params.phone,
    },
  }),
}));
