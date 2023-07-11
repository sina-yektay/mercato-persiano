import { actions, selectors } from "@/spas/adminSpa/redux-store/slices";
import { useDispatch, useSelector } from "react-redux";

export const useAdminSnackbar = () => {
  const dispatch = useDispatch();

  const openSnackbar = useSelector(selectors.isOpen);
  const snackbarMessage = useSelector(selectors.message);
  const snackbaeSeverity = useSelector(selectors.severity);

  const closeSnackbar = () => {
    dispatch(
      actions.setFeedback({ isOpen: false, message: "", type: "warning" })
    );
  };

  return { openSnackbar, snackbarMessage, snackbaeSeverity, closeSnackbar };
};
