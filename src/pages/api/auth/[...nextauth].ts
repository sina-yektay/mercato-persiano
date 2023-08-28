import { connectToDatabase } from "@/dbConfig";
import { IUser, IUserSession, Iuser, User } from "@/model/server/User";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<any> {
        await connectToDatabase();

        const user = await User.findOne({
          email: credentials?.email,
        });

        if (!user) {
          throw new Error("Invalid Credentials");
        }
        if (!user.isAdmin) {
          const isPasswordCorrect = await compare(
            credentials!.password,
            user.password ?? ""
          );

          if (!isPasswordCorrect) {
            throw new Error("Invalid Credentials");
          }
        } else {
          const storedPassBuffer = Buffer.from(user.password || "");
          const enteredPassBuffer = Buffer.from(credentials?.password || "");
          if (!crypto.timingSafeEqual(storedPassBuffer, enteredPassBuffer)) {
            throw new Error("Invalid Credentials");
          }
        }
        const sessionUser: Iuser = {
          _id: user._id?.toString(),
          email: user.email,
          address: user.address,
          phone: user.phone,
          name: user.name,
          isAdmin: user.isAdmin,
        };
        return sessionUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        const customUser: Iuser = {
          email: (user as Iuser).email || "",
          address: (user as Iuser).address,
          phone: (user as Iuser).phone,
          name: (user as Iuser).name || "",
          isAdmin: (user as Iuser).isAdmin,
        };
        token.user = customUser;
      }
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user as Iuser;
      session.user = user;
      return session as IUserSession;
    },
  },
};

export default NextAuth(options);
