import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function GET() {
    const session = await auth();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    try {
        const userRequests = await db.requestInfo.findMany({
            where: {
                userId: session.user.id, // Filter by logged-in user
            },
            include: {
                instances: true, // Join the InstanceInfo table
                template: true, // Join the Template table (optional, but helpful)
            },
            orderBy: {
                requestDate: "desc", // Show newest first
            },
        });

        return NextResponse.json(userRequests);
    } catch (error) {
        console.error("Failed to fetch user requests:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
