import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Exzellente Beratung und perfekte Ausführung. Unser Wohnzimmer wirkt wie neu – warm, ruhig, hochwertig.',
    name: 'Familie K., München'
  },
  {
    quote: 'Schnelle, saubere Parkettrenovierung. Man sieht die Erfahrung in jedem Detail. Absolute Empfehlung.',
    name: 'Architekturbüro S.'
  },
  {
    quote: 'Von der Bemusterung bis zur letzten Leiste – professionell, freundlich, präzise. Genau so stellt man sich Handwerk vor.',
    name: 'A. Weber'
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Kundenstimmen</h2>
          <p className="mt-4 text-neutral-700">Vertrauen entsteht durch Ergebnisse. Stimmen von Bauherren, Architekten und Eigentümern.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <p className="text-neutral-900 leading-7">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-neutral-600">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
