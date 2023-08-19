import { createSlice } from "@reduxjs/toolkit";
import { paymentSliceType } from "./payment.interface";
import * as extraActions from "../../extra-actions";
import * as selectors from "./payment.selectors";
const initialState: paymentSliceType = {
  clientSecret: "",
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(extraActions.getClientSecret.success, (state, action) => {
      state.clientSecret = action.payload.data.clientSecret;
    });
  },
});
export { selectors };
export default paymentSlice.reducer;