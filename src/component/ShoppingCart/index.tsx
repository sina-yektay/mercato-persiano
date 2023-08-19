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
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import InfoIcon from "@mui/icons-material/Info";
type ShoppingCartProps = { color: string };

export const ShoppingCart = memo(({ color }: ShoppingCartProps) => {
  const {
    orderQuantity,
    isOpen,
    handleClose,
    productInCart,
    handleRemoveFromCart,
    handleDialog,
    handleAddFromCart,
    totalPrice,
    t,
    session,
    handlePayment,
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
            <AddShoppingCartIcon style={{ color: color }} />
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
          <DialogTitle>{t("Your Cart")}</DialogTitle>
          <DialogActions sx={{ marginLeft: "auto" }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Stack>

        <DialogContent
          sx={{
            width: smallScreen ? "280px" : "400px",
            minHeight: smallScreen ? "200px" : "300px",
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
                {t("there is no product in your cart")}
              </Typography>
            </Box>
          ) : (
            <DialogContentText id="alert-dialog-slide-description">
              <Stack>
                <Box
                  sx={{
                    minHeight: "100px",
                    maxHeight: "250px",
                    overflowY: "auto",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                    mb: 2,
                  }}
                >
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

                          <Badge
                            badgeContent={item.orderQuantity}
                            color="primary"
                          >
                            {" "}
                            <Avatar
                              src={item.productImage}
                              alt={item.productName}
                            />
                          </Badge>
                          <Stack direction={"row"} spacing={1}>
                            <IconButton onClick={() => handleAddFromCart(item)}>
                              <AddIcon />
                            </IconButton>
                            <IconButton
                              onClick={() =>
                                handleRemoveFromCart(item.productId)
                              }
                            >
                              <RemoveIcon />
                            </IconButton>
                          </Stack>
                        </Box>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <Stack
                    sx={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                    direction={"row"}
                  >
                    <Stack>
                      <Typography sx={{ pb: 0.5, margin: "auto" }}>
                        {t("Delivery address:")}
                      </Typography>
                    </Stack>
                    <Stack sx={{ alignSelf: "center" }}>
                      <Tooltip
                        arrow
                        placement="top"
                        enterTouchDelay={300}
                        title={t(
                          "your cart will be delivered to the address below"
                        )}
                      >
                        <IconButton>
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Stack>
                  <TextField
                    sx={{ width: "100%" }}
                    value={session?.user?.address}
                    disabled={session ? true : false}
                  />
                </Box>
                <Typography sx={{ py: 1.5, margin: "auto" }}>
                  {t("To Pay")}: {totalPrice}€{" "}
                  {totalPrice < 20 ? t("+ 5€ (delivery cost)") : ""}
                </Typography>

                <Button onClick={handlePayment} variant="contained">
                  {t("Proceed")}
                </Button>
              </Stack>
            </DialogContentText>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
});

ShoppingCart.displayName = "ShoppingCart";
