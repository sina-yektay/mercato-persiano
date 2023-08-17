import { LandingPage } from "@/component/LandingPage";
import ProductSpa from "@/spas/productsSpa";
import { BakeryScene } from "@/spas/productsSpa/scenes/BakeryScene";
import { CoffeeAndTeaScene } from "@/spas/productsSpa/scenes/CoffeeAndTeaScene";
import { DrinkScene } from "@/spas/productsSpa/scenes/DrinkScene";
import { IceCreamScene } from "@/spas/productsSpa/scenes/IceCreamScene";
import { NutScene } from "@/spas/productsSpa/scenes/NutScene";
import { ReadyMealsScene } from "@/spas/productsSpa/scenes/ReadyMealsScene";
import { SnackScene } from "@/spas/productsSpa/scenes/SnackScene";
import { Vegetable } from "@/spas/productsSpa/scenes/Vegetable";
import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  const { slug } = router.query;

  switch (slug?.[0]) {
    case undefined:
    case "snack":
    case "coffee-tea":
    case "icecream":
    case "vegetable":
    case "bakery":
    case "ready-meals":
    case "drink":
    case "nut":
    case "all-products":
    case "signup":
    case "login":
    case "edit-profile":
      return <ProductSpa />;
  }
};

export default DynamicRoute;
