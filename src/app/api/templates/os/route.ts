import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function POST(req: Request) {
    // const session = await auth();
    //
    // // Admin Check
    // if (session?.user.role !== "admin") {
    //     return new NextResponse("Forbidden", { status: 403 });
    // }

    try {
        const body = await req.json();

        // Create OS Template
        const newOs = await db.osTemplate.create({
            data: {
                osName: body.osName,
                imageLocation: body.imageLocation,
                supportedPlatform: body.supportedPlatform,
            },
        });

        return NextResponse.json(newOs);
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
