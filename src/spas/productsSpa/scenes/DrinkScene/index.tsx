import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { memo } from "react";
import { useDrinkScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { ItemCard } from "@/component/ItemCard";
import { ProductPagination } from "@/component/ProductPagination";

type DrinkSceneProps = {};

export const DrinkScene = memo(({}: DrinkSceneProps) => {
  const {} = useDrinkScene();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return <ProductPagination productType="drink" />;
});
