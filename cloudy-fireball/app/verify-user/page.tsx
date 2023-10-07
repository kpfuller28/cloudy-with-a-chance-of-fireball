import { currentUser } from "@clerk/nextjs"
import { prisma } from "@/util/db"
import { redirect } from "next/navigation"

async function verifyUser() {
  const user = await currentUser()

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    }
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
      }
    })
  }

  redirect('/home')
}



export default async function VerifyUser() {
  await verifyUser()
  return <div>...loading</div>
}