import { memo } from "react";
import { useSignupScene } from "./index.hooks";
import { severity } from "@/spas/adminSpa/redux-store/slices/feedback/feedback.selectors";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  CircularProgress,
  useMediaQuery,
  useTheme,
  Grid,
  IconButton,
  InputAdornment,
  Popover,
} from "@mui/material";
import { FormProvider } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";

type SignupSceneProps = {};

export const SignupScene = memo(({}: SignupSceneProps) => {
  const {
    formData,
    onSubmit,
    register,
    errors,
    handlePopoverClick,
    handlePopoverClose,
    anchorEl,
    open,
    t,
  } = useSignupScene();

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const largeScreen = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
        height: "auto",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: "auto",
          margin: "auto",
          padding: largeScreen ? 4 : 8,
          boxShadow: "none",
        }}
      >
        <Stack
          sx={{
            mb: "20px",
            backgroundColor: "white",
            py: smallScreen ? 2 : 2,
            justifyContent: "center",
          }}
          direction="row"
        >
          <Stack>
            <Typography
              sx={{
                fontSize: smallScreen ? "22px" : "25px",
                color: "purple",
                fontWeight: "bold",
              }}
            >
              {t("Create your account")}
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

              <Grid item xs={12} md={6}>
                <TextField
                  InputLabelProps={{
                    style: { color: "purple" },
                  }}
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
                  }}
                  fullWidth
                  id="outlined-basic"
                  type={"password"}
                  {...register("repeatPassword")}
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
                  }}
                  id="outlined-basic"
                  required
                  {...register("address")}
                  name="address"
                  label="Full Address"
                  variant="outlined"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handlePopoverClick}>
                          <InfoIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Popover
                  open={open}
                  sx={{ zIndex: 999 }}
                  anchorEl={anchorEl}
                  onClose={handlePopoverClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transitionDuration={500}
                >
                  <Paper
                    style={{ padding: "10px", backgroundColor: "lightgray" }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("This Address is used to deliver your products.")}
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      {t("Later you can change the address in your profile.")}{" "}
                    </Typography>
                  </Paper>
                </Popover>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  InputLabelProps={{
                    style: { color: "purple" },
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
                mt: "20px",
                marginX: "auto",
                backgroundColor: "purple",
              }}
              variant="contained"
              type={"submit"}
            >
              signup
            </Button>
          </form>
        </FormProvider>
      </Paper>
    </Box>
  );
});

SignupScene.displayName = "SignupScene";
