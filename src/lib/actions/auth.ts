"use server";

import { signIn, signOut } from "~/server/auth";

export const login = async () => {
    await signIn("github", { redirectTo: "/" }); // wait github correctly finished sign in then redirect to home page
};

export const logout = async () => {
    await signOut({ redirectTo: "/" });
};
