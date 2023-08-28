import { ProductPagination } from "@/component/ProductPagination";
import { memo } from "react";
import { useDairyScene } from "./index.hooks";
type DrinkSceneProps = {};

export const DairyScene = memo(({}: DrinkSceneProps) => {
  const {} = useDairyScene();
  return <ProductPagination productType="dairy" />;
});

DairyScene.displayName = "DairyScene";
