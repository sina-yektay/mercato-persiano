import { RootState } from "../..";

export const products = (state: RootState) => state?.product.list;
export const productDialog = (state: RootState) => state?.product.productDialog;
export const searchPopoverState = (state: RootState) =>
  state?.product.searchPopover;
