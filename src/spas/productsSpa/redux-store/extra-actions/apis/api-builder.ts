import {
  Action,
  ActionCreatorWithPreparedPayload,
  PayloadActionCreator,
  PrepareAction,
  createAction,
} from "@reduxjs/toolkit";

export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

interface ApiRequestPayloadBuilderParams<T> {
  path: string;
  method: HttpMethod;
  body?: T;
  query?: any;
}

export interface ApiRequestPayloadType<T> {
  params: ApiRequestPayloadBuilderParams<T>;
}

export const apiRequestPayloadBuilder: <T>(
  params: ApiRequestPayloadBuilderParams<T>
) => ApiRequestPayloadType<T> = (params) => ({
  params,
});

interface ApiActionRequest<Args extends unknown[]>
  extends ActionCreatorWithPreparedPayload<
    Args,
    ApiRequestPayloadType<Args[0]>
  > {}

export interface ApiRequestAction<T> extends Action<string> {
  payload: ApiRequestPayloadType<T>;
}

interface ApiSuccessData<T, U> {
  status: number;
  data: T;
  prepareParams: U;
}

export interface ApiFailData<U> {
  status: number;
  message: string;
  prepareParams: U;
}

export type ApiSuccessAction<T, U = any> = PayloadActionCreator<
  ApiSuccessData<T, U>
>;

export const apiActionBuilder = <ApiRequestParams, ApiResponseAction>(
  api: string,
  prepare: PrepareAction<ApiRequestPayloadType<ApiRequestParams>>
) => {
  console.log(api);
  return {
    api,
    request: createAction(
      `${api}/request`,
      prepare
    ) as unknown as ApiActionRequest<[ApiRequestParams]>,
    success: createAction(`${api}/success`, (payload) => ({
      payload,
    })) as unknown as ApiResponseAction,
  };
};
