"use client";
import React, { memo } from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import { SnackScene } from "../scenes/SnackScene";
import { LandingScene } from "../scenes/LandingScene";
import { CoffeeAndTeaScene } from "../scenes/CoffeeAndTeaScene";
import { IceCreamScene } from "../scenes/IceCreamScene";
import { ProductRouting } from "@/component/ProductRouting";


const App: React.FC = () => {
  return (
    <ProductRouting />
  );
};

export default memo(App);
