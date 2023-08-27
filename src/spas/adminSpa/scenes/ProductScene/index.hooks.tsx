import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store/slices";
import * as yup from "yup";

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

export const useProductScene = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectors.products);

  const handleDeletion = (productId: string) => {
    dispatch(actions.deleteItem.request({ productId }));
  };
  return { products, handleDeletion };
};
