import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";


// =====================
// ⭐ GET /api/user/requests/[id]
// =====================
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const requestId = Number(params.id);

    const data = await db.requestInfo.findFirst({
      where: {
        requestId,
        userId: session.user.id,
      },
      include: {
        template: {
          include: {
            osTemplate: true,     // ✔ จาก model InstanceOsTemplate
            instance: true,       // ✔ ความสัมพันธ์ชื่อนี้ ไม่ใช่ instanceTemplate
          },
        },
      },
    });

    if (!data) {
      return new NextResponse("Request not found", { status: 404 });
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error("GET Request Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}


// =====================
// PUT (Update Request)
// =====================
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const requestId = Number(params.id);
    const body = await req.json();

    const {
      instanceName,
      osId,
      instanceId,
      startDate,
      endDate
    } = body;

    // 1) ตรวจว่าเป็นของ user จริงไหม
    const existing = await db.requestInfo.findFirst({
      where: {
        requestId,
        userId: session.user.id,
      }
    });

    if (!existing) {
      return new NextResponse("Not found or unauthorized", { status: 404 });
    }

    // 2) Update OS + SPEC
    await db.instanceOsTemplate.update({
      where: {
        templateId: existing.templateId
      },
      data: {
        osId,
        instanceId
      }
    });

    // 3) Update RequestInfo
    const updated = await db.requestInfo.update({
      where: { requestId },
      data: {
        instantName: instanceName,
        requestDate: new Date(startDate),
        endDate: new Date(endDate),
        lastEditDate: new Date(),
      }
    });

    return NextResponse.json(updated);

  } catch (error) {
    console.error("PUT Request Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
