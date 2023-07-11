import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./productNavigation.selectors";

type productNavigationType = {
  index: number;
};

const initialState: productNavigationType = {
  index: 0,
};

type changeRouteType = {
  payload: { index: number };
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    changeRoute: (state, action: changeRouteType) => {
      state.index = action.payload.index;
    },
  },
});

export default navigationSlice.reducer;

export { selectors };
