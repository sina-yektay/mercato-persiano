import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { memo } from "react";
import { useLandingScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { CustomLink } from "@/component/CustomLink";
import { ProductCard } from "@/component/ProductCard";
import Image from "next/image";
import { Link } from "react-router-dom";
import bread from "../../../../../public/assets/uk.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type LandingSceneProps = {};

export const LandingScene = memo(({}: LandingSceneProps) => {
  const {
    handleClick,
    handleStepChange,
    activeStep,
    images,
    visibleStep,
    handleStepChangeForward,
  } = useLandingScene();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const xlScreen = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <Box
      position="relative"
      width="100%"
      sx={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: xlScreen ? "480px" : "750px",
        pt: 0,
      }}
    >
      <IconButton
        onClick={handleStepChange}
        style={{ position: "absolute", left: 0, zIndex: 999 }}
      >
        <ArrowBackIcon style={{ fontSize: 52 }} />
      </IconButton>

      <Link to={images[activeStep].link}>
        <Image
          src={images[activeStep].img}
          alt={"shopping"}
          layout={"fill"}
          objectFit="contain"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: activeStep === visibleStep ? 1 : 0,
          }}
        />
      </Link>
      <IconButton
        onClick={handleStepChangeForward}
        style={{ position: "absolute", right: 0, zIndex: 999 }}
      >
        <ArrowForwardIcon style={{ fontSize: 52 }} />
      </IconButton>

      {/* <Grid
        container
        sx={{
            p:0,
            justifyContent: "flex-start" ,
        //   pt: 5,
          ...(smallScreen ? { paddingLeft: 4.5 } : { paddingLeft: 5 }),
        }}
        spacing={0}
      >
        {groceryItems.map((item, index) => {
          return (
            <Grid item xs={6} sm={3} md={2} xl={1.5} key={index} sx={{ marginTop: "20px" }}>
              <ProductCard
                url={item.to}
                img={item.img}
                product={item.product}
              />
            </Grid>
          );
        })}
      </Grid> */}
    </Box>
  );
});

LandingScene.displayName = "LandingScene";
