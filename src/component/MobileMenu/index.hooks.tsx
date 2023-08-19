import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useMobileMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    navigate("/login");
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate("/signup");
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    handleMenuClick,
    handleLogin,
    handleLogout,
    handleMenuClose,
  };
};
