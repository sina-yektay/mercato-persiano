import { Box } from "@mui/material";
import { memo } from "react";
import { useSnackScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { ProductPagination } from "@/component/ProductPagination";

type SnackSceneProps = {};

export const SnackScene = memo(({}: SnackSceneProps) => {
  const {} = useSnackScene();

  return <ProductPagination productType="snack" />;
});

SnackScene.displayName = "SnackScene";
