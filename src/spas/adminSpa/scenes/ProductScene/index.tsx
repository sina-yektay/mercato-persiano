import { memo } from "react";
import { AddItemDialog } from "@/component/AddItemDialog";
import { Alert, Box, Snackbar } from "@mui/material";
import { useProductScene } from "./index.hooks";

type AdminPortalSceneProps = {};

export const ProductScene = memo(({}: AdminPortalSceneProps) => {
  const {} = useProductScene();

  return (
    <Box>
      <h2>product list</h2>
    </Box>
  );
});

ProductScene .displayName = "ProductScene";
