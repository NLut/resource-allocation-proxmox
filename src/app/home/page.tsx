import { auth } from "~/server/auth"; // Named import
import Image from "next/image"; // Default import
import { SignOutButton } from "~/component/sign-out-button";

export default async function Home() {
    const session = await auth();
    return (
        <div>
            <SignOutButton />
        </div>
    );
}
// {session?.user.image && (
//     <Image
//         src={session?.user.image}
//         width={48}
//         height={48}
//         alt={session?.user.name ?? "Avatar"}
//     />
// )}
//
