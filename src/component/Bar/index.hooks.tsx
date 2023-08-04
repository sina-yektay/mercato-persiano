import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useBar = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n } = useTranslation();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    isScrolled,
  };
};
