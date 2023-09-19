import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store/slices";

export const useIceCreamScene = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: 9 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[dispatch]);
  return {};
};
