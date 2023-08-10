import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const useProductDialog = () => {
  const dispatch = useDispatch();
  const dialog = useSelector(selectors.productDialog);
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const handleAddProduct = () => {
    dispatch(
      actions.addProduct({
        productId: dialog.productId,
        productName: dialog.productName,
        description: "",
        price: dialog.price,
        productImage: dialog.image,
      })
    );
    handleClose();
  };

  const handleClose = () => {
    dispatch(
      actions.changeDialogState({
        productDialog: {
          isDialogOpen: false,
          productName: "",
          productId: "",
          price: "",
          quantity: 0,
          description: "",
          image: "",
        },
      })
    );
  };

  return {
    dialog,
    handleClose,
    handleAddProduct,
    t,
    handleAccordionChange,
    expanded,
  };
};
