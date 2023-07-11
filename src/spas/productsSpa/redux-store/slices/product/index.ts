import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./product.selectors";
import { ItemState } from "./product.interface";
import * as extraActions from "../../extra-actions";
// import {
//   ArticlesState,
//   SetIsCloneArticleDialogOpenAction,
//   SetIsCreateArticleDialogOpenAction,
// } from "./articles.interfaces";
// import * as extraActions from "../../extra-actions";
// import * as sagas from "./articles.sagas";
// import domNavigation from "models/client/DomNavigation";


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
      state.list.push(...action.payload.data.items);
    });
    // builder.addCase(
    //   extraActions.getArticlesByArticleId.success,
    //   (state, action) => {
    //     state.chosenArticle = action.payload.data.article;
    //   }
    // );
    // builder.addCase(
    //   extraActions.patchArticlesByArticleId.success,
    //   (state, action) => {
    //     state.chosenArticle = action.payload.data.article;
    //   }
    // );
    // builder.addCase(extraActions.postArticles.success, (state, action) => {
    //   state.list.push(action.payload.data.article);
    //   state.isCreateArticleDialogOpen = false;
    //   domNavigation.navigate("/articles");
    // });
  },
});

export { selectors };
export default productSlice.reducer;
