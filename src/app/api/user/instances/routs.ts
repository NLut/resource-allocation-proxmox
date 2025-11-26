import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function GET() {
    const session = await auth();

    // 1. Check Auth
    if (!session) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        // 2. Fetch Active Instances for this user
        const userInstances = await db.instanceInfo.findMany({
            where: {
                userId: session.user.id,
            },
        });

        return NextResponse.json(userInstances);
    } catch (error) {
        console.error("Failed to fetch user instances:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
