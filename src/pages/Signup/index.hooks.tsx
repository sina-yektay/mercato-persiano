import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type userSignupForm = {
  email: string;
  password: string;
  address: string;
  phone: string;
  name: string;
};

const schema = yup.object().shape({
  email: yup.string().required("email is a required field"),
  password: yup.string().required("Password is required"),
  address: yup.string().required("address is a required field"),
  phone: yup.string().min(10).max(14).required("phone is a required field"),
  name: yup.string().required("name is a required field"),
});

export const useSignup = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState<any>("success")
  const formData = useForm<userSignupForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      address: "",
      phone: "",
      name: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = formData;

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  const onSubmit = handleSubmit(
    async (formData: {
      email: string;
      password: string;
      address: string;
      phone: string;
      name: string;
    }) => {
      console.log(formData);
      const config = {
        method: "post",
        url: `api/auth/signup`,
        data: {
          email: formData.email,
          password: formData.password,
          address: formData.address,
          phone: formData.phone,
          name: formData.name,
          isAdmin: false,
        },
      };
      try {
        setLoading(true);
        const response = await axios(config);
        setSnackbarMessage(response.data.message);
        setSeverity("success");
        setOpenSnackbar(true);
        // const loginRes = await loginUser({
        //   email: formData.email,
        //   password: formData.password,
        // });

        // if (loginRes && !loginRes.ok) {
        // } else {
        //   router.push("/admin/dashboard");
        // }
      } catch (e: any) {
        const axiosError = e as AxiosError<any>;
        setSeverity("warning");
        setSnackbarMessage(
          axiosError?.response?.data?.error || axiosError.message
        );
        setOpenSnackbar(true);
      }
      setLoading(false);
    }
  );

  return {
    formData,
    onSubmit,
    register,
    errors,
    loading,
    openSnackbar,
    closeSnackbar,
    snackbarMessage,
    severity,
  };
};
