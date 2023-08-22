import { loginUser } from "@/helper";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { actions } from "../../redux-store/slices";
import { useTranslation } from "react-i18next";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("email is required"),
  password: yup.string().required("Password is required"),
});

const resetSchema = yup.object().shape({
  resetEmail: yup
    .string()
    .email("Invalid email format")
    .required("email is required"),
});

type loginFormData = {
  email: string;
  password: string;
};

type resetPasswordFormData = {
  resetEmail: string;
};

export const useLoginScene = () => {
  const loginFormData = useForm<loginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { t } = useTranslation();
  const resetFormData = useForm<resetPasswordFormData>({
    resolver: yupResolver(resetSchema),
    defaultValues: {
      resetEmail: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = loginFormData;

  const {
    control: resetControl,
    handleSubmit: resetHandleSubmit,
    watch: resetWatch,
    register: resetRegister,
    formState: { errors: resetError },
  } = resetFormData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: false }));
  });

  const onSubmit = handleSubmit(
    async (formData: { email: string; password: string }) => {
      try {
        setLoading(true);
        const loginRes = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        if (loginRes && loginRes.error) {
          setWarning(loginRes.error);
        } else {
          navigate("/");
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data?.error;
        }
      }
      setLoading(false);
    }
  );
  const handleClose = () => {
    setOpen(false);
  };
  const openDialog = () => {
    setOpen(true);
  };

  const resetonSubmit = resetHandleSubmit((resetFormData) => {
    setOpen(false);
    dispatch(
      actions.postResetPassword.request({ email: resetFormData.resetEmail })
    );
  });

  return {
    loginFormData,
    resetRegister,
    resetonSubmit,
    resetError,
    onSubmit,
    register,
    errors,
    loading,
    warning,
    resetFormData,
    open,
    handleClose,
    openDialog,
    t,
  };
};
