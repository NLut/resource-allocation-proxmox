import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";
import { z } from "zod";

// Validating the dynamic ID parameter
const routeContextSchema = z.object({
    params: z.object({
        requestId: z.string(), // URLs are always strings
    }),
});

export async function PATCH(
    req: Request,
    context: { params: { requestId: string } },
) {
    const session = await auth();

    // Security Guard: Admin only
    if (session?.user.role !== "admin") {
        return new NextResponse("Forbidden", { status: 403 });
    }

    try {
        // Validate the ID from the URL
        const { params } = routeContextSchema.parse(context);
        const requestIdInt = parseInt(params.requestId);

        // Update the database
        const updatedRequest = await db.requestInfo.update({
            where: {
                requestId: requestIdInt,
            },
            data: {
                isApprove: true,
                requestStatus: "approved", // Good practice to update the status string too
                lastEditDate: new Date(), // Update the timestamp
            },
        });

        return NextResponse.json(updatedRequest);
    } catch (error) {
        console.error("Failed to approve request:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
