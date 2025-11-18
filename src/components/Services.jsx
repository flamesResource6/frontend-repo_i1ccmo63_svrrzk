import { Hammer, Ruler, Layers, Stairs } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Hammer,
    title: 'Parkettverlegung',
    desc: 'Premium-Verlegung mit perfektem Fugenbild, exakten Übergängen und langlebigen Oberflächen.'
  },
  {
    icon: Layers,
    title: 'Parkettrenovierung',
    desc: 'Schleifen, Ölen oder Versiegeln: Wir lassen gealtertes Parkett wieder neu erstrahlen.'
  },
  {
    icon: Layers,
    title: 'Vinyl- & Designböden',
    desc: 'Edle Optiken mit hoher Widerstandskraft – ideal für anspruchsvolle Wohn- und Objektbereiche.'
  },
  {
    icon: Stairs,
    title: 'Treppensanierung',
    desc: 'Stufen in Parkettoptik – bündig, sicher, formschön und perfekt in den Boden integriert.'
  },
  {
    icon: Ruler,
    title: 'Beratung & Planung',
    desc: 'Individuelle Materialempfehlungen, Farb- und Verlegekonzepte – präzise und stilsicher.'
  },
  {
    icon: Layers,
    title: 'Verkauf hochwertiger Beläge',
    desc: 'Ausgewählte Parkette, Dielen und Designböden führender Hersteller – direkt über uns beziehbar.'
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Unsere Leistungen</h2>
          <p className="mt-4 text-neutral-700">Ganzheitliche Lösungen – von der Erstberatung bis zur finalen Montage. Immer mit Blick für Details und Wertbeständigkeit.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-neutral-900 text-amber-400 flex items-center justify-center">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-neutral-700 text-sm leading-6">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
