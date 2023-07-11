import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useProductCard = (url: string) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    navigate(url);
  };
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return { handleClick,handleHover,handleMouseLeave,isHovered,  };
};
