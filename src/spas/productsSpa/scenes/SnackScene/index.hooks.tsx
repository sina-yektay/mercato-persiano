import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store/slices";

export const useSnackScene = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: 2 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return {};
};
