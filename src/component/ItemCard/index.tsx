import { memo } from "react";
import { useItemCard } from "./index.hooks";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { StaticImageData } from "next/image";

type ItemCardProps = {
  productName: string;
  productId: string;
  price: string;
  quantity: number;
  image: string;
  homePage?: boolean;
};

export const ItemCard = memo(
  ({ productName, productId, price, quantity, image, homePage = false }: ItemCardProps) => {
    const { handleHover, handleMouseLeave, isHovered, handleClick, handleAddProduct, t } =
      useItemCard(productName, productId, price, quantity, image);

    return (
      <Box sx={{ padding: "0px", margin: "0px" }}>
        <Card
          sx={{
            width: 140,
            height: 280,
            boxShadow: homePage ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.1)",
            padding:2,
            backgroundColor: "transparent",
            background: "transparent !important",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s ease-in-out",
          }}
          onClick={handleClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <Stack>
            <CardActionArea sx={{}}>
              <CardMedia
                component="img"
                height={135}
                width={115}
                image={image}
                alt={productName}
              />
              <CardContent sx={{ display: "flex", justifyContent: "center" }}>
                <Stack>
                  <Typography
                    gutterBottom
                    sx={{ fontSize: "14px" }}
                    minHeight={50}
                    component="div"
                  >
                    {productName}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ fontSize: "17px" }}
                    component="div"
                  >
                    {price}
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>

            <Button
              variant="contained"
              disabled={quantity === 0 ? true : false}
              sx={{
                backgroundColor: "purple",
                fontSize: "12px",
                margin: "auto",
                width: "100%",
                color: "white",
              }}
              onClick={event => {
                event.stopPropagation();
                handleAddProduct();
              }}
            >
              {quantity === 0 ? t("Not available") : t("Add")}
            </Button>
          </Stack>
        </Card>
      </Box>
    );
  }
);
