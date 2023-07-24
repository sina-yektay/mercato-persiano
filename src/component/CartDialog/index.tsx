import { memo } from "react";
import { useCartDialog } from "./index.hooks";
import {
  Dialog,
  Stack,
  DialogTitle,
  DialogActions,
  IconButton,
  DialogContent,
  DialogContentText,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type CartDialogType = {};

export const CartDialog = memo(({}: CartDialogType) => {
  const { isOpen, handleClose, productInCart, handleRemoveFromCart } = useCartDialog();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={isOpen}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Stack direction="row">
        <DialogTitle>Your Cart</DialogTitle>
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
          <List sx={{ maxWidth: "100%" }}>
            {productInCart.map((item) => (
              <ListItem key={item.productId} disablePadding>
                <ListItemText primary={item.productName} />
                <ListItemText primary={`Quantity: ${item.orderQuantity}`} />
                <ListItemAvatar>
                  <Avatar src={item.productImage} alt={item.productName} />
                </ListItemAvatar>
                <ListItemSecondaryAction>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemoveFromCart(item.productId)}
                  >
                    Remove
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
});

CartDialog.displayName = "CartDialog";
