import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { memo } from "react";
import { useBar } from "./index.hooks";
import { ShoppingCart } from "../ShoppingCart";
import Link from "next/link";
import { SearchBar } from "../SearchBar";

type BarProps = {};

export const Bar = memo(({}: BarProps) => {
  const {} = useBar();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" sx={{ margin: 0, backgroundColor: "purple" }}>
      <Toolbar>
        <Stack direction="row" spacing={ smallScreen && mediumScreen ? 4 : smallScreen ? 5 : 10 }>
          <Stack>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mercato{" "}
            <Typography variant="h6" component="span" sx={{ color: "#FDDA0D" }}>
              Persiano
            </Typography>
          </Typography>
          </Stack>
          {!mediumScreen && 
          <><Stack sx={{ justifyContent: "center" }}>

              <Link href={"/About"}>
                <Typography sx={{ color: "white" }}>Chi Siamo</Typography>
              </Link>
            </Stack><Stack sx={{ justifyContent: "center" }}>
                <Link href={"/offerte"}>
                  <Typography sx={{ color: "white" }}>Offerte</Typography>
                </Link>
              </Stack></>
          }
          <Box>
            <ShoppingCart />
          </Box>
          {!smallScreen && (
            <Typography
              sx={{ fontSize: "23px", color: "#FDDA0D" }}
              variant="h6"
            >
              سوپرمارکت ایرانی
            </Typography>
          )}
         
        </Stack>
        <Stack sx={{margin:"auto"}}><SearchBar /></Stack>
      </Toolbar>
    </AppBar>
  );
});

Bar.displayName = "Bar";
