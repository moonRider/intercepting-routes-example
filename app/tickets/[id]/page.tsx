'use client'

import { useRouter } from 'next/navigation'

import { TicketList } from '../ticket-list'

// shareable detail page partial
export default function TicketDetailPage() {
  const router = useRouter()
  return (
    <>
      <TicketList />
      <button onClick={() => router.push('/tickets')}>back to list</button>
    </>
  )
}
