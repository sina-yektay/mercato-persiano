import { memo } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { AdminBar } from "@/component/AdminBar";
import { AddItemDialog } from "@/component/AddItemDialog";
import AdminSpa from "@/spas/adminSpa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

type dashboardProps = {};

const Dashboard = memo(({}: dashboardProps) => {
  const router = useRouter();
  const { data: session } = useSession();
  useLayoutEffect(() => {
    if (!session?.user.isAdmin) {
      router.push("/");
    }
  }, [router, session]);

  return <AdminSpa />;
});

export default Dashboard;
Dashboard.displayName = "Dashboard";
