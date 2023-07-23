import { memo } from "react";
import { useProductDialog } from "./index.hooks";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type productDialogType = {};

export const ProductDialog = memo(({}: productDialogType) => {
  const { dialog, handleClose, handleAddProduct } = useProductDialog();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      open={dialog.isDialogOpen}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Stack direction="row">
        <DialogTitle>{dialog.productName}</DialogTitle>
        <DialogActions sx={{ marginLeft: "auto" }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Stack>

      <DialogContent
        sx={{
          width: smallScreen ? "300px" : "400px",
          height: smallScreen ? "400px" : "500px",
        }}
      >
        <DialogContentText id="alert-dialog-slide-description">
          <Card sx={{ boxShadow: "none", maxWidth: "100%", maxHeight: "100%" }}>
            <Stack>
              <CardMedia
                component="img"
                height={smallScreen ? 300 : 400}
                width={smallScreen ? 200 : 300}
                image={dialog.image}
                alt="Product"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {dialog.price}
                </Typography>
              </CardContent>

              <CardActions sx={{ margin: "auto" }}>
                <Button
                  onClick={(event) => {
                    event.stopPropagation();
                    handleAddProduct();
                  }}
                  disabled={dialog.quantity === 0 ? true : false}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  {dialog.quantity === 0 ? "not available" : "Add To Cart"}
                </Button>
              </CardActions>
            </Stack>
          </Card>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
});

ProductDialog.displayName = "ProductDialog";
