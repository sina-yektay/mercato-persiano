import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./product.selectors";
import { ItemState } from "./product.interface";
import * as extraActions from "../../extra-actions";

const initialState: ItemState = {
  list: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetItemList: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.getItems.success, (state, action) => {
      state.list.push(...action.payload.data.data);
    });
  },
});

export { selectors };
export default productSlice.reducer;
