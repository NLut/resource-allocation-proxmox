"use server";

import { signIn } from "~/server/auth";

export async function googleLogin() {
  await signIn("google", { redirectTo: "/" });
}
