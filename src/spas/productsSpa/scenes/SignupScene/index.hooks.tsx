import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { actions } from "../../redux-store/slices";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/helper";
import { useTranslation } from "react-i18next";
import { selectors } from "../../redux-store/slices/productNavigation";

type userSignupForm = {
  email: string;
  password: string;
  repeatPassword: string;
  address: string;
  phone: string;
  name: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("email is a required field"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat Password is required"),
  address: yup.string().required("address is a required field"),
  phone: yup.string().min(10).max(14).required("phone is a required field"),
  name: yup.string().required("name is a required field"),
});

export const useSignupScene = () => {
  const { t } = useTranslation();
  const formData = useForm<userSignupForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
      address: "",
      phone: "",
      name: "",
    },
  });
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = formData;

  const handlePopoverClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const changeRouteAfterSignup = useSelector(
    selectors.getChangeRouteAfterSignup
  );

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(actions.changeRoute({ index: false }));
  }, []);

  useEffect(() => {
    async function login() {
      try {
        const loginRes = await loginUser({ email: email, password: password });
        navigate("/");
        dispatch(
          actions.changeRouteAfterSignup({ changeRouteAfterSignup: false })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (changeRouteAfterSignup) {
      login();
    }
  }, [navigate, changeRouteAfterSignup]);

  useEffect(() => {
    dispatch(actions.changeRoute({ index: false }));
  });
  const onSubmit = handleSubmit(
    async (formData: {
      email: string;
      password: string;
      address: string;
      phone: string;
      name: string;
    }) => {
      setEmail(formData.email);
      setPassword(formData.password);

      dispatch(
        actions.postCustomer.request({
          email: formData.email,
          password: formData.password,
          address: formData.address,
          phone: formData.phone,
          name: formData.name,
          isAdmin: false,
        })
      );
    }
  );

  return {
    formData,
    onSubmit,
    register,
    errors,
    handlePopoverClick,
    handlePopoverClose,
    anchorEl,
    open,
    t,
  };
};
