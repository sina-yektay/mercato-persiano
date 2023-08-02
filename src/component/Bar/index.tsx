import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Stack,
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
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

type BarProps = {};

export const Bar = memo(({}: BarProps) => {
  const {
    open,
    handleClick,
    handleClose,
    handleLogout,
    anchorEl,
    i18n,
    handleLangChange,
  } = useBar();
  const theme = useTheme();
  const { data: session } = useSession();
  const smallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <AppBar position="static" sx={{ margin: 0, backgroundColor: "purple" }}>
      <Toolbar>
        <Stack
          direction="row"
          spacing={smallScreen && mediumScreen ? 4 : smallScreen ? 5 : 10}
        >
          <Stack>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mercato{" "}
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "#FDDA0D" }}
              >
                Persiano
              </Typography>
            </Typography>
          </Stack>
          {!mediumScreen && (
            <>
              <Stack sx={{ justifyContent: "center" }}>
                <Link href={"/About"}>
                  <Typography sx={{ color: "white" }}>Chi Siamo</Typography>
                </Link>
              </Stack>
              <Stack sx={{ justifyContent: "center" }}>
                <Link href={"/offerte"}>
                  <Typography sx={{ color: "white" }}>Offerte</Typography>
                </Link>
              </Stack>
            </>
          )}
          <Box>
            <ShoppingCart />
          </Box>
          {/* {!smallScreen && session && (
            <Typography
              sx={{ fontSize: "23px", color: "#FDDA0D" }}
              variant="h6"
            >
              {session?.user?.email}
            </Typography>
          )} */}
        </Stack>
        <Stack sx={{ margin: "auto" }}>
          <SearchBar />
        </Stack>
        <Stack sx={{ marginRight: "auto" }} direction={"row"}>
          <Button
            onClick={() => {
              handleLangChange("it");
            }}
            variant={i18n.language === "it" ? "outlined" : "text"}
            style={{
              minWidth: 0,
              padding: 4,
              color: "white",
              borderColor: "white",
            }}
          >
            IT
          </Button>
          <Button
            onClick={() => {
              handleLangChange("en");
            }}
            variant={i18n.language === "en" ? "outlined" : "text"}
            style={{
              minWidth: 0,
              padding: 4,
              color: "white",
              borderColor: "white",
            }}
          >
            EN
          </Button>
        </Stack>
        {session ? (
          <Stack
            direction={"row"}
            sx={{ marginLeft: "auto", justifyContent: "center" }}
          >
            <Typography sx={{ alignSelf: "center" }}>
              {t("Hi")} {session?.user?.name}
            </Typography>
            <Tooltip title="User Menu" placement="bottom">
              <IconButton onClick={handleClick}>
                <PermIdentityIcon style={{ color: "white" }} />
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
                <Button sx={{ color: "white" }}>{t("Login")}</Button>
              </Link>
            </Stack>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ width: "2px", backgroundColor: "white" }}
            />
            <Stack>
              <Link href={"/Signup"}>
                <Button sx={{ color: "white" }}>{t("Signup")}</Button>
              </Link>
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
});

Bar.displayName = "Bar";
