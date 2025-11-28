import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";
import { z } from "zod";

// 1. Update Schema to accept dates
const CreateRequestSchema = z.object({
    instanceTemplateId: z.number(),
    osTemplateId: z.number(),
    instantName: z.string().min(3),
    note: z.string().optional(),
    
    // ⭐ NEW: Accept date strings (from frontend calendar) and convert to Date objects
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
});

export async function POST(req: Request) {
    const session = await auth();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    try {
        const body = await req.json();

        // 2. Extract dates from the validated body
        const { 
            instanceTemplateId, 
            osTemplateId, 
            instantName, 
            note, 
            startDate, 
            endDate 
        } = CreateRequestSchema.parse(body);

        const newRequest = await db.$transaction(async (tx) => {
            // Create the Link (InstanceOsTemplate)
            const newCombo = await tx.instanceOsTemplate.create({
                data: {
                    instanceId: instanceTemplateId,
                    osId: osTemplateId,
                },
            });

            // Create the Request
            const request = await tx.requestInfo.create({
                data: {
                    userId: session.user.id,
                    templateId: newCombo.templateId,
                    instantName: instantName,
                    requestStatus: "pending",
                    isApprove: false,
                    note: note ?? "",

                    // ⭐ NEW: Use the user-provided dates
                    requestDate: startDate, // The Start Date
                    endDate: endDate,       // The End Date
                    
                    lastEditDate: new Date(), // This is still "now" (audit log)
                },
            });

            return request;
        });

        return NextResponse.json(newRequest);
    } catch (error) {
        console.error("Request Creation Failed:", error);
        if (error instanceof z.ZodError) {
            return new NextResponse("Invalid Data: " + JSON.stringify(error.errors), { status: 400 });
        }
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
