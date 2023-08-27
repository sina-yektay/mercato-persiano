import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store/slices";
import * as yup from "yup";
import { IItem, Iitem } from "@/model/server/Item";
import { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  productName: yup.string().required("product name is required"),
  productId: yup.string().min(4).required(),
  price: yup.string().required(),
  quantity: yup.number().required(),
  description: yup.string().required(),
  isDiscounted: yup.boolean().required(),
});

export const useProductScene = () => {
  const dispatch = useDispatch();
  const products: IItem[] = useSelector(selectors.products);
  const [dialog, setDialoig] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  type itemFormData = {
    productName: string;
    productId: string;
    price: string;
    quantity: number;
    description: string;
    isDiscounted: boolean;
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

  const handleDeletion = (productId: string) => {
    dispatch(actions.deleteItem.request({ productId }));
  };

  const onSubmit = handleSubmit((formData) => {
    setLoading(true);
    setDialoig(false)
    dispatch(
      actions.patchItem.request({
        productName: formData.productName,
        productId: formData.productId,
        description: formData.description,
        price: formData.price,
        isDiscounted: formData.isDiscounted,
        quantity: formData.quantity,
      })
    );
    setLoading(false);
  });

  const handleClose = () => {
    setDialoig(false);
  };

  const handleEdit = (item: IItem) => {
    setDialoig(true);
    setValue("productName", item.productName);
    setValue("productId", item.productId);
    setValue("description", item.description);
    setValue("price", item.price);
    setValue("isDiscounted", item.isDiscounted || false);
    setValue("quantity", item.quantity);
    setImage(item.image);
  };

  return {
    products,
    handleDeletion,
    dialog,
    handleClose,
    control,
    watch,
    register,
    errors,
    formData,
    onSubmit,
    loading,
    handleEdit,
    image,
  };
};
