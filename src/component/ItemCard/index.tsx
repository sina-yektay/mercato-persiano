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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StaticImageData } from "next/image";

type ItemCardProps = {
  productName: string;
  productId: string;
  price: string;
  quantity: number;
  isDiscounted?: boolean;
  description: string;
  image: string;
  homePage?: boolean;
};

export const ItemCard = memo(
  ({
    productName,
    productId,
    price,
    quantity,
    isDiscounted,
    description,
    image,
    homePage = false,
  }: ItemCardProps) => {
    const {
      handleHover,
      handleMouseLeave,
      isHovered,
      handleClick,
      handleAddProduct,
      t,
    } = useItemCard(
      productName,
      productId,
      price,
      quantity,
      description,
      image
    );
    const theme = useTheme();
    const mScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
      <Box sx={{ padding: "0px", margin: "0px" }}>
        <Box sx={{ overflowX: "hidden !important" }}>
          <Card
            sx={{
              width: mScreen ? 122 : 140,
              height: 280,
              boxShadow: homePage ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.1)",
              padding: 2,
              backgroundColor: "transparent",
              background: "transparent !important",
              transform: isHovered
                ? !homePage
                  ? "scale(1)"
                  : "scale(1)"
                : "scale(1)",
              transition: "transform 0.2s ease-in-out",
              overflowX: "hidden !important",
            }}
            onClick={handleClick}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            {isDiscounted && (
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "-34px",
                  backgroundColor: "purple",
                  color: "white",
                  padding: "4px 10px",
                  transform: "rotate(45deg)",
                  zIndex: 1,
                  width: "100px",
                  fontSize: "16px",
                  lineHeight: 1,
                }}
              >
                <Box display="flex">
                  <Typography style={{ margin: "auto", fontWeight: "bold" }}>
                    off
                  </Typography>
                </Box>
              </Box>
            )}
            <Stack>
              <Box
                sx={{
                  cursor: "pointer",
                  transform: isHovered
                    ? !homePage
                      ? "scale(1.05)"
                      : "scale(1)"
                    : "scale(1)",
                }}
              >
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
              </Box>

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
                onClick={(event) => {
                  event.stopPropagation();
                  handleAddProduct();
                }}
              >
                {quantity === 0 ? t("Sold out") : t("Add")}
              </Button>
            </Stack>
          </Card>
        </Box>
      </Box>
    );
  }
);
