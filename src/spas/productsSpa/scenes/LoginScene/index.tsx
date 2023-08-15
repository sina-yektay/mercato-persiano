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
} from "@mui/material";
import { FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

type LoginSceneProps = {};

export const LoginScene = memo(({}: LoginSceneProps) => {
  const { formData, onSubmit, register, errors, loading, warning } =
    useLoginScene();

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
            <Typography sx={{ fontSize: "15px", color: "red",margin:"auto" }}>
              {warning}
            </Typography>
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
          <Link
            to={""}
            style={{
              fontSize: "14px",
              textDecoration: "none",
              margin: "auto",
              color: "purple",
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            forgot password?
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
});
LoginScene.displayName = "LoginScene";
