import { Box } from "@mui/material";
import { memo } from "react";
import { useDrinkScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";

type DrinkSceneProps = {};

export const DrinkScene = memo(({}: DrinkSceneProps) => {
  const {} = useDrinkScene();

  return (
    <>
      <ProductTab />
      <h2>drinks</h2>
    </>
  );
});
