import { selectors } from "@/spas/productsSpa/redux-store/slices";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useCartDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const productInCart = useSelector(selectors.getProductsInCart);

  const handleRemoveFromCart = (productId: string) => {};

  return { isOpen, handleClose, productInCart, handleRemoveFromCart };
};
