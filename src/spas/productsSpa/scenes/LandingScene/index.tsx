import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { memo } from "react";
import { useLandingScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { CustomLink } from "@/component/CustomLink";
import { ProductCard } from "@/component/ProductCard";

type LandingSceneProps = {};

export const LandingScene = memo(({}: LandingSceneProps) => {
  const { handleClick, groceryItems } = useLandingScene();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box>
      <ProductTab />
      {/* <h2>Landing page</h2>
            <Stack spacing={2} >
                {groceryItems.map((item, index) => {
                    return <Stack><CustomLink to={item.to} buttonText={item.buttonText} /></Stack>
                })}
            </Stack> */}
      <Grid
        container
        sx={{
            p:0,
            justifyContent: "flex-start" ,
        //   pt: 5,
          ...(smallScreen ? { paddingLeft: 4.5 } : { paddingLeft: 5 }),
        }}
        spacing={0}
      >
        {groceryItems.map((item, index) => {
          return (
            <Grid item xs={6} sm={3} md={2} xl={1.5} key={index} sx={{ marginTop: "20px" }}>
              <ProductCard
                url={item.to}
                img={item.img}
                product={item.product}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
});

LandingScene.displayName = "LandingScene";
