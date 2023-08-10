import { memo, useEffect } from "react";
import { useAllProducts } from "./index.hooks";
import { ItemCard } from "@/component/ItemCard";
import { Grid } from "@mui/material";
import { ProductPagination } from "@/component/ProductPagination";

type AllProductsSceneProps = {};

export const AllProductsScene = memo(({}: AllProductsSceneProps) => {
  const { products } = useAllProducts();

  return <ProductPagination />;
});

AllProductsScene.displayName = "AllProductsScene";
