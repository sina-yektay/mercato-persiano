import { Action } from "@reduxjs/toolkit";
import { takeEvery, fork, take, put, delay, race, call } from "redux-saga/effects";
import { ApiRequestAction } from "../../extra-actions/apis/api-builder";
import axios, { AxiosError, AxiosResponse } from "axios";
import { actions } from "..";








function* ajaxTask(
  requestAction: ApiRequestAction<any>,
): any {
  const { type, payload } = requestAction;
  const { params } = payload;
  const { path, method, body, query } = params;
  const api = type.replace("/request", "");

  yield put(
    actions.setApiLoading({
      api,
      isLoading: true,
    })
  );


  try {
    const response: AxiosResponse = yield call<any>(axios, {
      method,
      url: path,
      data: body,
      params: query,
    });
    
   console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
   console.log(response.data)



      yield put({
        type: `${api}/success`,
        payload: {
          status: response?.status,
          data: response?.data,
        },
      });
      yield put(
        actions.setApiLoading({
          api,
          isLoading: false,
        })
      );

  } catch (e: any) {
    const axiosError = e as AxiosError<any>;
      const status = axiosError?.response?.status || 500;
      const message: string =
        axiosError?.response?.data?.message || axiosError.message;

        yield put(
          actions.setFeedback({isOpen: true, message: axiosError?.response?.data?.message, type: "warning"})
        );
      yield put({
        type: `${api}/fail`,
        payload: {
          status,
          message,
        },
      });
      yield put(
        actions.setApiLoading({
          api,
          isLoading: false,
        })
      );
    
  }
}
















export function* ajaxRequestSaga() {
  yield takeEvery(
    (action: Action) => /^apis\/(.*?)\/request$/.test(action.type),
    function* (requestAction: ApiRequestAction<any>) {
      try {
        console.log(
          "0p0p0p0p0p0pp0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0pp"
        );
        const { type } = requestAction;
        const api = type.replace("/request", "");
        const task: any = yield fork(ajaxTask, requestAction);
        let exit = false;

        while (!exit) {
          const resultAction: Action = yield take([
            `${api}/success`,
            `${api}/fail`,
            `${api}/cancel`,
          ]);

          exit = true;
        }
      } catch (e) {
        console.error(e);
      }
    }
  );
}






export default ajaxRequestSaga;
