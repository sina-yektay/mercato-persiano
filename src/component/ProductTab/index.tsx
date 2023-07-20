import { Box, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { memo } from "react";
import { useProductTab } from "./index.hooks";

type ProductTabProps = {};

export const ProductTab = memo(() => {
  const { handleChange, tabNumber, isScrolled } = useProductTab();
  return (
    <Box
      position="sticky"
      zIndex={999}
      top="0"
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
          label="Landing page"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Snack"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Coffee"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Vegetable"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Bread"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Ready meals"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Drinks"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Nut"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="ice cream"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Souvenir"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Nuts"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Ready meals"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: isScrolled ? "purple" : "white",
              backgroundColor: isScrolled ? "white" : "purple",
            },
            color: isScrolled ? "white" : "purple",
          }}
          label="Breakfast"
        />
      </Tabs>
    </Box>
  );
});
