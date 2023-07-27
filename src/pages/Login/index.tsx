import { memo } from "react";
import { useLogin } from "./index.hooks";
import { Box, Paper, Stack, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { FormProvider } from "react-hook-form";




type LoginType = {};

export const Login = memo(({}: LoginType)=> {
    const {formData, onSubmit, register, errors, loading} = useLogin();

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
                  error={!!errors.email}
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
                  error={!!errors.password}
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
                  {loading ? <CircularProgress color="secondary" size={15} /> : "login" }
                  
                </Button>
              </form>
            </FormProvider>
          </Paper>
        </Box>
      );
})

export default Login;