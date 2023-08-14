import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./productNavigation.selectors";
import * as extraActions from "../../extra-actions";

type productNavigationType = {
  index: number;
  changeRouteAfterSignup: boolean;
};

const initialState: productNavigationType = {
  index: 0,
  changeRouteAfterSignup: false,
};

type changeRouteType = {
  payload: { index: number };
};

type changeRouteSignupType = {
  payload: { changeRouteAfterSignup: boolean };
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    changeRoute: (state, action: changeRouteType) => {
      state.index = action.payload.index;
    },
    changeRouteAfterSignup: (state, action: changeRouteSignupType) => {
      state.changeRouteAfterSignup = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.postCustomer.success, (state, action) => {
      state.changeRouteAfterSignup = true;
    });
  },
});

export default navigationSlice.reducer;

export { selectors };
