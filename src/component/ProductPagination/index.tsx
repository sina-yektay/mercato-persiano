import { IItem } from "@/model/server/Item";
import { useProductPagination } from "./index.hooks";
import { memo } from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import { ItemCard } from "../ItemCard";

type ProductPaginationProps = {};

export const ProductPagination = memo(({}: ProductPaginationProps) => {
  const {
    products,
    pageNumber,
    pageIndex,
    displayedProducts,
    handlePageChange,
  } = useProductPagination();

  return (
    <Grid container direction={"column"} sx={{ alignItems: "center", pt: 6 }}>
      <Grid item xs={11} container sx={{ justifyContent: "flex-start" }}>
        {displayedProducts.map((item, index) => {
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
                isDiscounted={item.isDiscounted}
                description={item.description}
                image={item.image}
              />
            </Grid>
          );
        })}
      </Grid>

      <Grid
        item
        xs={1}
        container
        spacing={0}
        sx={{ justifyContent: "center", py: 6, mt: 8 }}
      >
        <Box>
          <Button
            disabled={pageIndex === 1}
            onClick={() => handlePageChange(pageIndex - 1)}
          >
            previous
          </Button>
          {Array.from({ length: pageNumber }).map((_, index) => {
            return (
              <Button
                sx={{ marginX: 1 }}
                key={index}
                onClick={() => handlePageChange(index + 1)}
                variant={pageIndex === index + 1 ? "contained" : "outlined"}
              >
                {index + 1}
              </Button>
            );
          })}
          <Button
            disabled={pageIndex === pageNumber}
            onClick={() => handlePageChange(pageIndex + 1)}
          >
            next
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
});
