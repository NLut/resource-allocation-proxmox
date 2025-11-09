"use server";
import { auth } from "~/server/auth";
import { SignInButton } from "~/component/sign-in-button";
import { SignOutButton } from "~/component/sign-out-button";
import Link from "next/link";

export default async function Home() {
    const session = await auth();
    // console.log(session);
    if (session?.user) {
        return (
            <div>
                <Link href="/user-info"> User Info </Link>;
                <SignOutButton />
            </div>
        );
    }

    return (
        <div>
            {" "}
            <p>You Are Not Signed In</p> <SignInButton />
        </div>
    );
}
