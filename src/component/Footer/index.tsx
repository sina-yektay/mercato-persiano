import { memo } from "react";
import { useFooter } from "./index.hooks";
import {
  Box,
  BoxProps,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import paypal from "../../../public/assets/paypal.png";
import visa from "../../../public/assets/visa.png";
import master from "../../../public/assets/master.png";
import Image from "next/image";

type FooterProps = BoxProps;

export const Footer = memo(({ sx, ...otherProps }: FooterProps) => {
  const { t } = useFooter();
  const theme = useTheme();
  const mScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={sx}>
      <Grid
        container
        direction={"column"}
        spacing={2}
        sx={{
          backgroundColor: "#8B008B",
          padding: 4,
          pb: 0,
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Grid container item spacing={4} xs={11}>
          <Grid
            item
            container
            xs={12}
            md={3.4}
            sx={{ justifyContent: "flex-end" }}
          >
            <Grid
              item
              spacing={1.2}
              container
              direction={"column"}
              xs={12}
              sx={{
                justifyContent: mScreen ? "center" : "flex-start",
                alignItems: mScreen ? "center" : "flex-end",
              }}
            >
              <Grid item xs={2} sx={{}}>
                <Typography sx={{ color: "white" }}>
                  {t("Brings the taste of Asia")}
                </Typography>
              </Grid>
              <Grid item sx={{}} xs={5}>
                <Typography
                  sx={{
                    border: "solid 3px white",
                    borderRadius: "25px",
                    display: "inline",
                    p: 1,
                    px: 3.5,
                    fontSize: "33px",
                    color: "white",
                  }}
                >
                  TorinAsia
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction={"row"}
            spacing={1}
            xs={12}
            md={5.2}
            sx={{ justifyContent: "center" }}
          >
            <Grid
              item
              container
              xs={12}
              direction={"column"}
              spacing={0.6}
              sx={{}}
            >
              <Grid container item sx={{ justifyContent: "center", mb: 2 }}>
                <Typography
                  sx={{
                    borderBottom: "2px solid white",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {t("Useful Links")}
                </Typography>
              </Grid>
              <Grid container item sx={{ justifyContent: "center" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  href=""
                >
                  {t("About us")}
                </Link>
              </Grid>
              <Grid container item sx={{ justifyContent: "center" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  href=""
                >
                  {t("Order Tracking")}
                </Link>
              </Grid>
              <Grid container item sx={{ justifyContent: "center" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  href=""
                >
                  {t("Returns and Exchanges")}
                </Link>
              </Grid>
              <Grid container item sx={{ justifyContent: "center" }}>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                  }}
                  href=""
                >
                  {t("Shopping History")}
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction={"column"}
            sx={{
              justifyContent: "center",
              alignItems: mScreen ? "center" : "flex-start",
            }}
            xs={12}
            md={3.4}
          >
            <Grid item xs={2}>
              <Image src={paypal} width={90} height={25} alt={"Paypal"} />
            </Grid>
            <Grid item xs={3}>
              <Image src={visa} width={90} height={60} alt={"Paypal"} />
            </Grid>
            <Grid item xs={3}>
              <Image src={master} width={90} height={60} alt={"Paypal"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sx={{ justifyContent: "center", mt: 1 }} container>
          <Typography sx={{ color: "white" }}>
            © 2020 TorinAsia. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
});
