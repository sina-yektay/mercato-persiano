import { Box } from "@mui/material";
import { memo } from "react";
import { useNutScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { ProductPagination } from "@/component/ProductPagination";

type NutSceneProps = {};

export const NutScene = memo(({}: NutSceneProps) => {
  const {} = useNutScene();

  return <ProductPagination productType="nut" />;
});
NutScene.displayName = "NutScene";
