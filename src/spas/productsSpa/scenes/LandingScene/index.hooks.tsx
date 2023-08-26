import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux-store/slices";
import hm1 from "../../../../../public/assets/hm1.png";
import { selectors } from "../../redux-store/slices";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const useLandingScene = () => {
  const dispatch = useDispatch();
  const handleClick = (num: number) => {
    console.log("eknfowrjfowkerjfiew");
  };
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [visibleStep, setVisibleStep] = useState(0);
  const [textSlider, setTextSlider] = useState(false);
  const [imageVisibleStep, setImageVisibleStep] = useState(0);
  const [imageActiveStep, setImageActiveStep] = useState(4);
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
    { img: hm1, link: "/drink" },
    { img: hm1, link: "/drink" },
    { img: hm1, link: "/drink" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextStep = (activeStep + 1) % images.length;
      setVisibleStep(nextStep);
      setImageActiveStep(nextStep);
      setTimeout(() => {
        setImageVisibleStep(nextStep);
      }, 1000);
      setTimeout(() => {
        setActiveStep(nextStep);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeStep]);

  useEffect(() => {
    setTextSlider(false);
    setTimeout(() => {
      setTextSlider(true);
    }, 1000);
  }, [activeStep]);

  const handleShopNow = () => {
    navigate("/all-products");
  };

  useEffect(() => {
    dispatch(actions.changeRoute({ index: 0 }));
  }, []);

  const products = useSelector(selectors.products);

  const handleScrollDown = () => {
    window.scrollBy({
      top: 404,
      behavior: "smooth",
    });
  };

  return {
    handleClick,
    handleStepChange,
    activeStep,
    images,
    visibleStep,
    handleStepChangeForward,
    imageVisibleStep,
    imageActiveStep,
    textSlider,
    t,
    i18n,
    products,
    handleScrollDown,
    handleShopNow,
  };
};
