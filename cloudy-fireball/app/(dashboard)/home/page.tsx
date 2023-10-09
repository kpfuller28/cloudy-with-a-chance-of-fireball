import { currentUser } from "@clerk/nextjs";


export default async function Home() {
  const user = await currentUser()
  return (
    <div>
      <div>Welcome Home Wizard {user?.firstName || user?.emailAddresses[0].emailAddress || ''}</div>
    </div>
  )
}

