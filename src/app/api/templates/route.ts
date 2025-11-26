import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function GET() {
  const session = await auth();

  // 1. Check if user is logged in
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // 2. Fetch both tables in parallel (Faster!)
    const [osTemplates, instanceTemplates] = await Promise.all([
      db.osTemplate.findMany(),
      db.instanceTemplate.findMany(),
    ]);

    // 3. Return the combined data
    return NextResponse.json({
      osTemplates,
      instanceTemplates,
    });
  } catch (error) {
    console.error("Failed to fetch templates:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
