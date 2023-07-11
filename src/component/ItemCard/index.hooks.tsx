import { useState } from "react";

export const useItemCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {console.log("www...")};

  return { handleHover, handleMouseLeave, isHovered, handleClick };
};
