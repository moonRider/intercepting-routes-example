'use client'

import { useParams, useRouter } from 'next/navigation'

import { TicketList } from '../ticket-list'

// shareable detail page partial
export default function TicketDetailPage() {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex-1">
        <TicketList />
      </div>
      <div className="shrink-0">
        <p>{`I'm the list item of ${params.id}`}</p>
        <button
          className="px-4 py-2 rounded-sm bg-blue-700 text-white"
          onClick={() => router.push('/tickets')}
        >
          back to list
        </button>
      </div>
    </>
  )
}
