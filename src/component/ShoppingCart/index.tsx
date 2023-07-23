import { memo } from "react";
import { useShoppingCart } from "./index.hooks";
import { Badge, Box, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
type ShoppingCartProps = {};

export const ShoppingCart = memo(({}: ShoppingCartProps) => {
  const { orderQuantity } = useShoppingCart();
  return (
    <IconButton aria-label="cart">
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
            transition: "transform 0.2s",marginBottom: "10px", marginRight: "20px"
          },
        }}
      >
        <AddShoppingCartIcon style={{ color: "white" }} />
      </Badge>
      </Box>
    </IconButton>
  );
});

ShoppingCart.displayName = "ShoppingCart";
