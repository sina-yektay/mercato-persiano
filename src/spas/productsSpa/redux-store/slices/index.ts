import * as navigation from "./productNavigation";
import * as cart from "./cart";
import * as extraActions from "../extra-actions";
import * as ajax from "./ajax";
import * as product from "./product";
export const reducers = {
    navigation: navigation.navigationSlice.reducer,
    cart: cart.cartSlice.reducer,
    ajax: ajax.ajaxStore.reducer,
    product: product.productSlice.reducer,
  };




  export const actions = {
    ...extraActions,
    ...navigation.navigationSlice.actions,
    ...cart.cartSlice.actions,
    ...ajax.ajaxStore.actions,
    ...product.productSlice.actions,
  };



  export const selectors = {
    ...navigation.selectors,
    ...cart.selectors,
    ...product.selectors,
  };
  

  // export const sagas = [
  // ...Object.values(ajax.sagas),
  // ]