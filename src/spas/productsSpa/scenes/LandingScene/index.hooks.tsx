import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store/slices";
import icecream from "../../../../../public/assets/icecream.png";
import nuts from "../../../../../public/assets/nuts.png";
import hm1 from "../../../../../public/assets/hm1.png";
import vegetable from "../../../../../public/assets/vegetable.png";
import bread from "../../../../../public/assets/uk.png";
import drink from "../../../../../public/assets/it.png";
import del1 from "../../../../../public/assets/del1.png";
import hamburger from "../../../../../public/assets/hamburger.png";

export const useLandingScene = () => {
  const dispatch = useDispatch();
  const handleClick = (num: number) => {
    console.log("eknfowrjfowkerjfiew");
  };
  const [activeStep, setActiveStep] = useState(0);
  const [visibleStep, setVisibleStep] = useState(0);
  const handleStepChange = () => {
    if (activeStep === 0) {
      setActiveStep(2);
      setVisibleStep(2);
    } else {
      setActiveStep(activeStep - 1);
      setVisibleStep(activeStep - 1);
    }
  };
  const handleStepChangeForward = () => {
    if (activeStep === 2) {
      setActiveStep(0);
      setVisibleStep(0);
    } else {
      setActiveStep(activeStep + 1);
      setVisibleStep(activeStep + 1);
    }
  };
  const images = [
    { img: bread, link: "/drink" },
    { img: drink, link: "/drink" },
    { img: hm1, link: "/drink" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextStep = (activeStep + 1) % images.length;
      setVisibleStep(nextStep);
      setTimeout(() => {
        setActiveStep(nextStep);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeStep]);

  // const groceryItems = [
  //   { to: "/snack", buttonText: "snack", product: "snack", img: snack },
  //   {
  //     to: "/coffee-tea",
  //     buttonText: "coffee & tea",
  //     product: "coffee",
  //     img: nuts,
  //   },
  //   {
  //     to: "/vegetable",
  //     buttonText: "vegetable",
  //     product: "vegetable",
  //     img: vegetable,
  //   },
  //   { to: "/bakery", buttonText: "bread", product: "bread", img: bread },
  //   {
  //     to: "/ready-meals",
  //     buttonText: "ice cream",
  //     product: "Ready meals",
  //     img: hamburger,
  //   },
  //   { to: "/drink", buttonText: "drink", product: "drink", img: drink },
  //   { to: "/nut", buttonText: "nut", product: "nut", img: nut },
  //   {
  //     to: "/icecream",
  //     buttonText: "ice cream",
  //     product: "ice cream",
  //     img: icecream,
  //   },
  // ];

  useEffect(() => {
    dispatch(actions.changeRoute({ index: 0 }));
  }, []);

  return {
    handleClick,
    handleStepChange,
    activeStep,
    images,
    visibleStep,
    handleStepChangeForward,
  };
};
