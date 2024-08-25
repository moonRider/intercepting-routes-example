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
      {children}
      {modal}
    </div>
  )
}
