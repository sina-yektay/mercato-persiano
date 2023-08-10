import { memo } from "react";
import { useProductDialog } from "./index.hooks";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import product from "@/spas/adminSpa/redux-store/slices/product";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
type productDialogType = {};

export const ProductDialog = memo(({}: productDialogType) => {
  const {
    dialog,
    handleClose,
    handleAddProduct,
    t,
    handleAccordionChange,
    expanded,
  } = useProductDialog();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      open={dialog.isDialogOpen}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{}}
    >
      <Stack direction="row">
        <DialogTitle>{dialog.productName}</DialogTitle>
        <DialogActions sx={{ marginLeft: "auto" }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Stack>

      <DialogContent
        sx={{
          width: smallScreen ? "250px" : "400px",
          height: smallScreen ? "350px" : "470px",
        }}
      >
        <DialogContentText id="alert-dialog-slide-description">
          <Card sx={{ boxShadow: "none", maxWidth: "100%", maxHeight: "100%" }}>
            <Stack>
              <CardMedia
                component="img"
                height={smallScreen ? 200 : 300}
                width={smallScreen ? 130 : 200}
                image={dialog.image}
                alt="Product"
              />

              <CardContent>
                <Stack direction={"column"}>
                  <Stack sx={{ my: 1 }}>
                    <Accordion
                      expanded={expanded}
                      onChange={handleAccordionChange}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">
                          {t("Product Description")}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2">
                          {t(dialog.description)}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Stack>
                  <Stack sx={{ margin: "auto" ,}}>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {dialog.price}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>

              <CardActions sx={{ margin: "auto" }}>
                <Button
                  onClick={(event) => {
                    event.stopPropagation();
                    handleAddProduct();
                  }}
                  disabled={dialog.quantity === 0 ? true : false}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  {dialog.quantity === 0
                    ? t("Not available")
                    : t("Add To Cart")}
                </Button>
              </CardActions>
            </Stack>
          </Card>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
});

ProductDialog.displayName = "ProductDialog";
