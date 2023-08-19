import { RootState } from "../..";

export const getProductQuantity = (state: RootState) =>
  state.cart.orderQuantity;
export const getProductsInCart = (state: RootState) =>
  state.cart.chosenProducts;
export const getAmount = (state: RootState) => state.cart.paymentAmount;
