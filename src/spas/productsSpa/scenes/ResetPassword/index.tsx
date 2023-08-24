import { memo } from "react";
import { useResetPassword } from "./index.hooks";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { FormProvider } from "react-hook-form";

type ResetPasswordProps = {};

export const ResetPassword = memo(() => {
  const { formData, onSubmit, register, errors } = useResetPassword();
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
              Enter your new password
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
              {...register("password")}
              name="password"
              type={"password"}
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
              sx={{ mt: "5px" }}
              type={"password"}
              {...register("repeatPassword")}
              name="repeatPassword"
              label="Repeat Password"
              variant="outlined"
              error={!!errors.repeatPassword}
              helperText={errors.repeatPassword?.message}
            />
            <Button
              sx={{
                display: "block",
                mt: "20px",
                marginX: "auto",
                backgroundColor: "purple",
              }}
              variant="contained"
              type={"submit"}
            >
              submit
            </Button>
          </form>
        </FormProvider>
      </Paper>
    </Box>
  );
});

ResetPassword.displayName = "ResetPassword";
