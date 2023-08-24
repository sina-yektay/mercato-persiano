import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import { actions } from "../../redux-store/slices";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat Password is required"),
});

type resetPasswordData = {
  password: string;
  repeatPassword: string;
};

export const useResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const dispatch = useDispatch();
  const formData = useForm<resetPasswordData>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  useEffect(() => {
    dispatch(actions.changeRoute({ index: false }));
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = formData;

  const onSubmit = handleSubmit((formData) => {
    dispatch(
      actions.patchPassword.request({
        token: token,
        password: formData.password,
      })
    );
    setValue("password", "");
    setValue("repeatPassword", "");
  });

  return { formData, onSubmit, register, errors };
};
