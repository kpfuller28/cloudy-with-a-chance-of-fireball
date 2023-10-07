import { currentUser } from "@clerk/nextjs"

// async function createUser() {
//   const user = await currentUser()

//   const match = await prisma.user.findUnique({
//     where: {
//       clerkId: user.id as string,
//     }
//   })

//   if (!match) {
//     await prisma.user.create({

//     })
//   }
// }



export default async function NewUser() {
  return <div>...loading</div>
}