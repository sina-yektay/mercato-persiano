import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store/slices";
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("email is a required field"),
  password: yup.string(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
  address: yup.string().required("address is a required field"),
  phone: yup.string().min(10).max(14).required("phone is a required field"),
  name: yup.string().required("name is a required field"),
});

type userEditForm = {
  email: string;
  password: string | undefined;
  repeatPassword: string | undefined;
  address: string;
  phone: string;
  name: string;
};

export const useEditProfile : any = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user: any = useSelector(selectors.getUser);
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const formData = useForm<userEditForm>({
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

  useEffect(() => {
    dispatch(actions.changeRoute({ index: false }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  useEffect(() => {
    if (!session) {
      navigate("/");
    } else {
      dispatch(actions.getUser.request({ email: session?.user?.email || "" }));
    }
  }, [session, dispatch, navigate]);

  const handleChange = () => {
    setChecked(!checked);
  };

  const {
    control,
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = formData;

  useEffect(() => {
    setValue("email", user.email);
    setValue("address", user.address);
    setValue("phone", user.phone);
    setValue("password", "");
    setValue("repeatPassword", "");
    setValue("name", user.name);
  }, [user, setValue]);

  const onSubmit = handleSubmit((formData) => {
    dispatch(
      actions.patchUser.request({
        lastEmail: session?.user.email || "",
        email: formData.email,
        password: formData.password || "",
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
      })
    );
  });

  return {
    formData,
    onSubmit,
    register,
    errors,
    t,
    watch,
    user,
    handleChange,
    checked,
  };
};
