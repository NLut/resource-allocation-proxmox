import { NextResponse, NextRequest } from 'next/server'
import { z } from 'zod'
import { db } from '~/server/db'

export async function POST(req: NextRequest) {

  // Optional: validate input
  const schema = z.object({
    name : z.string(),
    cpu_amount: z.number().int(),
    ram_amount: z.number().int(),
    gpu_amount: z.number().int(),
    storage_amount: z.number().int()

  })
try {
  const body = await req.json();
  const data = schema.parse(body)

  const post = await db.instance_template.create({
    data: {
      name: data.name,
      cpu_amount: data.cpu_amount,
      ram_amount: data.ram_amount,
      gpu_amount: data.gpu_amount,
      storage_amount: data.storage_amount
    },
  })
    return NextResponse.json({ data: post, message: "Success" }, { status: 201 });
  } catch (error) {
    console.error("Error creating instance_template:", error);
    return NextResponse.json({ error: "Failed to create record" }, { status: 500 });
  }
}

