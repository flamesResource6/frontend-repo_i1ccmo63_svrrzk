import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply" />
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
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop"
                  alt="Edler Parkettboden in modernem Interior"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
