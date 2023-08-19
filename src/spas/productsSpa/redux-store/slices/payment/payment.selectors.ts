import { RootState } from "../..";

export const clientSecret = (state: RootState) => state?.payment.clientSecret;
