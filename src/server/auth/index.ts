// src/server/auth/index.ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "~/server/db";
import { authConfig } from "./config";

// auth using every where to know currnet user identity, signIn action server-side login, signOut action server-side logout terminate session cookie.
// handlers handle incoming network traffi//
export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    callbacks: {
        // 1. JWT Callback: Store ID and Role in the token
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                // We cast 'role' to string/any because TS might not know it exists on 'User' yet
                token.role = (user as any).role;
            }
            return token;
        },

        // 2. Session Callback: Pass data from Token to Session
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,
                    role: token.role as string,
                },
            };
        },

        // 3. SignIn Callback: The Admin Logic
        async signIn({ user }) {
            // Your specific admin email
            const adminEmails = ["6522770617@g.siit.tu.ac.th"];

            if (user.email && adminEmails.includes(user.email)) {
                try {
                    // Update the user in the database to be an admin
                    await db.user.update({
                        where: { id: user.id },
                        data: { role: "admin" },
                    });
                    console.log(`Granted ADMIN role to ${user.email}`);
                } catch (error) {
                    console.error("Error granting admin role:", error);
                    // We don't return false here; we still let them sign in, just maybe without the role update if DB fails
                }
            }

            return true;
        },
    },
});
