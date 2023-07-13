import { actions } from "@/spas/adminSpa/redux-store/slices";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { S3 } from "aws-sdk";

const schema = yup.object().shape({
  productName: yup.string().required("product name is required"),
  productId: yup.string().min(4).required(),
  price: yup.string().required(),
  quantity: yup.number().required(),
  image: yup
    .mixed()
    .test("fileType", "Invalid file format", function (value) {
      if (!value) return false; // Skip validation if no file is selected

      const supportedFormats = ["image/jpeg", "image/png", "image/gif"];
      const fileList = value as FileList;
      const file = fileList[0];
      const isValidFormat = supportedFormats.includes(file.type);
      return isValidFormat;
    })
    .nullable(),
});

export const useAddItemDialog = () => {
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setDialog(false);
  };

  const handleOpen = () => {
    setDialog(true);
  };

  const dispatch = useDispatch();

  type itemFormData = {
    productName: string;
    productId: string;
    price: string;
    quantity: number;
    image: FileList | null;
  };

  const formData = useForm<itemFormData>({
    resolver: yupResolver(schema) as Resolver<itemFormData>,
    defaultValues: {
      productName: "",
      productId: "",
      price: "",
      quantity: 0,
      image: null,
    },
  });

  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
    setValue,
  } = formData;

  const handleClear = () => {
    setValue("image", null);
  };

  const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  async function uploadFileToS3(file: FileList): Promise<string> {
    const fileName = file[0].name;
    const fileBlob = new Blob([file[0]], { type: file[0].type });

    const params = {
      Bucket: "sina9612-bucket",
      Key: fileName,
      Body: file[0],
      ContentType: "image/jpeg",
      ContentDisposition: "inline",
    };

    try {
      const { Location } = await s3.upload(params).promise();
      return Location;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }

  const handleUpload = async (image: FileList | null) => {
    try {
      if (image !== null) {
        const imageUrl = await uploadFileToS3(image);
        console.log("File uploaded:", imageUrl);
        return imageUrl;
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const onSubmit = handleSubmit(
    (formData: {
      productName: string;
      productId: string;
      price: string;
      quantity: number;
      image: FileList | null;
    }) => {
      setLoading(true);
      handleUpload(formData.image)
        .then((imageUrl) => {
          dispatch(
            actions.postItem.request({
              productId: formData.productId,
              productName: formData.productName,
              price: formData.price,
              quantity: formData.quantity,
              image: imageUrl || "",
            })
          );
          setDialog(false);
          setValue("productName", "");
          setValue("productId", "");
          setValue("price", "");
          setValue("quantity", 0);
          setValue("image", null);
          setLoading(false);
        })
        .catch((error) => {
          dispatch(
            actions.setFeedback({
              isOpen: true,
              message: "Error in uploading the image",
              type: "warning",
            })
          );
          setDialog(false);
          setValue("productName", "");
          setValue("productId", "");
          setValue("price", "");
          setValue("quantity", 0);
          setValue("image", null);
          setLoading(false);
          console.log(
            "the handleUpload function in AdminDashboard returned an error(line: 121)"
          );
        });
    }
  );

  return {
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
  };
};
