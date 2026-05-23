import type { ReactNode } from 'react'
import Link from 'next/link'

interface NavChild {
  title: string
  href: string
}

interface NavItem {
  title: string
  href?: string
  children?: NavChild[]
}

interface Props {
  nav: NavItem[]
  title: string
  description?: string
  children: ReactNode
}

export default function DocLayout({ nav, title, description, children }: Props) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-72 shrink-0 border-r border-zinc-200 p-6 sticky top-0 h-screen overflow-y-auto">
        <Link href="/" className="block mb-8 text-lg font-semibold text-zinc-900">
          Acme Docs
          <span className="ml-2 text-xs font-normal text-zinc-400">v2</span>
        </Link>
        <nav className="space-y-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.title}>
                <span className="block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  {item.title}
                </span>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="block rounded px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
              >
                {item.title}
              </Link>
            ),
          )}
        </nav>
      </aside>
      <div className="flex-1 min-w-0">
        <header className="border-b border-zinc-100 px-12 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">{title}</h1>
          {description && <p className="mt-2 text-zinc-500">{description}</p>}
        </header>
        <main className="px-12 py-8 max-w-3xl">
          {children}
        </main>
      </div>
    </div>
  )
}
