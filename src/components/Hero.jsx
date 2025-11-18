import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        {/* Soft light background without external image to ensure visibility everywhere */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900"
            >
              Parkett, das Räume veredelt.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-neutral-700 max-w-xl"
            >
              Maßgeschneiderte Bodenlösungen mit präziser Handwerkskunst – von der Beratung bis zur perfekten Verlegung. Für Wohnräume, die Wert und Wärme ausstrahlen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#kontakt" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 border border-neutral-800">
                Kostenlose Beratung anfragen
              </a>
              <a href="#referenzen" className="text-neutral-900 hover:text-neutral-700 font-medium">
                Referenzen ansehen →
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-neutral-200 shadow-2xl">
                {/* Built-in elegant placeholder (no external images) */}
                <div
                  role="img"
                  aria-label="Edler Parkettboden – dekoratives Platzhalterbild"
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(120,72,24,0.15) 0%, rgba(214,176,123,0.2) 35%, rgba(120,72,24,0.15) 70%), repeating-linear-gradient(90deg, rgba(120,72,24,0.25) 0px, rgba(120,72,24,0.25) 2px, rgba(214,176,123,0.15) 2px, rgba(214,176,123,0.15) 10px)',
                    backgroundColor: '#f5f3ee',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
