import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { memo } from "react";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { useMobileMenu } from "./index.hooks";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

type MobileMenuType = { isScrolled: boolean };

export const MobileMenu = memo(({ isScrolled = false }: MobileMenuType) => {
  const {
    anchorEl,
    handleMenuClick,
    handleLogin,
    handleLogout,
    handleMenuClose,
  } = useMobileMenu();
  return (
    <Box>
      <IconButton onClick={handleMenuClick}>
        <MoreVertIcon style={{ color: isScrolled ? "purple" : "white" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogin}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <HowToRegIcon />
          </ListItemIcon>
          <ListItemText primary="Signup" />
        </MenuItem>
      </Menu>
    </Box>
  );
});

MobileMenu.displayName = "MobileMenu";
