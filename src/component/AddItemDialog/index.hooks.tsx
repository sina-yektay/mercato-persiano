import { actions } from "@/spas/adminSpa/redux-store/slices";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { S3 } from "aws-sdk";

const schema = yup.object().shape({
  productName: yup.string().required("product name is required"),
  productId: yup.string().min(4).required(),
  price: yup.string().required(),
  quantity: yup.number().required(),
  description: yup.string().required(),
  isDiscounted: yup.boolean().required(),
  image: yup
    .mixed()
    .test("fileType", "Invalid file format", function (value) {
      if (!value) return false;
      const supportedFormats = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
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
    description: string;
    isDiscounted: boolean;
    image: FileList | null;
  };

  const formData = useForm<itemFormData>({
    resolver: yupResolver(schema) as Resolver<itemFormData>,
    defaultValues: {
      productName: "",
      productId: "",
      price: "",
      quantity: 0,
      description: "",
      isDiscounted: false,
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

  const onSubmit = handleSubmit(
    (formData: {
      productName: string;
      productId: string;
      price: string;
      quantity: number;
      isDiscounted: boolean;
      description: string;
      image: FileList | null;
    }) => {
      setLoading(true);
      setDialog(false);

      dispatch(
        actions.postItem.request({
          productId: formData.productId,
          productName: formData.productName,
          price: formData.price,
          quantity: formData.quantity,
          isDiscounted: formData.isDiscounted,
          description: formData.description,
          image: formData.image![0] as File,
        })
      );
      setValue("productName", "");
      setValue("productId", "");
      setValue("price", "");
      setValue("quantity", 0);
      setValue("isDiscounted", false);
      setValue("description", "");
      setValue("image", null);
      setLoading(false);
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
    control,
  };
};
