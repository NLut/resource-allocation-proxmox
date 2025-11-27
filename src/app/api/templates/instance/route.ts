import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function POST(req: Request) {
    // const session = await auth();

    // Admin Check
    // if (session?.user.role !== "admin") {
    //     return new NextResponse("Forbidden", { status: 403 });
    // }

    try {
        const body = await req.json();

        // Create Instance Template
        const newInstance = await db.instanceTemplate.create({
            data: {
                name: body.name,
                cpuAmount: parseInt(body.cpuAmount),
                ramAmount: parseInt(body.ramAmount),
                gpuAmount: parseInt(body.gpuAmount),
                storageAmount: parseInt(body.storageAmount),
            },
        });

        return NextResponse.json(newInstance);
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
