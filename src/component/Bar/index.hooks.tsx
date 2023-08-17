import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useBar = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [anchorLngEl, setAnchorLngEl] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorPopperEl, setAnchorPopperEl] = useState<any>(null);
  const { i18n } = useTranslation();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleOpenDialog = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(actions.changeSearchPopover({ searchPopoverState: true }));
    setAnchorPopperEl(event.currentTarget);
  };

  const isPopperOpen = useSelector(selectors.searchPopoverState);

  const handleClosePopper = () => {
    dispatch(actions.changeSearchPopover({ searchPopoverState: false }));
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorLngEl(event.currentTarget);
  };

  const handleCloseLng = (lng: string) => {
    i18n.changeLanguage(lng);
    setAnchorLngEl(null);
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  const open = Boolean(anchorEl);
  return {
    open,
    handleClick,
    handleClose,
    handleLogout,
    anchorEl,
    i18n,
    isScrolled,
    handleOpenDialog,
    handleClosePopper,
    isPopperOpen,
    anchorPopperEl,
    handleOpen,
    anchorLngEl,
    handleCloseLng,
    handleSignup,
    handleEditProfile,
  };
};
