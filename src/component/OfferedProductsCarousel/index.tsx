import { memo, useRef } from "react";
import { useOfferedProductsCarousel } from "./index.hooks";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ItemCard } from "../ItemCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type OfferedProductsCarouselType = {};

export const OfferedProductsCarousel = memo(
  ({}: OfferedProductsCarouselType) => {
    const { products, containerRef, scrollRight, scrollLeft } =
      useOfferedProductsCarousel();
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
      <Box display="flex" alignItems="center">
        <>
          <IconButton onClick={scrollLeft}>
            <ArrowBackIcon />
          </IconButton>
          <Box
            ref={containerRef}
            display="flex"
            overflow="auto"
            maxWidth="100%"
            gap={mediumScreen ? 0 : 10}
            sx={{
              "&::-webkit-scrollbar": { display: "none" },
              transition: "transform 0.3s ease-in-out",
              transform: "translateX(0)",
            }}
          >
            {products?.map((item, index) => (
              <ItemCard
                key={index}
                productName={item.productName}
                productId={item.productId}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
                homePage={true}
              />
            ))}
          </Box>
          <IconButton onClick={scrollRight}>
            <ArrowForwardIcon />
          </IconButton>
        </>
      </Box>
    );
  }
);

OfferedProductsCarousel.displayName = "OfferedProductsCarousel";
