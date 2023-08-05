import { useRouter } from "next/router";
import { useState } from "react";

export const useMobileMenu = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    router.push("/Login");
    setAnchorEl(null);
  };

  const handleLogout = () => {
    router.push("/Signup");
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
