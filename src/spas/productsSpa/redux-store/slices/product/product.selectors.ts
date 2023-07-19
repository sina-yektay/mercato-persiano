import { RootState } from "../..";

export const products = (state: RootState) => state?.product.list;
export const productDialog = (state: RootState) => state?.product.productDialog;
