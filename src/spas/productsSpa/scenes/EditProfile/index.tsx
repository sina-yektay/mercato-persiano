import { memo } from "react";
import { useEditProfile } from "./index.hooks";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Popover,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { FormProvider } from "react-hook-form";

type EditProfileProps = {};

export const EditProfile = memo(({}: EditProfileProps) => {
  const {
    formData,
    onSubmit,
    register,
    errors,
    t,
    watch,
    user,
    handleChange,
    checked,
  } = useEditProfile();

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "auto",
          margin: "auto",
          padding: 4,
          boxShadow: "none",
        }}
      >
        <Stack
          sx={{
            mb: "20px",
            backgroundColor: "white",
            justifyContent: "center",
          }}
          direction="row"
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "22px",
                color: "purple",
                fontWeight: "bold",
              }}
            >
              {t("Dear")}
              {user.name}
              {","}
              {t("here you can modify your data")}
            </Typography>
          </Stack>
        </Stack>

        <FormProvider {...formData}>
          <form onSubmit={onSubmit}>
            <Grid container spacing={1.5}>
              <Grid item xs={12} md={6}>
                {" "}
                <TextField
                  InputLabelProps={{
                    style: { color: "purple" },
                    shrink: true,
                  }}
                  fullWidth
                  id="outlined-basic"
                  required
                  {...register("name")}
                  name="name"
                  label="Name"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  InputLabelProps={{
                    style: { color: "purple" },
                    shrink: true,
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
              </Grid>
              <Grid item xs={12}>
                <Stack direction={"row"} sx={{ alignItems: "center" }}>
                  <Switch
                    style={{ color: "pink" }}
                    checked={checked}
                    onChange={handleChange}
                  />
                  <Typography sx={{ fontSize: "12px" }}>
                    {t(
                      "i want to change my password too (if you don't want to change the password leave the password field blank)"
                    )}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  InputLabelProps={{
                    style: { color: "purple" },
                    shrink: true,
                  }}
                  disabled={checked}
                  fullWidth
                  id="outlined-basic"
                  type={"password"}
                  {...register("password")}
                  required
                  name="password"
                  label="Password"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  InputLabelProps={{
                    style: { color: "purple" },
                    shrink: true,
                  }}
                  fullWidth
                  id="outlined-basic"
                  type={"password"}
                  {...register("repeatPassword")}
                  disabled={checked}
                  required
                  name="repeatPassword"
                  label=" Repeat Password"
                  variant="outlined"
                  error={!!errors.repeatPassword}
                  helperText={errors.repeatPassword?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  InputLabelProps={{
                    style: { color: "purple" },
                    shrink: true,
                  }}
                  id="outlined-basic"
                  required
                  {...register("address")}
                  name="address"
                  label="Full Address"
                  variant="outlined"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  InputLabelProps={{
                    style: { color: "purple" },
                    shrink: true,
                  }}
                  fullWidth
                  id="outlined-basic"
                  required
                  {...register("phone")}
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Grid>
            </Grid>

            <Button
              sx={{
                display: "block",
                mt: "50px",
                marginX: "auto",
                backgroundColor: "purple",
              }}
              disabled={
                user.name === watch("name") &&
                user.email === watch("email") &&
                user.address === watch("address") &&
                user.phone === watch("phone") &&
                watch("password") === ""
              }
              variant="contained"
              type={"submit"}
            >
              {t("save the changes")}
            </Button>
          </form>
        </FormProvider>
      </Paper>
    </Grid>
  );
});
EditProfile.displayName = "EditProfile";
