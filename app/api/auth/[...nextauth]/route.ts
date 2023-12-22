import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password",
        },
      },
      // callbackUrl: "http://localhost:3000/api/auth/callback/credentials",
      async authorize(credentials, _req) {
        const res = await fetch(`${process.env.API_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        if (data?.message) {
          throw new Error(data.message);
        }

        return data;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token = user as unknown as { [key: string]: any };
      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
