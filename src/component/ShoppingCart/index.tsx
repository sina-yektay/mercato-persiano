import { memo } from "react";
import { useShoppingCart } from "./index.hooks";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
type ShoppingCartProps = {};

export const ShoppingCart = memo(({}: ShoppingCartProps) => {
  const {
    orderQuantity,
    isOpen,
    handleClose,
    productInCart,
    handleRemoveFromCart,
    handleDialog,
  } = useShoppingCart();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <IconButton onClick={handleDialog} aria-label="cart">
        <Box sx={{}}>
          <Badge
            badgeContent={orderQuantity}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#f50057",
                transform: `scale(${orderQuantity % 2 === 0 ? 1.2 : 1.4})`,
                transition: "transform 0.2s",
                marginBottom: "10px",
                marginRight: "20px",
              },
            }}
          >
            <AddShoppingCartIcon style={{ color: "white" }} />
          </Badge>
        </Box>
      </IconButton>
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
          {orderQuantity === 0 ? (
            <Box
              sx={{
                height: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: smallScreen ? "19px" : "25px" }}>
                there is no product in your cart
              </Typography>
            </Box>
          ) : (
            <DialogContentText id="alert-dialog-slide-description">
              <List sx={{ maxWidth: "100%" }}>
                {productInCart.map((item) => (
                  <ListItem key={item.productId} disablePadding>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ width: "100%", p: 1, marginBottom: 1 }}
                    >
                      <Box
                        sx={{
                          width: "160px",
                          display: "flex",
                          justifyContent: "center",
                          py: 0.35,
                          bgcolor: "#9c27b0",
                          color: "white",
                          borderRadius: 1.5,
                        }}
                      >
                        <Box>
                          <ListItemText primary={item.productName} />
                        </Box>
                      </Box>

                      <Badge badgeContent={item.orderQuantity} color="primary">
                        {" "}
                        <Avatar
                          src={item.productImage}
                          alt={item.productName}
                        />
                      </Badge>
                      <Stack direction={"row"} spacing={1}>
                        <IconButton
                          onClick={() => handleRemoveFromCart(item.productId)}
                        >
                          <AddIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleRemoveFromCart(item.productId)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        {/* <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleRemoveFromCart(item.productId)}
                        >
                          Remove
                        </Button> */}
                      </Stack>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </DialogContentText>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
});

ShoppingCart.displayName = "ShoppingCart";
