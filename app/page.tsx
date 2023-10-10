import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const {userId} =  await auth()

  let href = userId ? '/home' : '/verify-user'
  return (
    <div className='w-screen h-screen bg-black text-white flex justify-center items-center'>
      <div className='w-full max-w-[600px] mx-auto'>
        <h1 className='text-2xl mb-4'>Cloudy with a chance of Fireball</h1>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
