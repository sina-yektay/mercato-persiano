import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";

export interface PostResetPasswordParams {
  email: string;
}

export interface PostCustomerResponseData {
  message?: string;
  error?: string;
}

export default apiActionBuilder<
  PostResetPasswordParams,
  ApiSuccessAction<PostCustomerResponseData, PostResetPasswordParams>
>("apis/reset-password/post", (params: PostResetPasswordParams) => ({
  payload: apiRequestPayloadBuilder<PostResetPasswordParams>({
    path: "/api/post-reset-password",
    method: HttpMethod.POST,
    body: {
      email: params.email,
    },
  }),
}));
