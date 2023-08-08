import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store/slices";

export const useAllProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: 1 }));
  });

  const products = useSelector(selectors.products);

  return { products };
};