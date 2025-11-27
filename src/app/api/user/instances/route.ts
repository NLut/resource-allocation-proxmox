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
        // 2. Fetch Active Instances with Deep Nested Data
        const userInstances = await db.instanceInfo.findMany({
            where: {
                userId: session.user.id,
            },
            // The magic happens here: Walking the relations
            include: {
                request: {
                    include: {
                        template: {
                            // This is the InstanceOsTemplate
                            include: {
                                osTemplate: true, // Gets OS Name
                                instance: true, // Gets CPU, RAM, Storage (InstanceTemplate)
                            },
                        },
                    },
                },
            },
            orderBy: {
                createDate: "desc",
            },
        });

        return NextResponse.json(userInstances);
    } catch (error) {
        console.error("Failed to fetch user instances:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
