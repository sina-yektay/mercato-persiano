import { memo } from "react";
import { useLoginScene } from "./index.hooks";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { t } from "i18next";

type LoginSceneProps = {};

export const LoginScene = memo(({}: LoginSceneProps) => {
  const {
    loginFormData,
    onSubmit,
    resetRegister,
    resetonSubmit,
    resetError,
    register,
    errors,
    loading,
    warning,
    resetFormData,
    open,
    handleClose,
    openDialog,
    t,
  } = useLoginScene();

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: "auto",
          margin: "auto",
          padding: 7,
        }}
      >
        <Stack
          sx={{
            mb: "20px",
            py: 5,
            justifyContent: "center",
            borderRadius: "8px",
          }}
          direction="row"
        >
          <Stack>
            <Typography
              sx={{ fontSize: "25px", color: "purple", fontWeight: "bold" }}
            >
              LOGIN
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography sx={{ fontSize: "15px", color: "red", margin: "auto" }}>
            {warning}
          </Typography>
        </Stack>
        <FormProvider {...loginFormData}>
          <form onSubmit={onSubmit}>
            <TextField
              InputLabelProps={{
                style: { color: "purple" },
              }}
              fullWidth
              id="outlined-basic"
              {...register("email")}
              name="email"
              label="Email"
              variant="outlined"
              error={!!warning || !!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              InputLabelProps={{
                style: { color: "purple" },
              }}
              fullWidth
              id="outlined-basic"
              sx={{ mt: "5px" }}
              type={"password"}
              {...register("password")}
              name="password"
              label="Password"
              variant="outlined"
              error={!!warning || !!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              sx={{
                display: "block",
                mt: "20px",
                marginX: "auto",
                backgroundColor: "purple",
              }}
              variant="contained"
              disabled={loading}
              type={"submit"}
            >
              {loading ? (
                <CircularProgress color="secondary" size={15} />
              ) : (
                "login"
              )}
            </Button>
          </form>
        </FormProvider>
        <Stack>
          <Button
            sx={{
              "&:hover": {
                boxShadow: "none !important",
              },
              textTransform: "none",
              color: "inherit",
            }}
            variant="text"
            disableRipple
            onClick={openDialog}
          >
            forgot password?
          </Button>
        </Stack>
      </Paper>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("Please enter your email")}</DialogTitle>
        <FormProvider {...resetFormData}>
          <form onSubmit={resetonSubmit}>
            <DialogContent
              sx={{
                width: smallScreen ? "240px" : "400px",
                minHeight: "100px",
              }}
            >
              <TextField
                autoFocus
                margin="dense"
                id="name"
                {...resetRegister("resetEmail")}
                name="resetEmail"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                error={!!resetError.resetEmail}
                helperText={resetError.resetEmail?.message}
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit">{t("send")}</Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </Box>
  );
});
LoginScene.displayName = "LoginScene";
