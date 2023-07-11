import { memo } from "react";
import { useAdminPortalScene } from "./index.hooks";
import { AddItemDialog } from "@/component/AddItemDialog";
import {
  Alert,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Snackbar,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

type AdminPortalSceneProps = {};

export const AdminPortalScene = memo(() => {
  const {} = useAdminPortalScene();

  return (
    <Box>
      <AddItemDialog />
    </Box>
  );
});

AdminPortalScene.displayName = "AdminPortalScene";
