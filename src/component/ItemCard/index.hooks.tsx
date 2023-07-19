import { actions } from "@/spas/productsSpa/redux-store/slices";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useItemCard = (
  productName: string,
  productId: string,
  price: string,
  quantity: number,
  image: string
) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
          image: image,
        },
      })
    );
  };

  return { handleHover, handleMouseLeave, isHovered, handleClick };
};
