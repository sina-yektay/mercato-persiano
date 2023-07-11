import { RootState } from "../..";

export const products = (state: RootState) => state?.product.list;
