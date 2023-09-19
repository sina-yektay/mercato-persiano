import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store/slices";

export const useSaffronScene = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: 10 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);
  return {};
};
