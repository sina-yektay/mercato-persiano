import { Iitem } from "@/model/client/item";
import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";
import { IUser } from "@/model/server/User";

export interface PatchPasswordParams {
  token: string | null;
  password: string;
}

export interface PatchPasswordResponseData {
  message?: string;
  error?: string;
}

export default apiActionBuilder<
  PatchPasswordParams,
  ApiSuccessAction<PatchPasswordResponseData, PatchPasswordParams>
>("apis/password/patch", (params: PatchPasswordParams) => ({
  payload: apiRequestPayloadBuilder<PatchPasswordParams>({
    path: "/api/patch-password",
    method: HttpMethod.PATCH,
    body: {
      token: params.token,
      password: params.password,
    },
  }),
}));
