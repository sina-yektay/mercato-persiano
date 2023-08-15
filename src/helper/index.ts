import { LoginUserParams } from "@/model/server/User";
import { signIn } from "next-auth/react";

export const loginUser = async ({ email, password }: LoginUserParams) => {
  try {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Authentication failed, wrong credentials");
    }
  }
};
