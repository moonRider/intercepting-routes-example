import Link from 'next/link'
import { ReactNode } from 'react'

export default function TicketsLayout({
  children,
  modal,
}: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <div className="flex flex-col">
      <Link href="/tickets/new">
        <button className="px-4 py-2 rounded-sm bg-blue-700 text-white">
          Create Ticket
        </button>
      </Link>
      <div className="flex flex-row">
        {children}
        {modal}
      </div>
    </div>
  )
}
