import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { product } from "@/spas/productsSpa/redux-store/slices/cart";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useShoppingCart = () => {
  const { data: session } = useSession();
  const orderQuantity = useSelector(selectors.getProductQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    const regex = /([\d.]+)€/;
    const pricesAndQuantity = productInCart.map((item) => {
      const match = regex.exec(item.price);
      const float = parseFloat(match![1]);
      const roundedTotal = float.toFixed(2);
      return Number(roundedTotal) * item.orderQuantity;
    });

    const tPrice = pricesAndQuantity.reduce((acc, current) => acc + current, 0);

    return tPrice.toFixed(2);
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

  const handlePayment = () => {
    dispatch(actions.setPaymentAmount({ amount: parseFloat(totalPrice) }));
    dispatch(
      actions.addUserToState({
        email: session?.user.email || "",
        address: session?.user.address || "",
        phone: session?.user.phone || "",
        name: session?.user.name || "",
      })
    );
    setIsOpen(false);
    navigate("/payment");
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
    handlePayment,
  };
};
