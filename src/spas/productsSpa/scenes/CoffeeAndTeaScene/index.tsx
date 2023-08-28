import { Box } from "@mui/material";
import { memo } from "react";
import { useCoffeeAndTeaScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { ProductPagination } from "@/component/ProductPagination";

type CoffeeAndTeaSceneProps = {};

export const CoffeeAndTeaScene = memo(({}: CoffeeAndTeaSceneProps) => {
  const {} = useCoffeeAndTeaScene();

  return <ProductPagination productType="coffee" />;
});

CoffeeAndTeaScene.displayName = "CoffeeAndTeaScene";
