import {UserButton, auth} from "@clerk/nextjs"
import Link from "next/link"
import AddWorldButton from "../components/AddButton"
import getUserByClerkID from "@/util/auth"
import { prisma } from "@/util/db"
import AddButton from "../components/AddButton"


const tempLinks = [
  {href: '/home', label: 'Example World One'},
  {href: '/home', label: 'Example World Two'}
]

async function getWorlds() {
  const user = await getUserByClerkID()

  const worlds = prisma.world.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'asc',
    }
  })
  return worlds
}

export default async function DashboardLayout({children}) {
  const worlds = await getWorlds()
  return (
    <div className="h-screen w-screen relative">
    <aside className="absolute top-0 left-0 h-full w-[250px] border-r border-black/10">
      <div>Cloudy with a Chance of Fireball</div>
      <Link href='/home'>Home</Link>
      <div>Your Worlds</div>
      <ul>
        {worlds.map((world) => {
           return <li key={world.id} className="px-2 py-6 text-xl">
            <Link href={`/${world.id}`}>{world.name}</Link>
        </li>
        })}
        <li>
          <AddButton type={'World'}/>
        </li>
      </ul>
    </aside>
    <div className="ml-[250px] h-full ">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className=" h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}