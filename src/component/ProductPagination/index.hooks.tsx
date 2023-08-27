import { selectors } from "@/spas/productsSpa/redux-store/slices";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useProductPagination = () => {
  const products = useSelector(selectors.products);
  const [pageIndex, setPageIndex] = useState(1);
  const productPerPage = 12;
  const pageNumber = Math.ceil(products.length / productPerPage);
  const displayedProducts = products.slice(
    (pageIndex - 1) * productPerPage,
    pageIndex * productPerPage
  );

  const handlePageChange = (index: number) => {
    setPageIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    products,
    pageNumber,
    pageIndex,
    displayedProducts,
    handlePageChange,
  };
};
