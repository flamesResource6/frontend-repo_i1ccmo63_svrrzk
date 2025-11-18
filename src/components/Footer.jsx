export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-500 ring-2 ring-amber-400/50" />
              <div className="leading-tight">
                <div className="text-white font-semibold">Fuhrmann Parkett</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Manufaktur</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-neutral-400">Hochwertige Böden aus einer Hand – Beratung, Planung, Verlegung und Renovierung. Verlässlich. Präzise. Zeitlos.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Kontakt</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Telefon: 089 / 123 45 67</li>
              <li>E-Mail: kontakt@fuhrmann-parkett.de</li>
              <li>Mo–Fr 9:00–17:00 Uhr</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Rechtliches</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Impressum</a></li>
              <li><a href="#" className="hover:text-white">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Fuhrmann Parkett – Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  )
}
