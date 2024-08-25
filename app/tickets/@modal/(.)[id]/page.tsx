'use client'

import { useRouter } from 'next/navigation'

export default function InterceptingPage() {
  const router = useRouter()

  console.log(
    'Im intercepting page for /tickets/:id when page is come from /tickets'
  )

  return <button onClick={() => router.back()}>back to list</button>
}
