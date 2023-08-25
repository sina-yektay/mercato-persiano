import { memo } from "react";
import { useSupportScene } from "./index.hooks";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

type SupportSceneProps = {};

export const SupportScene = memo(({}: SupportSceneProps) => {
  const { t, session } = useSupportScene();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container sx={{ padding: 5, justifyContent: "space-around" }}>
      <Grid
        item
        container
        xs={12}
        md={5}
        direction={"column"}
        sx={{
          border: "solid purple 2px",
          borderRadius: 5,
          p: 2,
          minHeight: "35vh",
          marginBottom: smallScreen ? 5 : 0,
        }}
      >
        <Grid item container xs={3}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "18px", color: "purple" }}
          >
            {t("Shopping history")}
          </Typography>
        </Grid>
        <Grid item container xs={9}>
          {!session ? (
            <Typography
              sx={{
                fontWeight: "bold",
                margin: "auto",
                alignSelf: "flex-start",
                fontSize: "17px",
                color: "purple",
              }}
            >
              {" "}
              {t("you have to login to view your Shopping history")}
            </Typography>
          ) : (
            <Typography
              sx={{
                fontWeight: "bold",
                margin: "auto",
                alignSelf: "flex-start",
                fontSize: "17px",
                color: "purple",
              }}
            >
              {" "}
              {t("your shopping history is empty")}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        md={5}
        direction={"column"}
        sx={{
          border: "solid purple 2px",
          borderRadius: 5,
          p: 2,
          minHeight: "35vh",
          marginBottom: smallScreen ? 5 : 0,
        }}
      >
        <Grid item container xs={3}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "18px", color: "purple" }}
          >
            {t(
              "For return and exchange send your order number to the email below, shortly you will be contacted"
            )}
          </Typography>
        </Grid>
        <Grid item container xs={9}>
          <Typography
            sx={{
              fontWeight: "bold",
              margin: "auto",
              alignSelf: "flex-start",
              fontSize: "17px",
              color: "purple",
            }}
          >
            {" "}
            torinasia.supp@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
});
