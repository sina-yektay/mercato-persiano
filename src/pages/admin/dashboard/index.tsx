import { memo } from "react";
import { useDashboard } from "./index.hooks";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { AdminBar } from "@/component/AdminBar";
import { AddItemDialog } from "@/component/AddItemDialog";
import AdminSpa from "@/spas/adminSpa";


type dashboardProps = {};

const Dashboard = memo(({}: dashboardProps) => {
  const {} = useDashboard();

  return <AdminSpa />
});

export default Dashboard;
