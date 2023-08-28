import { Box } from "@mui/material";
import { memo } from "react";
import { useBakeryScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { ProductPagination } from "@/component/ProductPagination";

type BakerySceneProps = {};

export const BakeryScene = memo(({}: BakerySceneProps) => {
  const {} = useBakeryScene();

  return <ProductPagination productType="breakfast" />;
});
