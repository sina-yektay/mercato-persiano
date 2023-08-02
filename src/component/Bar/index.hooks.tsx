import { signOut } from "next-auth/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useBar = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const { i18n } = useTranslation();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut();
  };

  const handleLangChange = (lng: string) => {
    i18n.changeLanguage(lng);
    console.log("wwwwwwwwjwkjdkosjdkwejfeswwwwwwwww");
  };

  const open = Boolean(anchorEl);
  return {
    open,
    handleClick,
    handleClose,
    handleLogout,
    anchorEl,
    handleLangChange,
    i18n,
  };
};
