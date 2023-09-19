import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store/slices";

export const useVegetable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: 4 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);
  return {};
};
