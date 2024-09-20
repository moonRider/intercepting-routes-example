'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function TicketList() {
  const [data, setData] = useState([])

  useEffect(() => {
    setTimeout(() => {
      console.log('set data')
      setData(Array.from({ length: 10 }))
    }, 100)
  }, [])

  return (
    <ul className="flex-1 flex flex-col space-y-1 px-2">
      {data.map((_, idx) => {
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
