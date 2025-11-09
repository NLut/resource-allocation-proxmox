import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { auth } from "./server/auth";

// intercepter
const protectedRoutes = ["/user-info"];

export default async function middleware(request: NextRequest) {
    const session = await auth();

    const { pathname } = request.nextUrl; // get current url

    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route),
    ); // check whether path is in protectedRoutes

    // still have a bug -> will get redirect even loged in by manually routing /user-info
    if (isProtected && !session) {
        return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }

    // user is sign in or not in protected routes
    return NextResponse.next(); // continue forward to that route
}
