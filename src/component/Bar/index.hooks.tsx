import { signOut } from "next-auth/react";
import { useState } from "react";

export const useBar = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut();
  };

  const open = Boolean(anchorEl);
  return { open, handleClick, handleClose, handleLogout, anchorEl };
};
