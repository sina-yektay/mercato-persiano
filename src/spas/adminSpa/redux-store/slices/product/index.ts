import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./product.selectors";
// import {
//   ArticlesState,
//   SetIsCloneArticleDialogOpenAction,
//   SetIsCreateArticleDialogOpenAction,
// } from "./articles.interfaces";
// import * as extraActions from "../../extra-actions";
// import * as sagas from "./articles.sagas";
// import domNavigation from "models/client/DomNavigation";
import { ItemState } from "./product.interface";

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
  extraReducers: (builder) => {},
});

export { selectors };
export default productSlice.reducer;
