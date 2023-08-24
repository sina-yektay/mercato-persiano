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
import { AllProductsScene } from "@/spas/productsSpa/scenes/AllProductsScene";
import { Footer } from "../Footer";
import { SignupScene } from "@/spas/productsSpa/scenes/SignupScene";
import { Bar } from "../Bar";
import { SideEffect } from "../SideEffects";
import { LoginScene } from "@/spas/productsSpa/scenes/LoginScene";
import { EditProfile } from "@/spas/productsSpa/scenes/EditProfile";
import { PaymentScene } from "@/spas/productsSpa/scenes/PaymentScene";
import { AboutScene } from "@/spas/productsSpa/scenes/AboutScene";

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
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{
        flexGrow: 1,
        height: "100%",
        position: "relative",
      }}
    >
      <ProductDialog />
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "50vh",
            flexGrow: 1,
          }}
        >
          <Bar />
          <ProductTab />
          <SideEffect />
          <Routes>
            <Route path="/" element={<LandingScene />} />

            <Route path="/signup" element={<SignupScene />} />

            <Route path="/login" element={<LoginScene />} />

            <Route path="/payment" element={<PaymentScene />} />

            <Route path="/edit-profile" element={<EditProfile />} />

            <Route path="/all-products" element={<AllProductsScene />} />

            <Route path="/snack" element={<SnackScene />} />

            <Route path="/about" element={<AboutScene />} />

            <Route path="/coffee-tea" element={<CoffeeAndTeaScene />} />

            <Route path="/icecream" element={<IceCreamScene />} />

            <Route path="/vegetable" element={<Vegetable />} />

            <Route path="/bakery" element={<BakeryScene />} />

            <Route path="/ready-meals" element={<ReadyMealsScene />} />

            <Route path="/drink" element={<DrinkScene />} />

            <Route path="/nut" element={<NutScene />} />
          </Routes>
        </Box>
        <Footer sx={{ position: "static", width: "100%" }} />
      </Router>
    </Box>
  );
});

ProductRouting.displayName = "ProductRouting";
