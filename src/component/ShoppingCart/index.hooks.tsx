import { selectors } from "@/spas/productsSpa/redux-store/slices";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useShoppingCart = () => {
  const orderQuantity = useSelector(selectors.getProductQuantity);

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const productInCart = useSelector(selectors.getProductsInCart);

  const handleRemoveFromCart = (productId: string) => {};

  const handleDialog = () => {
    setIsOpen(true);
  };

  return {
    orderQuantity,
    isOpen,
    handleClose,
    productInCart,
    handleRemoveFromCart,
    handleDialog,
  };
};
