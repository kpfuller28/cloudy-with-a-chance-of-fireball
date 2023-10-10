import AddButton from "@/app/components/AddButton";
import getUserByClerkID from "@/util/auth";
import { prisma } from "@/util/db";
import {  currentUser } from "@clerk/nextjs";
import { Button } from "antd";
import Link from "next/link";

async function getWorld(id) {
  const user = await getUserByClerkID()
  const world = await prisma.world.findUnique({
    where: {
        userId: user.id,
        id,
    }
  })
  return world
}
async function getRegions(worldId) {
  const user = await getUserByClerkID()
  const regions = await prisma.region.findMany({
    where: {
      userId: user.id,
      worldId: worldId
    }
  })
  return regions
}

export default async function WorldPage({params}) {
  const world = await getWorld(params.worldID)
  const regions = await getRegions(params.worldID)
  const clerkUser = await currentUser()

  return (
    <div>
      <div>Welcome Wizard {clerkUser?.firstName || clerkUser?.emailAddresses[0].emailAddress || ''} to your wonderful world</div>
      <h1 className="text-2xl">{world?.name}</h1>
      <p>{world?.description}</p>
      <h3 className='text-xl'>Known Regions</h3>
      <ul>
        {regions.map((region) => {
          return (
            <li key={region.id}>
              <Link href='/home'>{region.name}</Link>
            </li>
          )
        })}
      </ul>
      <AddButton type={'Region'} world={world}></AddButton>
    </div>
  )
}