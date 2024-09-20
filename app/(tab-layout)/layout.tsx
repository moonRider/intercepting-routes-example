import { ReactNode } from 'react'

export default function TabLayout({
  children,
}: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <header className="bg-primary-700 h-16 w-full py-3 px-5 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <ul className="flex space-x-4">
            <li>tab-1</li>
            <li>tab-2</li>
          </ul>
        </nav>
      </header>
      <main className="flex overflow-hidden flex-col flex-1">{children}</main>
    </div>
  )
}
