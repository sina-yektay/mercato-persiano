import { memo } from "react";
import { useAdminBar } from "./index.hooks";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

type AdminBarProp = {};

export const AdminBar = memo(({}: AdminBarProp) => {
  const {} = useAdminBar();

  return (
    <Box sx={{}}>
      <AppBar position="static" sx={{ backgroundColor: "purple" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Amministrazione
          </Typography>

          <Box sx={{ position: "relative", width: "25%" }}>
            <IconButton
              sx={{
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "40px",
              }}
            >
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
            <InputBase
              placeholder="Search…"
              sx={{ paddingLeft: "40px", color: "white" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

AdminBar.displayName = "AdminBar";
