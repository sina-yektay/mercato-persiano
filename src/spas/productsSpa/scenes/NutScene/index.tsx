import { Box } from "@mui/material";
import { memo } from "react";
import { useNutScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";

type NutSceneProps = {};

export const NutScene = memo(({}: NutSceneProps) => {
  const {} = useNutScene();

  return (
    <>
     
      <h2>nut</h2>
    </>
  );
});
