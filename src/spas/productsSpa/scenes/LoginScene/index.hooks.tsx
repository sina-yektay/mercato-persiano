import { loginUser } from "@/helper";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { actions } from "../../redux-store/slices";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("email is required"),
  password: yup.string().required("Password is required"),
});

type loginFormData = {
  email: string;
  password: string;
};

export const useLoginScene = () => {
  const formData = useForm<loginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = formData;

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

  return { formData, onSubmit, register, errors, loading, warning };
};
