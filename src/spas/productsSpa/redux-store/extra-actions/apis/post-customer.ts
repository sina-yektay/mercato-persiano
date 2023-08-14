import {
  ApiSuccessAction,
  HttpMethod,
  apiActionBuilder,
  apiRequestPayloadBuilder,
} from "./api-builder";

export interface PostCustomerParams {
  email: string;
  password: string;
  address: string;
  phone: string;
  name: string;
  isAdmin: boolean;
}

export interface PostCustomerResponseData {
  message?: string;
  error?: string;
}

export default apiActionBuilder<
  PostCustomerParams,
  ApiSuccessAction<PostCustomerResponseData, PostCustomerParams>
>("apis/customers/post", (params: PostCustomerParams) => ({
  payload: apiRequestPayloadBuilder<PostCustomerParams>({
    path: "/api/auth/signup",
    method: HttpMethod.POST,
    body: {
      email: params.email,
      password: params.password,
      address: params.address,
      phone: params.phone,
      name: params.name,
      isAdmin: params.isAdmin,
    },
  }),
}));
