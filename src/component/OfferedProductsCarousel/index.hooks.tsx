import { selectors } from "@/spas/productsSpa/redux-store/slices";
import { MutableRefObject, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const useOfferedProductsCarousel = () => {
  const products = useSelector(selectors.products);
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const scrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const discountedProducts = products.filter((item) => {
    return item.isDiscounted === true;
  });
  return { discountedProducts, containerRef, scrollRight, scrollLeft };
};
