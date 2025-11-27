import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";
import { z } from "zod";

// Validates just the params object
const paramsSchema = z.object({
    instanceId: z.string(),
});

// 1. GET: Fetch Single Instance Details
export async function GET(
    req: Request,
    props: { params: Promise<{ instanceId: string }> }, // 👈 Type is now Promise
) {
    const session = await auth();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    // ⚡️ AWAIT the params before using them
    const params = await props.params;

    // Now validate the plain object
    const { instanceId } = paramsSchema.parse(params);
    const id = parseInt(instanceId);

    try {
        const instance = await db.instanceInfo.findFirst({
            where: {
                instanceId: id,
                userId: session.user.id,
            },
            include: {
                request: {
                    include: {
                        template: {
                            include: {
                                osTemplate: true,
                                instance: true,
                            },
                        },
                    },
                },
            },
        });

        if (!instance) return new NextResponse("Not Found", { status: 404 });

        return NextResponse.json(instance);
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

// 2. PATCH: Toggle Status (On/Off)
export async function PATCH(
    req: Request,
    props: { params: Promise<{ instanceId: string }> }, // 👈 Type is now Promise
) {
    const session = await auth();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    // ⚡️ AWAIT the params here too
    const params = await props.params;

    const { instanceId } = paramsSchema.parse(params);
    const id = parseInt(instanceId);

    try {
        const body = await req.json();

        const existing = await db.instanceInfo.findFirst({
            where: { instanceId: id, userId: session.user.id },
        });

        if (!existing) return new NextResponse("Not Found", { status: 404 });

        const updated = await db.instanceInfo.update({
            where: { instanceId: id },
            data: {
                machineState: body.status,
            },
        });

        return NextResponse.json(updated);
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
