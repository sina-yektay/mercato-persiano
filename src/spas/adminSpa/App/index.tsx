"use client";
import React, { memo, useEffect } from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";

import { ProductRouting } from "@/component/ProductRouting";
import { AdminPortalScene } from "../scenes/AdminPortalScene";
import { ProductScene } from "../scenes/ProductScene";
import { Box, Stack } from "@mui/material";
import { AdminDrawer } from "@/component/AdminDrawer";
import { useDispatch } from "react-redux";
import { actions } from "../redux-store/slices";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getItems.request({}));
  }, [dispatch]);
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
