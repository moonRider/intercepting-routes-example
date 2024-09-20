'use client'

import Link from 'next/link'

export function TicketList() {
  return (
    <ul className="flex flex-col space-y-1 px-2">
      {Array.from({ length: 10 }).map((_, idx) => {
        return (
          <li key={idx}>
            <Link
              className="p-2 bg-gray-100 rounded-sm cursor-pointer block"
              href={`/tickets/${idx + 1}`}
            >
              {`ticket-${idx + 1}`}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
