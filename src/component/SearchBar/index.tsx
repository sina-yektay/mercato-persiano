import { memo } from "react";
import { useSearchBar } from "./index.hooks";
import {
  Avatar,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

type SearchBarType = { color: string; isMobile?: boolean };

export const SearchBar = memo(({ color, isMobile = false }: SearchBarType) => {
  const {
    searchQuery,
    handleSearchChange,
    filteredProducts,
    open,
    anchorEl,
    handleClose,
    handleItemClick,
  } = useSearchBar();
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.down("xl"));
  const { t } = useTranslation();
  return (
    <>
      <TextField
        sx={{
          border: "solid 1px",
          borderColor: isMobile ? "purple" : color,
          p: 0.5,
          borderRadius: isMobile ? 2 : 5,
          width: largeScreen ? (isMobile ? "250px" : "360px") : "590px",
        }}
        variant="standard"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: isMobile ? "purple" : color }} />
            </InputAdornment>
          ),
          sx: {
            color: isMobile ? "purple" : color,
            "& .MuiInputLabel-root": {
              display: "none",
            },
            "& .MuiInput-root": {
              border: "none",
              "&:before": {
                display: "none",
              },
              "&:after": {
                display: "none",
              },
              "&:hover": {
                borderBottom: "none",
              },
            },
          },
        }}
        placeholder={t("Find a product...")}
        InputLabelProps={{
          shrink: false,
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        disableAutoFocus
        sx={{
          "& .MuiPaper-root": {
            width: largeScreen ? (isMobile ? 220 : 250) : 500,
          },
        }}
      >
        <List sx={{ maxWidth: "100%" }}>
          {filteredProducts.map((item) => (
            <ListItem key={item.productId} disablePadding>
              <ListItemButton onClick={() => handleItemClick(item)}>
                <ListItemText primary={item.productName} />
                <ListItemAvatar>
                  <Avatar src={item.image} alt={item.productName} />
                </ListItemAvatar>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
});

SearchBar.displayName = "SearchBar";
