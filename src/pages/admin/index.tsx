import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { loginUser } from "@/helper";

type AdminLoginrops = {};
const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required("Password is required"),
});

type loginFormData = {
  email: string;
  password: string;
};

export const AdminLogin = memo(({}: AdminLoginrops) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formData = useForm<loginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = formData;

  const onSubmit = handleSubmit(
    async (formData: { email: string; password: string }) => {
      try {
        setLoading(true);

        const loginRes = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        if (loginRes && !loginRes.ok) {
        } else {
          router.push("/admin/dashboard");
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data?.error;
        }
      }
      setLoading(false);
    }
  );
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
          boxShadow: "0px 8px 16px rgba(128, 0, 128, 0.3)",
        }}
      >
        <Stack
          sx={{
            mb: "20px",
            backgroundColor: "purple",
            py: 5,
            justifyContent: "center",
            borderRadius: "8px",
          }}
          direction="row"
        >
          <Stack>
            <Typography
              sx={{ fontSize: "25px", color: "white", fontWeight: "bold" }}
            >
              Amministratore del mercato
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
              name="email"
              label="Email"
              variant="outlined"
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
      </Paper>
    </Box>
  );
});

export default AdminLogin;
AdminLogin.displayName = "AdminLogin";
