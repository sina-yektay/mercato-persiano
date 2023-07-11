import { Box, Tab, Tabs } from "@mui/material";
import { memo } from "react";
import { useProductTab } from "./index.hooks";

type ProductTabProps = {};

export const ProductTab = memo(() => {
  const { handleChange, tabNumber } = useProductTab();
  return (
    <Box style={{ justifyContent: "center", borderBottom: "solid purple 5px" }}>
      <Tabs
        indicatorColor="secondary"
        value={tabNumber}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Landing page"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Snack"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Coffee"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Vegetable"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Bread"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Ready meals"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Drinks"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Nut"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="ice cream"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Souvenir"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Nuts"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Ready meals"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "purple",
            },
          }}
          label="Breakfast"
        />
      </Tabs>
    </Box>
  );
});
