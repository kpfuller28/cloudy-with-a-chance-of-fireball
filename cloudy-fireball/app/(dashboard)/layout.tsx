import {UserButton} from "@clerk/nextjs"
import Link from "next/link"

const tempLinks = [
  {href: '/home', label: 'Example World One'},
  {href: '/home', label: 'Example World Two'}
]
function addworld() {

}
export default function DashboardLayout({children}) {
  return (
    <div className="h-screen w-screen relative">
    <aside className="absolute top-0 left-0 h-full w-[250px] border-r border-black/10">
      <div>Cloudy with a Chance of Fireball</div>
      <Link href='/home'>Home</Link>
      <div>Your Worlds</div>
      <ul>
        {tempLinks.map((link) => {
           return <li key={link.href} className="px-2 py-6 text-xl">
            <Link href={link.href}>{link.label}</Link>
        </li>
        })}
        <li>
          <button onClick={() => {addWorld()}}>Add a World</button>
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