'use client'

import { useRouter } from 'next/navigation'

export function TicketList() {
  const router = useRouter()
  return (
    <ul>
      {Array.from({ length: 10 }).map((_, idx) => {
        return (
          <li
            key={idx}
            onClick={() => router.push(`/tickets/${idx + 1}`)}
          >{`ticket-${idx + 1}`}</li>
        )
      })}
    </ul>
  )
}
