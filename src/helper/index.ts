import { LoginUserParams } from "@/model/server/User";
import { signIn } from "next-auth/react";

export const loginUser = async ({ email, password }: LoginUserParams) => {
  const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });
  return res;
};