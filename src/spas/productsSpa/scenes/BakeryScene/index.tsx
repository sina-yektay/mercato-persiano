import { Box } from "@mui/material";
import { memo } from "react";
import { useBakeryScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";

type BakerySceneProps = {};

export const BakeryScene = memo(({}: BakerySceneProps) => {
  const {} = useBakeryScene();

  return (
    <>
      <ProductTab />
      <h2>Bread</h2>
    </>
  );
});
