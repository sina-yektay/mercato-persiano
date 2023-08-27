import { Box, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { memo } from "react";
import { useProductTab } from "./index.hooks";
import { useTranslation } from "react-i18next";

type ProductTabProps = {};

export const ProductTab = memo(() => {
  const { handleChange, tabNumber, isScrolled } = useProductTab();
  const { t } = useTranslation();
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      position="sticky"
      zIndex={1000}
      top={mediumScreen ? "55px" : "63px"}
      style={{ justifyContent: "center", borderBottom: "solid purple 5px" }}
    >
      <Tabs
        indicatorColor="secondary"
        value={tabNumber}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          backgroundColor: isScrolled ? "purple" : "white",
        }}
      >
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Home")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("All products")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Snack")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Coffee")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Vegetable")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Bread")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Ready meals")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Drinks")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Nut")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Ice cream")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Saffron")}
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label={t("Breakfast")}
        />
      </Tabs>
    </Box>
  );
});
