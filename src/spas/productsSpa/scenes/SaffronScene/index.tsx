import { ProductPagination } from "@/component/ProductPagination";
import { memo } from "react";
import { useSaffronScene } from "./index.hooks";

type DrinkSceneProps = {};

export const SaffronScene = memo(({}: DrinkSceneProps) => {
  const {} = useSaffronScene();
  return <ProductPagination productType="saffron" />;
});
SaffronScene.displayName = "SaffronScene";