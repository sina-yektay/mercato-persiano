import { RouteModel } from "@/model/ProductRouteModel";
import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useProductTab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tabNumber = useSelector(selectors.getIndex);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    navigate(RouteModel[newValue as keyof typeof RouteModel]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { handleChange, tabNumber, isScrolled };
};
