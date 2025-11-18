import { useState } from 'react'
import { Menu } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Startseite' },
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#referenzen', label: 'Referenzen' },
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 backdrop-blur-xl bg-white/70 border-b border-neutral-200/70"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-700 ring-2 ring-amber-400/50" />
            <div className="flex flex-col leading-none">
              <span className="text-neutral-900 font-semibold tracking-tight">Fuhrmann Parkett</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Manufaktur</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-neutral-700 hover:text-neutral-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors border border-neutral-800">
              Jetzt Beratung erhalten
            </a>
          </nav>

          <button aria-label="Menü" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-neutral-300 text-neutral-700">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-neutral-200 bg-white shadow-lg overflow-hidden">
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50">
                  {item.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setOpen(false)} className="mt-2 mx-2 inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800">
                Jetzt Beratung erhalten
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
