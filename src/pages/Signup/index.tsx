import { memo } from "react";
import { useSignup } from "./index.hooks";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  CircularProgress,
  useTheme,
  useMediaQuery,
  Alert,
  Snackbar,
} from "@mui/material";
import { FormProvider } from "react-hook-form";

type SignupType = {};

export const Signup = memo(({}: SignupType) => {
  const {
    formData,
    onSubmit,
    register,
    errors,
    loading,
    openSnackbar,
    closeSnackbar,
    snackbarMessage,
    severity,
  } = useSignup();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 400,
          margin: "auto",
          padding: 10,
          boxShadow: smallScreen
            ? "0px 2px 8px rgba(100, 0, 55, 0.2)"
            : "0px 8px 16px rgba(128, 0, 128, 0.3)",
        }}
      >
        <Stack
          sx={{
            mb: "20px",
            backgroundColor: "purple",
            py: smallScreen ? 2 : 5,
            justifyContent: "center",
            borderRadius: "8px",
          }}
          direction="row"
        >
          <Stack>
            <Typography
              sx={{
                fontSize: smallScreen ? "22px" : "25px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Create your account
            </Typography>
          </Stack>
        </Stack>

        <FormProvider {...formData}>
          <form onSubmit={onSubmit}>
            <TextField
              InputLabelProps={{
                style: { color: "purple" },
              }}
              fullWidth
              id="outlined-basic"
              {...register("email")}
              required
              name="email"
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              InputLabelProps={{
                style: { color: "purple" },
              }}
              fullWidth
              id="outlined-basic"
              sx={{ mt: "15px" }}
              type={"password"}
              {...register("password")}
              required
              name="password"
              label="Password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              InputLabelProps={{
                style: { color: "purple" },
              }}
              fullWidth
              id="outlined-basic"
              sx={{ mt: "15px" }}
              required
              {...register("address")}
              name="address"
              label="Address"
              variant="outlined"
              error={!!errors.address}
              helperText={errors.address?.message}
            />
            <TextField
              InputLabelProps={{
                style: { color: "purple" },
              }}
              fullWidth
              id="outlined-basic"
              sx={{ mt: "15px" }}
              required
              {...register("phone")}
              name="phone"
              label="Phone"
              variant="outlined"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <TextField
              InputLabelProps={{
                style: { color: "purple" },
              }}
              fullWidth
              id="outlined-basic"
              sx={{ mt: "15px" }}
              required
              {...register("name")}
              name="name"
              label="Name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
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
                "signup"
              )}
            </Button>
          </form>
        </FormProvider>
      </Paper>
      <Snackbar
        style={{ top: -200, left: "50%", transform: "translateX(-50%)" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={closeSnackbar}
      >
        <Alert
          onClose={closeSnackbar}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
});

export default Signup;
