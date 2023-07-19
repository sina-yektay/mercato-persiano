import { memo } from "react";
import { useVegetable } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";

type VegetableProps = {};

export const Vegetable = memo(({}: VegetableProps) => {
  const {} = useVegetable();

  return <><h2>Vegetable</h2></>;
});
