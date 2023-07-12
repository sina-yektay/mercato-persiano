import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store/slices";
import icecream from "../../../../../public/assets/icecream.png";
import nuts from "../../../../../public/assets/nuts.png";
import snack from "../../../../../public/assets/snack.png";

import vegetable from "../../../../../public/assets/vegetable.png";
import bread from "../../../../../public/assets/bread.png";
import drink from "../../../../../public/assets/drink.png";
import nut from "../../../../../public/assets/nut.png";
import hamburger from "../../../../../public/assets/hamburger.png";

export const useLandingScene = () => {
  const dispatch = useDispatch();
  const handleClick = (num: number) => {
    console.log("eknfowrjfowkerjfiew");
  };

  const groceryItems = [
    { to: "/snack", buttonText: "snack", product: "snack", img: snack },
    {
      to: "/coffee-tea",
      buttonText: "coffee & tea",
      product: "coffee",
      img: nuts,
    },
    {
      to: "/vegetable",
      buttonText: "vegetable",
      product: "vegetable",
      img: vegetable,
    },
    { to: "/bakery", buttonText: "bread", product: "bread", img: bread },
    {
      to: "/ready-meals",
      buttonText: "ice cream",
      product: "Ready meals",
      img: hamburger,
    },
    { to: "/drink", buttonText: "drink", product: "drink", img: drink },
    { to: "/nut", buttonText: "nut", product: "nut", img: nut },
    {
      to: "/icecream",
      buttonText: "ice cream",
      product: "ice cream",
      img: icecream,
    },
  ];

  useEffect(() => {
    dispatch(actions.changeRoute({ index: 0 }));
  }, []);

  return { handleClick, groceryItems };
};
