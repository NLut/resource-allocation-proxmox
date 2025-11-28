import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";
import { z } from "zod";

const paramsSchema = z.object({
    requestId: z.string(),
});

// GET: Fetch details for the Admin View page
export async function GET(
    req: Request,
    props: { params: Promise<{ requestId: string }> },
) {
    const session = await auth();
    if (session?.user.role !== "admin")
        return new NextResponse("Forbidden", { status: 403 });

    const params = await props.params;
    const { requestId } = paramsSchema.parse(params);
    const id = parseInt(requestId);

    try {
        const request = await db.requestInfo.findUnique({
            where: { requestId: id },
            include: {
                user: true,
                template: {
                    include: { osTemplate: true, instance: true },
                },
            },
        });
        return NextResponse.json(request);
    } catch (error) {
        return new NextResponse("Error", { status: 500 });
    }
}

// PATCH: Approve or Reject
export async function PATCH(
    req: Request,
    props: { params: Promise<{ requestId: string }> },
) {
    const session = await auth();
    if (session?.user.role !== "admin")
        return new NextResponse("Forbidden", { status: 403 });

    const params = await props.params;
    const { requestId } = paramsSchema.parse(params);
    const id = parseInt(requestId);

    try {
        const body = await req.json(); // Expect { status: "approved" | "rejected" }
        const newStatus = body.status;

        // ⚡️ TRANSACTION START
        const result = await db.$transaction(async (tx) => {
            // 1. Update the Request Status
            const updatedRequest = await tx.requestInfo.update({
                where: { requestId: id },
                data: {
                    requestStatus: newStatus,
                    isApprove: newStatus === "approved",
                    lastEditDate: new Date(),
                },
            });

            // 2. If Approved -> Create the actual Instance
            if (newStatus === "approved") {
                // Generate fake credentials for the new VM
                const ipOctet = Math.floor(Math.random() * 255);

                await tx.instanceInfo.create({
                    data: {
                        userId: updatedRequest.userId,
                        requestId: updatedRequest.requestId,
                        // will reconsidered later
                        username: "root",
                        password: Math.random().toString(36).slice(-8), // Random 8-char password
                        ipAddr: `192.168.1.${ipOctet}`,
                        machineState: "Running",
                        createDate: new Date(),
                        // Set expire date to end date, or default to 30 days
                        expireDate:
                            updatedRequest.endDate ||
                            new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                        updateDate: new Date(),
                        updateBy: session?.user.name,
                    },
                });
            }

            return updatedRequest;
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("Approval flow failed:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
