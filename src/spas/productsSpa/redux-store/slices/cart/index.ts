import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./cart.selectors";

export type product = {
  productId: string;
  productName: string;
  description: string;
  price: string;
  productImage: string;
  orderQuantity: number;
};

type productNavigationType = {
  paymentAmount: number;
  orderQuantity: number;
  chosenProducts: product[];
};

const initialState: productNavigationType = {
  paymentAmount: 0,
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
  };
};

type removeProductType = {
  payload: {
    productId: string;
  };
};

type setPaymentAmountType = { payload: { amount: number } };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: addProductType) => {
      state.orderQuantity = state.orderQuantity + 1;
      var flag = false;
      for (const product of state.chosenProducts) {
        if (product.productId === action.payload.productId) {
          ++product.orderQuantity;
          flag = true;
          break;
        }
      }
      if (flag === false) {
        const newProduct = {
          productId: action.payload.productId,
          productName: action.payload.productName,
          description: "",
          price: action.payload.price,
          productImage: action.payload.productImage,
          orderQuantity: 1,
        };
        state.chosenProducts.push(newProduct);
      }
    },
    removeProduct: (state, action: removeProductType) => {
      var flag = false;
      state.orderQuantity = state.orderQuantity - 1;
      for (const product of state.chosenProducts) {
        if (product.productId === action.payload.productId) {
          if (product.orderQuantity > 1) {
            --product.orderQuantity;
            flag = true;
            break;
          }
        }
      }
      if (flag === false) {
        const newProductArray = state.chosenProducts.filter(
          (item) => item.productId !== action.payload.productId
        );
        state.chosenProducts = [...newProductArray];
      }
    },
    setPaymentAmount: (state, action: setPaymentAmountType) => {
      state.paymentAmount = action.payload.amount;
    },
  },
});

export default cartSlice.reducer;

export { selectors };
