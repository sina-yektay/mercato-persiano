import { createSlice } from "@reduxjs/toolkit";
import { sideEffectState } from "./sideEffects.interface";
import * as selectors from "./sideEffects.selectors";
import * as extraActions from "../../extra-actions";

const initialState: sideEffectState = {
  backDropState: false,
  feedBackState: false,
  feedbackMesssage: "",
  feedbackSeverity: "info",
};

type changeBackDropStateType = {
  payload: { backDropState: boolean };
};
type changeFeedbackStateType = {
  payload: { feedBackState: boolean };
};

export const sideEffectsSlice = createSlice({
  name: "sideEffect",
  initialState,
  reducers: {
    changeBackDropState: (state, { payload }: changeBackDropStateType) => {
      state.backDropState = payload.backDropState;
    },
    changeFeedbackState: (state, { payload }: changeFeedbackStateType) => {
      state.feedBackState = payload.feedBackState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.getItems.success, (state, action) => {
      state.backDropState = false;
    });
    builder.addCase(extraActions.postCustomer.success, (state, action) => {
      state.backDropState = false;
      state.feedBackState = true;
      state.feedbackMesssage = action?.payload?.data?.message || "";
      state.feedbackSeverity = "success";
    });
    builder.addCase(extraActions.postCustomer.fail, (state, action) => {
      state.backDropState = false;
      state.feedBackState = true;
      state.feedbackMesssage = action?.payload?.error || "";
      state.feedbackSeverity = "warning";
    });
    builder.addCase(extraActions.getUser.success, (state, action) => {
      state.backDropState = false;
    });
    builder.addCase(extraActions.patchUser.success, (state, action) => {
      state.backDropState = false;
      state.feedBackState = true;
      state.feedbackMesssage = action?.payload?.data.message || "";
      state.feedbackSeverity = "success";
    });
    builder.addCase(extraActions.patchUser.fail, (state, action) => {
      state.backDropState = false;
      state.feedBackState = true;
      state.feedbackMesssage = action?.payload?.error || "";
      state.feedbackSeverity = "warning";
    });
    builder.addCase(extraActions.getClientSecret.success, (state, action) => {
      state.backDropState = false;
    });
  },
});

export { selectors };
export default sideEffectsSlice.reducer;
