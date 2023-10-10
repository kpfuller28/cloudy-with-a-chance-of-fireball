import getUserByClerkID from "@/util/auth"
import { prisma } from "@/util/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"



export async function POST(request: Request) {
  const user = await getUserByClerkID()
  const data = await request.json()
  const region = await prisma.region.create({
    data: {
      userId: user.id,
      name: data.name,
      description: data.desc,
      type: data.type,
      worldId: data.worldId,
    }
  })
  console.log(data.worldId)
  revalidatePath(`/${data.worldId}`)
  console.log('------------ Path Revalidated Supposedly ---------------------')
  return NextResponse.json({data: region})
}