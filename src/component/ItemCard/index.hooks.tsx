import { actions } from "@/spas/productsSpa/redux-store/slices";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export const useItemCard = (
  productName: string,
  productId: string,
  price: string,
  quantity: number,
  description: string,
  image: string
) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const handleHover = () => {
    setIsHovered(true);
  };
  const { t } = useTranslation();
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddProduct = () => {
    dispatch(
      actions.addProduct({
        productId: productId,
        productName: productName,
        description: description,
        price: price,
        productImage: image,
      })
    );
  };

  const handleClick = () => {
    dispatch(
      actions.changeDialogState({
        productDialog: {
          isDialogOpen: true,
          productName: productName,
          productId: productId,
          price: price,
          quantity: quantity,
          description: description,
          image: image,
        },
      })
    );
  };

  return {
    handleHover,
    handleMouseLeave,
    isHovered,
    handleClick,
    handleAddProduct,
    t,
  };
};
