import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store/slices";

export const useDairyScene = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: 11 }));
  }, []);
  return {};
};
