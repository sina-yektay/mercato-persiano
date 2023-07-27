// custom.d.ts
import { IUserSession } from "@/model/server/User";

declare module "next-auth" {
  interface Session {
    user: IUserSession & { address: string; phone: string; isAdmin: boolean };
  }
}
