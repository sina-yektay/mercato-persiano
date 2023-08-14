import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { useDispatch, useSelector } from "react-redux";

export const useSideEffects = () => {
  const dispatch = useDispatch();
  const sideEffects = useSelector(selectors.sideEffect);
  const onClose = () => {
    dispatch(actions.changeBackDropState({ backDropState: false }));
  };

  const closeSnackbar = () => {
    dispatch(actions.changeFeedbackState({ feedBackState: false }));
  };
  return { onClose, closeSnackbar, sideEffects };
};
