import { memo } from "react";
import { useAdminSnackbar } from "./index.hooks";
import { Alert, Snackbar } from "@mui/material";

type AdminSnackbarType = {};

export const AdminSnackbar = memo(({}: AdminSnackbarType) => {
  const { openSnackbar, snackbarMessage, snackbaeSeverity, closeSnackbar } =
    useAdminSnackbar();

  return (
    <Snackbar
      style={{ top: -200, left: "50%", transform: "translateX(-50%)" }}
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={closeSnackbar}
    >
      <Alert
        onClose={closeSnackbar}
        severity={snackbaeSeverity}
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
});

AdminSnackbar.displayName = "AdminSnackbar";
