import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store/slices";

type AboutSceneProps = {};

export const AboutScene = memo(() => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: false }));
  });
  return (
    <Grid
      container
      sx={{
        paddingX: smallScreen ? 2 : 5,
        background:
          "linear-gradient(to bottom, #E75480, rgba(255, 255, 255, 1))",
      }}
    >
      <Grid item container sx={{ paddingY: 5 }} xs={12}>
        <Typography
          sx={{
            margin: smallScreen ? "none" : "auto",
            fontSize: "21px",
            fontWeight: "bold",
            opacity: 1,
          }}
        >
          {t("Welcome to TorinAsia - Your Gateway to Authentic Asian Flavors!")}
        </Typography>
      </Grid>
      <Grid item container sx={{ paddingY: 2 }} xs={12}>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          {" "}
          <Typography sx={{ fontSize: "18px", opacity: 1, fontWeight: "bold" }}>
            {t("Our Journey:")}
          </Typography>
        </Grid>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          <Typography sx={{ fontSize: "17px", opacity: 1 }}>
            {t(
              "Founded in 2020 amidst the enchanting city of Turin, Italy, TorinAsia embarked on a mission to bring the heartwarming essence of Asian groceries to your doorstep. Our story began with a passion for connecting cultures, bridging the gap between continents, and curating a treasure trove of flavors that reflect the vibrant spirit of Asian markets."
            )}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container sx={{ paddingY: 2 }} xs={12}>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          {" "}
          <Typography sx={{ fontSize: "18px", opacity: 1, fontWeight: "bold" }}>
            {t("Unveiling Asia's Treasures:")}
          </Typography>
        </Grid>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          <Typography sx={{ fontSize: "17px", opacity: 1 }}>
            {t(
              "At TorinAsia, we pride ourselves on offering a curated selection of fresh Asian products that transport you straight to the bustling streets of Tokyo, the spice-scented bazaars of Iran, the vibrant markets of China, the cultural tapestry of Lebanon, and beyond. Our virtual shelves are adorned with an array of delicacies and staples that are a cherished part of daily life in Asia."
            )}
          </Typography>
        </Grid>
      </Grid>

      <Grid item container sx={{ paddingY: 2 }} xs={12}>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          {" "}
          <Typography sx={{ fontSize: "18px", opacity: 1, fontWeight: "bold" }}>
            {t("Seamless Online Shopping:")}
          </Typography>
        </Grid>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          <Typography sx={{ fontSize: "17px", opacity: 1 }}>
            {t(
              "Say goodbye to the challenges of finding your favorite Asian ingredients in a foreign land. With just a few clicks, you can explore our digital aisles and discover a diverse range of products that are often homesickness remedies for many. From the rarest spices to the most beloved snacks, TorinAsia brings the heart of Asia right to your screen."
            )}
          </Typography>
        </Grid>
      </Grid>

      <Grid item container sx={{ paddingY: 2 }} xs={12}>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          {" "}
          <Typography sx={{ fontSize: "18px", opacity: 1, fontWeight: "bold" }}>
            {t("Express Delivery to Your Doorstep:")}
          </Typography>
        </Grid>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          <Typography sx={{ fontSize: "17px", opacity: 1 }}>
            {t(
              "Living in the enchanting city of Turin has its perks, and one of them is the convenience of our express delivery service. With a commitment to swift delivery, we ensure that your ordered products reach you within minutes. Our efficient delivery network is exclusively tailored to serve the picturesque corners of Turin, ensuring you have a taste of Asia at your table whenever you desire."
            )}
          </Typography>
        </Grid>
      </Grid>

      <Grid item container sx={{ paddingY: 2 }} xs={12}>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          {" "}
          <Typography sx={{ fontSize: "18px", opacity: 1, fontWeight: "bold" }}>
            {t("A Taste of Home for Students:")}
          </Typography>
        </Grid>
        <Grid item container sx={{ paddingY: 0 }} xs={12}>
          <Typography sx={{ fontSize: "17px", opacity: 1 }}>
            {t(
              "We understand the yearning that comes with being a young student away from the familiar flavors of home. TorinAsia is dedicated to catering to the Asian student community in Turin, helping them reconnect with the tastes that evoke memories of family gatherings, celebrations, and daily rituals. Our products are a nostalgic embrace, a reminder that distance is just a number."
            )}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
});

AboutScene.displayName = "AboutScene";
