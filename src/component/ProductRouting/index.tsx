import { memo } from "react";
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

type ProductRoutingProps = {};

export const ProductRouting = memo(({}: ProductRoutingProps) => {
  const {} = useProductRouting();
  return (
    <Box>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<LandingScene />} />

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
    </Box>
  );
});

ProductRouting.displayName = "ProductRouting";
