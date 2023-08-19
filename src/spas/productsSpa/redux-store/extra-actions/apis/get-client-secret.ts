import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";

export interface GetClientSecretParams {
  amount: number;
}

export interface GetUserResponseData {
  clientSecret: string;
}

export default apiActionBuilder<
  GetClientSecretParams,
  ApiSuccessAction<GetUserResponseData, GetClientSecretParams>
>("apis/client-secret/get", (params: GetClientSecretParams) => ({
  payload: apiRequestPayloadBuilder<GetClientSecretParams>({
    path: "/api/get-client-secret",
    method: HttpMethod.GET,
    query: { amount: params.amount },
  }),
}));
