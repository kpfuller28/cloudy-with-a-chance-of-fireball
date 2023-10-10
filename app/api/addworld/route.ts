import getUserByClerkID from "@/util/auth"
import { prisma } from "@/util/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"



export async function POST(request: Request) {
  const user = await getUserByClerkID()
  const data = await request.json()
  const world = await prisma.world.create({
    data: {
      userId: user.id,
      name: data.name,
      description: data.desc
    }
  })
  revalidatePath('/(dashboard)', 'layout')
  return NextResponse.json({data: world})
}