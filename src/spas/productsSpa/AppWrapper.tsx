"use client";
import React, { memo, useState } from "react";
import { Provider } from "react-redux";
import App from "./App";
import { Box } from "@mui/material";
import store from "../../spas/productsSpa/redux-store";
import { Bar } from "@/component/Bar";
import { ProductTab } from "@/component/ProductTab";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Box>
        <Bar />
        <App />
      </Box>
    </Provider>
  );
};

export default memo(AppWrapper);
