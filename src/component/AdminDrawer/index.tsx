import { memo } from "react";
import { useAdminDrawer } from "./index.hooks";
import { Box, Drawer, List, ListItem, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

type AdminDrawerProps = {};

export const AdminDrawer = memo(({}: AdminDrawerProps) => {
  const {} = useAdminDrawer();
  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        minWidth: "240px",
        minHeight: "400px",
        p: 2,
        boxShadow: "0px 2px 10px 2px rgba(128, 0, 128, 0.5)",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          paddingBottom: "5px",
          borderBottom: "1px purple solid",
        }}
        to="/"
      >
        Add product
      </Link>
      <Link
        style={{
          textDecoration: "none",
          paddingBottom: "5px",
          borderBottom: "1px purple solid",
        }}
        to="/products"
      >
        All products
      </Link>
      <Link
        style={{
          textDecoration: "none",
          paddingBottom: "5px",
          borderBottom: "1px purple solid",
        }}
        to="/products"
      >
        Orders
      </Link>
      <Link
        style={{
          textDecoration: "none",
          paddingBottom: "5px",
          borderBottom: "1px purple solid",
        }}
        to="/products"
      >
        Privacy
      </Link>
    </Stack>
  );
});

AdminDrawer.displayName = "AdminDrawer";
