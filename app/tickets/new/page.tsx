import Link from 'next/link'

export default function TicketsNewPage() {
  return (
    <div className="flex">
      <div>This is the Ticket New Page</div>
      <Link href="/tickets">
        <button>Back To List Page</button>
      </Link>
    </div>
  )
}
