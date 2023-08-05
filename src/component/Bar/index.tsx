import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Popover,
  Popper,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { memo } from "react";
import { useBar } from "./index.hooks";
import { ShoppingCart } from "../ShoppingCart";
import Link from "next/link";
import { SearchBar } from "../SearchBar";
import { useSession, signOut } from "next-auth/react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";
import { Search as SearchIcon } from "@mui/icons-material";
import Image from "next/image";

type BarProps = {};

export const Bar = memo(({}: BarProps) => {
  const {
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
  } = useBar();
  const theme = useTheme();
  const { data: session } = useSession();
  const smallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <AppBar
      position="sticky"
      sx={{
        margin: 0,
        backgroundColor: isScrolled ? "white" : "purple",
        border: isScrolled ? "3px solid purple" : "none",
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          spacing={smallScreen && mediumScreen ? 4 : smallScreen ? 5 : 10}
          sx={{ alignItems: "center" }}
        >
          <Stack>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: isScrolled ? "purple" : "white" }}
            >
              TorinAsia
            </Typography>
          </Stack>
          {!mediumScreen && (
            <>
              {/* <Stack sx={{ justifyContent: "center" }}>
                <Link style={{ textDecoration: "none" }} href={"/About"}>
                  <Typography sx={{ color: isScrolled ? "purple" : "white" }}>
                    Chi Siamo
                  </Typography>
                </Link>
              </Stack> */}
              <Stack sx={{ justifyContent: "center" }}>
                <Link style={{ textDecoration: "none" }} href={"/offerte"}>
                  <Typography sx={{ color: isScrolled ? "purple" : "white" }}>
                    {t("Offers")}
                  </Typography>
                </Link>
              </Stack>
            </>
          )}
          <Box>
            <ShoppingCart color={isScrolled ? "purple" : "white"} />
          </Box>
        </Stack>

        <Stack sx={{ margin: "auto" }}>
          {!mediumScreen ? (
            <SearchBar color={isScrolled ? "purple" : "white"} />
          ) : (
            <>
              <IconButton onClick={handleOpenDialog}>
                <SearchIcon
                  style={{ color: isScrolled ? "purple" : "white" }}
                />
              </IconButton>
              <Popover
                open={isPopperOpen}
                anchorEl={anchorPopperEl}
                onClose={handleClosePopper}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <ClickAwayListener onClickAway={handleClosePopper}>
                  <Paper sx={{ p: 1.5 }}>
                    <SearchBar
                      isMobile={true}
                      color={isScrolled ? "purple" : "white"}
                    />
                  </Paper>
                </ClickAwayListener>
              </Popover>
            </>
          )}
        </Stack>

        <Stack sx={{marginRight:"2%"}}>
          <Button onClick={handleOpen}>
            <Image
              src={i18n.language === "en" ? "/assets/uk.png" : "/assets/it.png"}
              alt={i18n.language === "en" ? "English" : "Italian"}
              width={20}
              height={20}
            />
          </Button>
          <Popover
            open={Boolean(anchorLngEl)}
            anchorEl={anchorLngEl}
            onClose={handleCloseLng}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleCloseLng("it")}>
                  <Stack direction={"row"} spacing={2}>
                    <Image
                      src="/assets/it.png"
                      alt="Italy Flag"
                      width={20}
                      height={20}
                    />
                    <ListItemText primary="Italiano" />
                  </Stack>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleCloseLng("en")}>
                  <Stack direction={"row"} spacing={2}>
                    <Image
                      src="/assets/uk.png"
                      alt="UK Flag"
                      width={20}
                      height={20}
                    />
                    <ListItemText primary="English" />
                  </Stack>
                </ListItemButton>
              </ListItem>
            </List>
          </Popover>
        </Stack>

        {session ? (
          <Stack
            direction={"row"}
            sx={{ marginLeft: "auto", justifyContent: "center" }}
          >
            <Typography
              sx={{
                alignSelf: "center",
                color: isScrolled ? "purple" : "white",
              }}
            >
              {t("Hi")} {session?.user?.name}
            </Typography>
            <Tooltip title="User Menu" placement="bottom">
              <IconButton onClick={handleClick}>
                <PermIdentityIcon
                  style={{ color: isScrolled ? "purple" : "white" }}
                />
              </IconButton>
            </Tooltip>
            <Popover
              id={"wwwe"}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <List sx={{ maxWidth: "100%" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleLogout}>
                    <ListItemText
                      style={{ paddingRight: 20 }}
                      primary={"Logout"}
                    />
                    <LogoutIcon />
                  </ListItemButton>
                </ListItem>
              </List>
            </Popover>
          </Stack>
        ) : (
          <>
            <Stack>
              <Link href={"/Login"}>
                <Button sx={{ color: isScrolled ? "purple" : "white" }}>
                  {t("Login")}
                </Button>
              </Link>
            </Stack>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                width: "2px",
                backgroundColor: isScrolled ? "purple" : "white",
              }}
            />
            <Stack>
              <Link href={"/Signup"}>
                <Button sx={{ color: isScrolled ? "purple" : "white" }}>
                  {t("Signup")}
                </Button>
              </Link>
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
});

Bar.displayName = "Bar";
