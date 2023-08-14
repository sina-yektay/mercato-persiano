import { memo } from "react";
import { useSideEffects } from "./index.hooks";
import {
  Alert,
  Backdrop,
  Box,
  CircularProgress,
  Snackbar,
} from "@mui/material";

type SideEffectsProps = {};

export const SideEffect = memo(({}: SideEffectsProps) => {
  const { onClose, closeSnackbar, sideEffects } = useSideEffects();

  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={sideEffects.backDropState}
        onClick={onClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
        style={{ top: -200, left: "50%", transform: "translateX(-50%)" }}
        open={sideEffects.feedBackState}
        autoHideDuration={3000}
        onClose={closeSnackbar}
      >
        <Alert
          onClose={closeSnackbar}
          severity={sideEffects.feedbackSeverity}
          sx={{ width: "100%" }}
        >
          {sideEffects.feedbackMesssage}
        </Alert>
      </Snackbar>
    </Box>
  );
});
