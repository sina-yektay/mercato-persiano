import { memo } from "react";
import { useItemCard } from "./index.hooks";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { StaticImageData } from "next/image";

type ItemCardProps = {
  productName: string;
  productId: string;
  price: string;
  quantity: number;
  image: StaticImageData;
};

export const ItemCard = memo(
  ({ productName, productId, price, quantity, image }: ItemCardProps) => {
    const { handleHover, handleMouseLeave, isHovered, handleClick } =
      useItemCard();

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
              image={image.src}
              alt={productName}
            />
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                gutterBottom
                sx={{ fontSize: "17px" }}
                component="div"
              >
                {productName}
              </Typography>
              <Typography variant="h6" component="div">
                {price}
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "purple", color: "white" }}
              >
                Add to card
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    );
  }
);
