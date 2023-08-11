import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Slide,
  Stack,
  Typography,
  Zoom,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { memo } from "react";
import { useLandingScene } from "./index.hooks";

import Image from "next/image";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ItemCard } from "@/component/ItemCard";
import { OfferedProductsCarousel } from "@/component/OfferedProductsCarousel";

type LandingSceneProps = {};

export const LandingScene = memo(({}: LandingSceneProps) => {
  const {
    handleClick,
    handleStepChange,
    activeStep,
    images,
    visibleStep,
    handleStepChangeForward,
    imageVisibleStep,
    imageActiveStep,
    textSlider,
    t,
    i18n,
    products,
    handleScrollDown,
    handleShopNow,
  } = useLandingScene();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const xlScreen = useMediaQuery(theme.breakpoints.down("xl"));
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const lgScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box>
      <Box
        position="relative"
        width="100%"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          // height: xlScreen ? "480px" : "750px",
          height: "auto",
          pt: 0,
        }}
      >
        <IconButton
          onClick={handleStepChange}
          style={{ position: "absolute", left: 0, zIndex: 999 }}
        >
          <ArrowBackIcon style={{ fontSize: 52 }} />
        </IconButton>
        <Grid
          container
          direction={"row"}
          sx={{
            alignItems: "stretch",
            transition: "opacity 0.5s ease-in-out",
            opacity: activeStep === visibleStep ? 1 : 0,
          }}
        >
          <Grid item container xs={12} md={5} direction={"column"} sx={{}}>
            <Grid
              item
              container
              xs={mdScreen ? 2 : 7}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                color: "purple",
                pl: 0,
                mt: mdScreen ? 2 : 0,
              }}
            >
              <Stack sx={{}}>
                <Slide
                  timeout={{ enter: 1000, exit: 0 }}
                  in={textSlider}
                  direction="down"
                >
                  <Typography
                    sx={{
                      fontSize:
                        i18n.language === "en"
                          ? lgScreen
                            ? "30px"
                            : "50px"
                          : lgScreen
                          ? "25px"
                          : "36px",
                    }}
                  >
                    {t("Asian grocery store")}
                  </Typography>
                </Slide>
              </Stack>
            </Grid>
            <Grid
              xs={mdScreen ? 3 : 5}
              item
              container
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "100px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Slide
                  timeout={{ enter: 1000, exit: 0 }}
                  in={textSlider}
                  direction="up"
                >
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{ justifyContent: "flex-start" }}
                  >
                    <Stack>
                      <Button
                        onClick={handleShopNow}
                        style={{
                          backgroundColor: "#9932CC",
                          width: "130px",
                          color: "white",
                        }}
                      >
                        {t("Shop now!")}
                      </Button>
                    </Stack>
                    <Stack>
                      <Button
                        onClick={handleScrollDown}
                        style={{
                          backgroundColor: "#9932CC",
                          width: "130px",
                          color: "white",
                        }}
                      >
                        {t("Offers")}
                      </Button>
                    </Stack>
                  </Stack>
                </Slide>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              maxWidth: xlScreen ? "800px" : "1000px",
              maxHeight: xlScreen ? "650px" : "850px",
            }}
          >
            <Link to={images[activeStep].link}>
              <Image
                src={images[activeStep].img}
                alt={"shopping"}
                layout={"responsive"}
                objectFit="contain"
                style={{}}
              />
            </Link>
          </Grid>
        </Grid>
        <IconButton
          onClick={handleStepChangeForward}
          style={{ position: "absolute", right: 0, zIndex: 999 }}
        >
          <ArrowForwardIcon style={{ fontSize: 52 }} />
        </IconButton>
      </Box>

      <Divider sx={{ marginTop: "70px" }}>
        <Typography color="textSecondary" sx={{ opacity: 0.6 }}>
          {t("Offers")}
        </Typography>
      </Divider>

      <Box sx={{ paddingTop: "50px" }}>
        <OfferedProductsCarousel />
      </Box>
    </Box>
  );
});

LandingScene.displayName = "LandingScene";
