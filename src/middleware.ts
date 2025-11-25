// src/middleware.ts
import NextAuth from "next-auth";
import { authConfig } from "./server/auth/config"; //  Import ONLY the config
import { NextResponse } from "next/server";

// 1. Initialize NextAuth with only the Edge-compatible config
const { auth } = NextAuth(authConfig);

const protectedRoutes = ["/user-info"];

// 2. Wrap your middleware in the `auth` wrapper
export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth; // `req.auth` is provided by the wrapper

    const isProtected = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route),
    );

    // 3. Logic: If trying to access protected route and not logged in
    if (isProtected && !isLoggedIn) {
        return NextResponse.redirect(new URL("/api/auth/signin", nextUrl));
    }

    return NextResponse.next();
});

// 4. Matcher configuration
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
