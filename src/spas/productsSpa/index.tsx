import dynamic from "next/dynamic";

const ProductSpa = dynamic(
  () => import("./AppWrapper").then((module) => module.default),
  {
    ssr: false,
  }
);

export default ProductSpa;
