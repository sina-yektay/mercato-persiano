import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { product } from "@/spas/productsSpa/redux-store/slices/cart";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const useShoppingCart = () => {
  const { data: session } = useSession();
  const orderQuantity = useSelector(selectors.getProductQuantity);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const { t } = useTranslation();
  const productInCart = useSelector(selectors.getProductsInCart);

  const handleRemoveFromCart = (productId: string) => {
    dispatch(actions.removeProduct({ productId }));
  };

  const handleDialog = () => {
    setIsOpen(true);
  };

  const totalPrice = useMemo(() => {
    const pricesAndQuantity = productInCart.map((item) => {
      const rawPrice = item.price.replace(/\D/g, "");

      return Number(rawPrice) * item.orderQuantity;
    });
    const tPrice = pricesAndQuantity.reduce((acc, current) => acc + current, 0);

    return tPrice;
  }, [productInCart]);

  const handleAddFromCart = (item: product) => {
    dispatch(
      actions.addProduct({
        productId: item.productId,
        productName: item.productName,
        description: item.description,
        price: item.price,
        productImage: item.productImage,
      })
    );
  };

  return {
    orderQuantity,
    isOpen,
    handleClose,
    productInCart,
    handleRemoveFromCart,
    handleDialog,
    handleAddFromCart,
    totalPrice,
    t,
    session,
  };
};
