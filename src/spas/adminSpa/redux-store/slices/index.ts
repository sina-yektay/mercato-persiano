import * as extraActions from "../extra-actions";
import * as ajax from "./ajax";
import * as feedback from "./feedback";
import * as product from "./product";

export const reducers = {
  ajax: ajax.ajaxStore.reducer,
  feedback: feedback.feedbackSlice.reducer,
  product: product.productSlice.reducer,
};

export const actions = {
  ...extraActions,
  ...ajax.ajaxStore.actions,
  ...feedback.feedbackSlice.actions,
  ...product.productSlice.actions,
};

export const selectors = {...ajax.selectors, ...feedback.selectors, ...product.selectors};
