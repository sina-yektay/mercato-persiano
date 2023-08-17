import * as navigation from "./productNavigation";
import * as cart from "./cart";
import * as extraActions from "../extra-actions";
import * as ajax from "./ajax";
import * as product from "./product";
import * as sideEffects from "./sideEffects";
import * as user from "./user";
export const reducers = {
  navigation: navigation.navigationSlice.reducer,
  cart: cart.cartSlice.reducer,
  ajax: ajax.ajaxStore.reducer,
  product: product.productSlice.reducer,
  sideEffect: sideEffects.sideEffectsSlice.reducer,
  user: user.userSlice.reducer,
};

export const actions = {
  ...extraActions,
  ...navigation.navigationSlice.actions,
  ...cart.cartSlice.actions,
  ...ajax.ajaxStore.actions,
  ...product.productSlice.actions,
  ...sideEffects.sideEffectsSlice.actions,
  ...user.userSlice.actions,
};

export const selectors = {
  ...navigation.selectors,
  ...cart.selectors,
  ...product.selectors,
  ...sideEffects.selectors,
  ...user.selectors,
};

// export const sagas = [
// ...Object.values(ajax.sagas),
// ]
