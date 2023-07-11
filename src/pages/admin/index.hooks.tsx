import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { loginUser } from "@/helper";




const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required('Password is required'),
  });



type loginFormData = {
    email: string;
    password: string;
}

export const useAdminLogin = () => {

    const formData = useForm<loginFormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
      });

      const [loading, setLoading] = useState(false)
      const router = useRouter();
      const {
        control,
        handleSubmit,
        watch,
        register,
        formState: { errors },
      } = formData;


  
      

 

 









    const onSubmit =
      
      handleSubmit(async(formData: {email: string, password: string}) => {
        try {
          setLoading(true)

          const loginRes = await loginUser({ email:formData.email, password:formData.password })

          if (loginRes && !loginRes.ok) {

          }
          else {
        
            
            router.push("/admin/dashboard")
          }
      } catch (error) {
          if (error instanceof AxiosError) {
              const errorMsg = error.response?.data?.error
              // setSubmitError(errorMsg)
          }
      }
      setLoading(false);
      })
    


    return {formData, handleSubmit,onSubmit,register,errors,loading};
}

