'use client'

import { useParams, useRouter } from 'next/navigation'

export default function ParallelPage() {
  const params = useParams()
  const router = useRouter()

  console.log('I‘m page for /tickets/:id')

  return (
    <div className="shrink-0">
      <p>{`I'm the list item of ${params.id}`}</p>
      <button
        className="px-4 py-2 rounded-sm bg-blue-700 text-white"
        onClick={() => router.push('/tickets')}
      >
        back to list
      </button>
    </div>
  )
}
