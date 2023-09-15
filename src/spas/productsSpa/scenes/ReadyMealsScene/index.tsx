import { Box } from "@mui/material";
import { memo } from "react";
import { useReadyMealsScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { ProductPagination } from "@/component/ProductPagination";

type ReadyMealsSceneProps = {};

export const ReadyMealsScene = memo(({}: ReadyMealsSceneProps) => {
  const {} = useReadyMealsScene();

  return <ProductPagination productType="meal" />;
});
ReadyMealsScene.displayName = "ReadyMealsScene";
