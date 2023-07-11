"use client";
import React, { memo, useState } from "react";
import { Provider } from "react-redux";
import { Box, Stack } from "@mui/material";
import { AdminBar } from "@/component/AdminBar";
import store from "@/spas/adminSpa/redux-store";
import App from "./App";
import { AdminSnackbar } from "@/component/AdminSnackbar";
import { AdminDrawer } from "@/component/AdminDrawer";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Stack direction={"column"}>
        <AdminBar />
        <Stack>
        <App />
        </Stack>
        <AdminSnackbar />
      </Stack>

      {/* <Box>
        <AdminBar />
        <App />
      </Box>
      <AdminSnackbar /> */}
    </Provider>
  );
};

export default memo(AppWrapper);
