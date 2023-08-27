import { memo } from "react";
import { AddItemDialog } from "@/component/AddItemDialog";
import Image from "next/image";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useProductScene } from "./index.hooks";
import { Controller, FormProvider } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";

type AdminPortalSceneProps = {};

export const ProductScene = memo(({}: AdminPortalSceneProps) => {
  const {
    products,
    handleDeletion,
    dialog,
    handleClose,
    control,
    watch,
    loading,
    register,
    errors,
    formData,
    onSubmit,
    handleEdit,
    image,
  } = useProductScene();

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
                    onClick={() => handleEdit(item)}
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

      <Dialog
        open={dialog}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FormProvider {...formData}>
              <form onSubmit={onSubmit}>
                <Stack direction={"column"} spacing={2}>
                  <Stack direction={"row"} spacing={1} sx={{ mt: 2 }}>
                    <Stack>
                      {" "}
                      <TextField
                        sx={{ mt: 0 }}
                        InputLabelProps={{
                          style: { color: "purple" },
                          shrink: true,
                        }}
                        id="outlined-basic"
                        {...register("productName")}
                        name="productName"
                        label="product name"
                        variant="outlined"
                      />{" "}
                    </Stack>
                    <Stack>
                      {" "}
                      <TextField
                        id="outlined-basic"
                        {...register("productId")}
                        InputLabelProps={{
                          style: { color: "purple" },
                          shrink: true,
                        }}
                        name="productId"
                        label="Product id"
                        variant="outlined"
                      />{" "}
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} spacing={1} sx={{ mt: 2 }}>
                    <Stack>
                      {" "}
                      <TextField
                        id="outlined-basic"
                        {...register("quantity")}
                        InputLabelProps={{
                          style: { color: "purple" },
                          shrink: true,
                        }}
                        name="quantity"
                        label="quantity"
                        variant="outlined"
                      />{" "}
                    </Stack>
                    <Stack>
                      <TextField
                        id="outlined-basic"
                        {...register("description")}
                        InputLabelProps={{
                          style: { color: "purple" },
                          shrink: true,
                        }}
                        name="description"
                        label="description"
                        variant="outlined"
                      />
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} spacing={1} sx={{ mt: 2 }}>
                    <Stack>
                      {" "}
                      <TextField
                        id="outlined-basic"
                        {...register("price")}
                        InputLabelProps={{
                          style: { color: "purple" },
                          shrink: true,
                        }}
                        name="price"
                        label="price"
                        variant="outlined"
                      />{" "}
                    </Stack>
                    <Stack
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Stack direction={"row"}>
                        <Typography sx={{ alignSelf: "center" }}>
                          discounted?
                        </Typography>
                        <Controller
                          name="isDiscounted"
                          control={control}
                          render={({ field }) => (
                            <Stack direction="row" alignItems="center">
                              <Checkbox
                                {...field}
                                style={{ color: "purple" }}
                              />
                            </Stack>
                          )}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                  <Image
                    style={{ margin: "auto", marginTop: 20 }}
                    src={image}
                    alt="Product"
                    width={140}
                    height={150}
                  />
                </Stack>

                <Button disabled={loading} type={"submit"}>
                  upload
                </Button>
              </form>
            </FormProvider>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
});

ProductScene.displayName = "ProductScene";
