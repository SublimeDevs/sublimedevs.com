import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "./utils";
import { db } from "@/db";
import { users } from "@/db/schema";

export const { handlers, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Invalid credentials");
        }

        const user = await db.query.users.findFirst({
          where: eq(users.email, email as string),
        });
        if (!user) {
          throw new Error("User not found");
        }

        const isPasswordValid = await verifyPassword(
          password as string,
          user.password,
        );
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
});
