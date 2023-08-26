import { memo } from "react";
import { useAddItemDialog } from "./index.hooks";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Stack,
  IconButton,
  TextField,
  Checkbox,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Controller, FormProvider } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";

type AddItemDialogType = {};

export const AddItemDialog = memo(({}: AddItemDialogType) => {
  const {
    handleClose,
    dialog,
    handleOpen,
    errors,
    watch,
    register,
    formData,
    onSubmit,
    loading,
    handleClear,
    control,
  } = useAddItemDialog();

  return (
    <>
      <Stack>
        <IconButton
          onClick={handleOpen}
          sx={{
            "&:hover": {
              bgcolor: "transparent",
              boxShadow: "none !important",
            },
          }}
        >
          <AddIcon style={{ fontSize: "100px" }} />
        </IconButton>
      </Stack>

      <Dialog
        open={dialog}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FormProvider {...formData}>
              <form onSubmit={onSubmit}>
                <Stack direction={"column"} spacing={2}>
                  <Stack>
                    {" "}
                    <TextField
                      sx={{ mt: 0.5 }}
                      id="outlined-basic"
                      {...register("productName")}
                      name="productName"
                      label="product name"
                      variant="outlined"
                    />{" "}
                  </Stack>
                  <Stack>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      {...register("productId")}
                      name="productId"
                      label="Product id"
                      variant="outlined"
                    />{" "}
                  </Stack>
                  <Stack>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      {...register("quantity")}
                      name="quantity"
                      label="quantity"
                      variant="outlined"
                    />{" "}
                  </Stack>
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      {...register("description")}
                      name="description"
                      label="description"
                      variant="outlined"
                    />
                  </Stack>
                  <Stack>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      {...register("price")}
                      name="price"
                      label="price"
                      variant="outlined"
                    />{" "}
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography sx={{ alignSelf: "center" }}>
                      discounted?
                    </Typography>
                    <Controller
                      name="isDiscounted"
                      control={control}
                      render={({ field }) => (
                        <Stack direction="row" alignItems="center">
                          <Checkbox {...field} style={{ color: "purple" }} />

                        </Stack>
                      )}
                    />
                  </Stack>
                  <Stack>
                    {" "}
                    <TextField
                      type="file"
                      inputProps={{ accept: "image/*" }}
                      {...register("image")}
                      name="image"
                    />
                    {watch("image") && (
                      <IconButton
                        sx={{
                          "&:hover": {
                            bgcolor: "transparent",
                            boxShadow: "none !important",
                          },
                        }}
                        onClick={handleClear}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Stack>
                </Stack>

                <Button disabled={loading} type={"submit"}>
                  upload
                </Button>
              </form>
            </FormProvider>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

{
  /* <input
accept="image/*"
id="photo-upload"
type="file"
onChange={handleFileSelect}
/> */
}

// const handleFileSelect = (event) => {
//   setSelectedFile(event.target.files[0]);
// };

// const [selectedFile, setSelectedFile] = useState(null);
