import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./cart.selectors";

export type product = {
    productId: string;
    productName: string;
    description: string;
    price: string;
    productImage: string;
}

type productNavigationType = {
  orderQuantity: number;
  chosenProducts: product[]
};

const initialState: productNavigationType = {
    orderQuantity: 0,
    chosenProducts: [],
};

type addProductType = {
    payload: {
        productId: string;
        productName: string;
        description: string;
        price: string;
        productImage: string;
    }
}

type removeProductType = {
    payload: {
        productId: string;
    }
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: addProductType) => {
      state.orderQuantity = state.orderQuantity + 1;
      state.chosenProducts.push(action.payload);
    },
    removeProduct: (state, action: removeProductType) => {
        state.orderQuantity = state.orderQuantity - 1;
        const newProductArray = state.chosenProducts.filter(item => item.productId !== action.payload.productId);
      },
  },
});

export default cartSlice.reducer;

export { selectors };
