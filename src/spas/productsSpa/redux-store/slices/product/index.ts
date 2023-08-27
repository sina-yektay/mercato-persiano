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
    description: "",
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
      description: string;
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
  },
});

export { selectors };
export default productSlice.reducer;
