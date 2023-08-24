import { memo } from "react";
import { useSupportScene } from "./index.hooks";
import { Grid, Typography } from "@mui/material";

type SupportSceneProps = {};

export const SupportScene = memo(({}: SupportSceneProps) => {
  const { t, session } = useSupportScene();
  return (
    <Grid container sx={{ padding: 5 , justifyContent:"space-around"}}  >
      <Grid
        item
        container
        xs={12}
        md={5}
        sx={{ border: "solid purple 2px", borderRadius: 2, p: 2 }}
      >
        <Grid item container xs={12}>
          <Typography>History</Typography>
        </Grid>
        <Grid item container xs={12}>
          shopping history
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={5}
        sx={{ border: "solid purple 2px", borderRadius: 2, p: 2 }}
      >
        <Grid item container xs={12}>
          <Typography>
            {t(
              "For return and exchange send your order number to the email below, shortly you will be contacted"
            )}
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Typography sx={{fontWeight:"bold", margin:"auto"}}>torinasia.supp@gmail.com</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
});
