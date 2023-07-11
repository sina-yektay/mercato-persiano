import { memo } from "react";
import { useProductCard } from "./index.hooks";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { StaticImageData } from "next/image";

type ProductCardType = {
  url: string;
  img: StaticImageData;
  product: string;
};

export const ProductCard = memo(({ url, img, product }: ProductCardType) => {
  const { handleClick, handleHover, handleMouseLeave, isHovered } =
    useProductCard(url);

  return (
    <Box sx={{ padding: "0px", margin: "0px" }}>
      <Card
        sx={{
          maxWidth: 135,
          boxShadow: "none",
          backgroundColor: "transparent",
          background: "transparent !important",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <CardActionArea sx={{}}>
          <CardMedia
            component="img"
            height={135}
            width={115}
            image={img.src}
            alt={product}
          />
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Typography gutterBottom sx={{ fontSize: "17px" }} component="div">
              {product}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
});

ProductCard.displayName = "ProductCard";
