import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./product.selectors";
import { ItemState } from "./product.interface";
import * as extraActions from "../../extra-actions";

const initialState: ItemState = {
  list: [],
  searchPopover: false,
  productDialog: {
    isDialogOpen: false,
    productName: "",
    productId: "",
    price: "",
    quantity: 0,
    image: "",
  },
};

type changeDialogStateType = {
  payload: {
    productDialog: {
      isDialogOpen: boolean;
      productName: string;
      productId: string;
      price: string;
      quantity: number;
      image: string;
    };
  };
};

type changeSearchPopoverStateType = {
  payload: {
    searchPopoverState: boolean;
  };
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetItemList: (state) => {
      state.list = [];
    },
    changeDialogState: (state, { payload }: changeDialogStateType) => {
      state.productDialog = payload.productDialog;
    },
    changeSearchPopover: (state, { payload }: changeSearchPopoverStateType) => {
      state.searchPopover = payload.searchPopoverState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.getItems.success, (state, action) => {
      state.list.push(...action.payload.data.data);
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
