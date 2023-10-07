import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const {userId} =  await auth()

  let href = userId ? '/home' : '/new-user'
  return (
    <div className='w-screen h-screen bg-black text-white'>
      <h1>Cloudy with a chance of Fireball</h1>
      <div>
        <Link href={href}>
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">Get Started</button>
        </Link>
      </div>
    </div>
  )
}
