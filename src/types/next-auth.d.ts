import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email?: string;
      address?: string;
      phone?: string;
      name?: string;
      isAdmin?: boolean;
    };
  }
}
