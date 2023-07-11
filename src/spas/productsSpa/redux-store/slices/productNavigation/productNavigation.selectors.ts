import { RootState } from "../..";

export const getIndex = (state: RootState) => state?.navigation?.index ?? 0;
