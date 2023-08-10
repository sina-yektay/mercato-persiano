import { memo, useEffect } from "react";
import { useAllProducts } from "./index.hooks";
import { ItemCard } from "@/component/ItemCard";
import { Grid } from "@mui/material";
import { ProductPagination } from "@/component/ProductPagination";

type AllProductsSceneProps = {};

export const AllProductsScene = memo(({}: AllProductsSceneProps) => {
  const { products } = useAllProducts();

  return (
    <>

      <ProductPagination />
      {/* <Grid
        container
        sx={{
          p: 0,
          marginRight: 0,
          justifyContent: "center",
        }}
        spacing={0}
      >
        {products.map((item, index) => {
          return (
            <Grid
              item
              container
              xs={6}
              sm={4}
              md={2}
              xl={1.5}
              key={index}
              sx={{ marginTop: "20px", justifyContent: "center" }}
            >
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
      </Grid> */}
    </>
  );
});

AllProductsScene.displayName = "AllProductsScene";
