import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function GET() {
    const session = await auth();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    // Run both queries in parallel for speed
    const [osTemplates, instanceTemplates] = await Promise.all([
        db.osTemplate.findMany(),
        db.instanceTemplate.findMany(),
    ]);

    return NextResponse.json({
        osTemplates,
        instanceTemplates,
    });
}
