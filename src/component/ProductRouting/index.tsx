import { memo, useEffect } from "react";
import { useProductRouting } from "./index.hooks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingScene } from "@/spas/productsSpa/scenes/LandingScene";
import { SnackScene } from "@/spas/productsSpa/scenes/SnackScene";
import { CoffeeAndTeaScene } from "@/spas/productsSpa/scenes/CoffeeAndTeaScene";
import { IceCreamScene } from "@/spas/productsSpa/scenes/IceCreamScene";
import { Box } from "@mui/material";
import { Vegetable } from "@/spas/productsSpa/scenes/Vegetable";
import { BakeryScene } from "@/spas/productsSpa/scenes/BakeryScene";
import { ReadyMealsScene } from "@/spas/productsSpa/scenes/ReadyMealsScene";
import { DrinkScene } from "@/spas/productsSpa/scenes/DrinkScene";
import { NutScene } from "@/spas/productsSpa/scenes/NutScene";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { ProductDialog } from "../ProductDialog";
import { ProductTab } from "../ProductTab";
import Signup from "@/pages/Signup";
import { AllProductsScene } from "@/spas/productsSpa/scenes/AllProductsScene";
import { Footer } from "../Footer";

type ProductRoutingProps = {};

export const ProductRouting = memo(({}: ProductRoutingProps) => {
  const {} = useProductRouting();
  const products = useSelector(selectors.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(actions.getItems.request({}));
    }
  }, [dispatch]);
  return (
    <Box>
      <ProductDialog />
      <Router>
        <ProductTab />
        <Routes>
          <Route path="/" element={<LandingScene />} />

          <Route path="/all-products" element={<AllProductsScene />} />

          <Route path="/snack" element={<SnackScene />} />

          <Route path="/coffee-tea" element={<CoffeeAndTeaScene />} />

          <Route path="/icecream" element={<IceCreamScene />} />

          <Route path="/vegetable" element={<Vegetable />} />

          <Route path="/bakery" element={<BakeryScene />} />

          <Route path="/ready-meals" element={<ReadyMealsScene />} />

          <Route path="/drink" element={<DrinkScene />} />

          <Route path="/nut" element={<NutScene />} />
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
});

ProductRouting.displayName = "ProductRouting";
