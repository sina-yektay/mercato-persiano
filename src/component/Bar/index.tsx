import { AppBar, Box, Button, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { memo } from "react";
import { useBar } from "./index.hooks";
import { ShoppingCart } from "../ShoppingCart";

type BarProps = {};

export const Bar = memo(({}: BarProps) => {
  const {} = useBar();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ margin: 0, backgroundColor:"purple" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mercato <Typography variant="h6" component="span" sx={{color:"#FDDA0D"}}>Persiano</Typography>
        </Typography>
        <Box>
        <ShoppingCart />
        </Box>
        {!smallScreen && 
          <Typography sx={{fontSize:"23px", color:"#FDDA0D"}} variant="h6">سوپرمارکت ایرانی</Typography>
        }

      </Toolbar>
    </AppBar>
  );
});



Bar.displayName = "Bar";