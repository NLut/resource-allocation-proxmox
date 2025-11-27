import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function GET() {
    const session = await auth();

    // Security Guard: Check if user exists AND is admin
    if (session?.user.role !== "admin") {
        return new NextResponse("Forbidden", { status: 403 });
    }
    // console.log(session?.user.role);

    try {
        const pendingRequests = await db.requestInfo.findMany({
            where: {
                requestStatus: "pending", //  Filter only pending
                isApprove: false,
            },
            include: {
                user: true, // See WHO requested it
                template: true, // See WHAT they requested
            },
            orderBy: {
                requestDate: "asc", // Oldest requests first
            },
        });

        return NextResponse.json(pendingRequests);
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
