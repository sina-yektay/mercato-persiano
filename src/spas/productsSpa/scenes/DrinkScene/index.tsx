import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { memo } from "react";
import { useDrinkScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { ItemCard } from "@/component/ItemCard";

type DrinkSceneProps = {};

export const DrinkScene = memo(({}: DrinkSceneProps) => {
  const {drinks} = useDrinkScene();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {/* <ProductTab /> */}
      <Grid
        container
        sx={{
            p:0,
        marginRight: 0,
        justifyContent: "flex-start",
        
        ...(smallScreen ? { paddingLeft: 2, paddingRight: 2 } : { paddingLeft: 5 }),
        }}
        spacing={0}
      >
        {drinks.map((item, index) => {
          return (
            <Grid item xs={6} sm={4} md={2} xl={1.5} key={index} sx={{ marginTop: "20px" }}>
              <ItemCard
                productName={item.productName}
                productId={item.productId}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
});
