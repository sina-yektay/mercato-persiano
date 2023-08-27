import { memo } from "react";
import { AddItemDialog } from "@/component/AddItemDialog";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useProductScene } from "./index.hooks";

type AdminPortalSceneProps = {};

export const ProductScene = memo(({}: AdminPortalSceneProps) => {
  const { products, handleDeletion } = useProductScene();

  return (
    <Grid container>
      {products.map((item, index) => {
        return (
          <Grid
            key={index}
            item
            container
            sx={{ justifyContent: "center", marginY: 2 }}
            xs={12}
          >
            <Card sx={{ display: "flex", minWidth: "60%" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{ flex: "1 0 auto", minWidth: "100%", width: "600px" }}
                >
                  <Typography
                    sx={{ color: "purple" }}
                    component="div"
                    variant="h5"
                  >
                    {item.productName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    id: {item.productId}
                  </Typography>
                  <Typography color="text.secondary" component="div">
                    {item.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    price: {item.price}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    quantity: {item.quantity}
                  </Typography>
                  <Stack sx={{ alignItems: "center" }} direction={"row"}>
                    <Typography color="text.secondary" component="div">
                      is in discount?
                    </Typography>
                    <Checkbox
                      style={{ color: "purple" }}
                      disabled
                      checked={item.isDiscounted}
                    />
                  </Stack>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 2, pb: 2 }}
                >
                  <Button
                    onClick={() => handleDeletion(item.productId)}
                    variant={"contained"}
                    sx={{ backgroundColor: "purple", fontWeight: "bold" }}
                  >
                    delete
                  </Button>
                  <Button
                    variant={"contained"}
                    sx={{
                      ml: "30px",
                      backgroundColor: "purple",
                      fontWeight: "bold",
                    }}
                  >
                    edit
                  </Button>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 291, objectFit: "contain" }}
                image={item.image}
                alt="Live from space album cover"
              />
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
});

ProductScene.displayName = "ProductScene";
