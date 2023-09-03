import { memo } from "react";
import { useVegetable } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { ProductPagination } from "@/component/ProductPagination";

type VegetableProps = {};

export const Vegetable = memo(({}: VegetableProps) => {
  const {} = useVegetable();

  return <ProductPagination productType="vegetable" />;
});
