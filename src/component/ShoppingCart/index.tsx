import { memo } from "react";
import { useShoppingCart } from "./index.hooks";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
type ShoppingCartProps = {};

export const ShoppingCart = memo(({}: ShoppingCartProps) => {
  const {} = useShoppingCart();
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={1} color="secondary">
        <AddShoppingCartIcon style={{ color: "white" }} />
      </Badge>
    </IconButton>
  );
});

ShoppingCart.displayName = "ShoppingCart";
