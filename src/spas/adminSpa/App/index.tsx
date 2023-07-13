"use client";
import React, { memo } from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";

import { ProductRouting } from "@/component/ProductRouting";
import { AdminPortalScene } from "../scenes/AdminPortalScene";
import { ProductScene } from "../scenes/ProductScene";
import { Box, Stack } from "@mui/material";
import { AdminDrawer } from "@/component/AdminDrawer";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/admin/dashboard">
      <Stack direction={"row"}>
        <AdminDrawer />
        <Stack sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<AdminPortalScene />} />
            <Route path="/products" element={<ProductScene />} />
          </Routes>
        </Stack>
      </Stack>
    </BrowserRouter>
  );
};

export default memo(App);
