import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";
import { z } from "zod";

// Input Validation Schema
const CreateRequestSchema = z.object({
    instanceTemplateId: z.number(), // The hardware they picked
    osTemplateId: z.number(), // The OS they picked
    instantName: z.string().min(3),
    note: z.string().optional(),
    // Assuming defaults for dates, or you can accept them from frontend
});

export async function POST(req: Request) {
    const session = await auth();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    try {
        const body = await req.json();

        // Validate Input
        const { instanceTemplateId, osTemplateId, instantName, note } =
            CreateRequestSchema.parse(body);

        //  Start Transaction -> transaction like database transaction
        //  db is prismaClient
        const newRequest = await db.$transaction(async (tx) => {
            // 1. Create the Link (InstanceOsTemplate)
            // This records "User wanted Ubuntu on Small Instance"
            const newCombo = await tx.instanceOsTemplate.create({
                data: {
                    instanceId: instanceTemplateId,
                    osId: osTemplateId,
                },
            });

            // 2. Create the Request using the ID from step 1
            const request = await tx.requestInfo.create({
                data: {
                    userId: session.user.id,
                    templateId: newCombo.templateId, //  Link to the specific combo
                    instantName: instantName,
                    requestStatus: "pending",
                    isApprove: false,
                    note: note ?? "",

                    // Setting dates (Example logic: starts now, ends in 7 days)
                    requestDate: new Date(),
                    lastEditDate: new Date(),
                    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                },
            });

            return request;
        });

        return NextResponse.json(newRequest);
    } catch (error) {
        console.error("Request Creation Failed:", error);
        if (error instanceof z.ZodError) {
            return new NextResponse("Invalid Data", { status: 400 });
        }
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
