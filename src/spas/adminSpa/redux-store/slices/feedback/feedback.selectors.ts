import { RootState } from "../..";

export const isOpen = (state: RootState) => state?.feedback?.isOpen;

export const message = (state: RootState) => state?.feedback?.message;

export const severity = (state: RootState) => state?.feedback?.type;
