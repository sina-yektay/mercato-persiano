import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { useDispatch, useSelector } from "react-redux";

export const useProductDialog = () => {
  const dispatch = useDispatch();
  const dialog = useSelector(selectors.productDialog);
  const handleClose = () => {
    dispatch(
      actions.changeDialogState({
        productDialog: {
          isDialogOpen: false,
          productName: "",
          productId: "",
          price: "",
          quantity: 0,
          image: "",
        },
      })
    );
  };

  return { dialog, handleClose };
};
