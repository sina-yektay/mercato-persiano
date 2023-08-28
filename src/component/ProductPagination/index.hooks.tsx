import { selectors } from "@/spas/productsSpa/redux-store/slices";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useProductPagination = (productType: string) => {
  const products = useSelector(selectors.products);
  const [pageIndex, setPageIndex] = useState(1);
  const productPerPage = 12;
  const filteredProducts = products.filter((product)=> product.productId.includes(productType) )
  const pageNumber = Math.ceil(filteredProducts.length / productPerPage);
  const displayedProducts = filteredProducts.slice(
    (pageIndex - 1) * productPerPage,
    pageIndex * productPerPage
  );

  const handlePageChange = (index: number) => {
    setPageIndex(index);
    setTimeout(()=> {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },100)
  };

  return {
    products,
    pageNumber,
    pageIndex,
    displayedProducts,
    handlePageChange,
  };
};
