import { RootState } from "../..";

export const getIndex = (state: RootState) => state?.navigation?.index ?? 0;
export const getChangeRouteAfterSignup = (state: RootState) =>
  state?.navigation?.changeRouteAfterSignup;
