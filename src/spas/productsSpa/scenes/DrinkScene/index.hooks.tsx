import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store/slices";

export const useDrinkScene = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: 7 }));
  });

  const drinks = useSelector(selectors.products);

  return { drinks };
};
