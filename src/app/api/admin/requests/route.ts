import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function GET(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // 1. Parse the URL to get query parameters
  const { searchParams } = new URL(req.url);
  const statusFilter = searchParams.get("status"); // e.g., "all", "approved", "pending"

  try {
    // 2. Build the "where" clause dynamically
    // Default behavior: Fetch ONLY pending (to keep dashboard fast)
    let whereClause: any = {
      requestStatus: "pending", 
    };

    // If admin explicitly asks for "all", remove the filter
    if (statusFilter === "all") {
      whereClause = {}; // No filter, fetch everything
    } 
    // If admin asks for specific status (e.g. "approved")
    else if (statusFilter) {
      whereClause = { requestStatus: statusFilter };
    }

    const requests = await db.requestInfo.findMany({
      where: whereClause,
      include: {
        user: true,
        template: {
          include: { osTemplate: true, instance: true },
        },
      },
      // Sort: If viewing history, new ones first. If pending, old ones first (FIFO).
      orderBy: {
        requestDate: statusFilter === "all" ? 'desc' : 'asc',
      },
      // ⚠️ In a real app, you would add .take(50) here for pagination!
    });

    return NextResponse.json(requests);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
