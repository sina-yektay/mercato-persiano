import { LoginUserParams } from "@/model/server/User";
import { signIn } from "next-auth/react";
const AWS = require("aws-sdk");
const ssm = new AWS.SSM();
AWS.config.update({ region: "eu-central-1" });

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

export const getParameterFromSSM = async (parameterName: string) => {
  const ssm = new AWS.SSM();
  const params = {
    Name: parameterName,
    WithDecryption: false,
  };

  try {
    const response = await ssm.getParameter(params).promise();
    return response.Parameter.Value;
  } catch (error) {
    console.error("Error retrieving parameter from SSM:", error);
    return null;
  }
};
