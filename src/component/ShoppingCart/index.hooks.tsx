import { selectors } from "@/spas/productsSpa/redux-store/slices";
import { useSelector } from "react-redux";

export const useShoppingCart = () => {
  const orderQuantity = useSelector(selectors.getProductQuantity);

  return { orderQuantity };
};
