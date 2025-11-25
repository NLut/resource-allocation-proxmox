import { auth } from "~/server/auth"; // Named import

export default async function UserInfo() {
    const session = await auth();
    return (
        <div>
            <h1>NextAuth v5</h1>
            <p>User signed in with name: {session?.user.name}</p>
            <p>User signed in with email: {session?.user.email}</p>
        </div>
    );
}
