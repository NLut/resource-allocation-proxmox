// src/middleware.ts
import NextAuth from "next-auth";
import { authConfig } from "./server/auth/config"; //  Import ONLY the config
import { NextResponse } from "next/server";

// Initialize the "Gatekeeper"
const { auth } = NextAuth(authConfig);

// 1. Define the few pages that should be PUBLIC
// Note: We don't need to list static assets (images/css) because the 'matcher' at the bottom handles them.
const publicRoutes = [
  "/api/auth", // Allow auth API routes (login, callback)
  "/_next",    // Allow Next.js internal files
];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // 2. Check if the current path is on the "Public List"
  const isPublic = publicRoutes.some((route) => 
    nextUrl.pathname.startsWith(route)
  );

  // 3. Logic: If it is NOT public and NOT logged in -> Kick them out
  if (!isPublic && !isLoggedIn) {
    return NextResponse.redirect(new URL("/api/auth/signin", nextUrl));
  }

  // 4. Optional: If they ARE logged in but try to visit the sign-in page, 
  // redirect them to home/dashboard so they don't see the login form again.
  if (isLoggedIn && nextUrl.pathname === "/api/auth/signin") {
     return NextResponse.redirect(new URL("/", nextUrl));
  }

  return NextResponse.next();
});

// The Matcher ensures middleware doesn't run on images/favicons
export const config = {
  matcher: ['/((?!api/templates|_next/static|_next/image|favicon.ico).*)'],
};
