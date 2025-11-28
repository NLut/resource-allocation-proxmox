import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function GET() {
    const session = await auth();

    // Security Guard: Check if user exists AND is admin
    if (session?.user.role !== "admin") {
        return new NextResponse("Forbidden", { status: 403 });
    }

    try {
        const pendingRequests = await db.requestInfo.findMany({
            where: {
                requestStatus: "pending",
                isApprove: false,
            },
            // ⭐ UPDATED INCLUDE STRUCTURE
            include: {
                user: true, // See WHO requested it
                template: {
                    // 1. Go to the Combo Table (InstanceOsTemplate)
                    include: {
                        osTemplate: true, // 2. Drill down to get OS Name
                        instance: true, // 3. Drill down to get CPU/RAM (InstanceTemplate)
                    },
                },
            },
            orderBy: {
                requestDate: "asc",
            },
        });

        return NextResponse.json(pendingRequests);
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
