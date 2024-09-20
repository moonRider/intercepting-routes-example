'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

export default function InterceptingPage() {
  const router = useRouter()
  const params = useParams()

  console.log(
    'Im intercepting page for /tickets/:id when page is come from /tickets'
  )

  return (
    <div className="shrink-0">
      <p>{`I'm the list item of ${params.id}`}</p>
      <Link href="/tickets">
        <button className="px-4 py-2 rounded-sm bg-blue-700 text-white">
          back to list
        </button>
      </Link>
    </div>
  )
}
