// src/server/auth/config.ts
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

/**
 * Module augmentation for `next-auth` types.
 */
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            // role: UserRole;
        } & DefaultSession["user"];
    }
}

export const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    // We will add the Adapter and Callbacks in the other file
} satisfies NextAuthConfig;
