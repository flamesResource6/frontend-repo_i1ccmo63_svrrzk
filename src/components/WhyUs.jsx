import { ShieldCheck, Award, Users, Ruler } from 'lucide-react'
import { motion } from 'framer-motion'

const points = [
  {
    icon: Award,
    title: 'Höchste Qualität',
    text: 'Premium-Materialien, ausgewählte Hersteller und präzise Verarbeitung – für Böden, die Jahrzehnte begeistern.'
  },
  {
    icon: Users,
    title: 'Regionale Handwerker',
    text: 'Verlässliche Teams aus der Region – sauber, pünktlich, respektvoll im Umgang mit Ihrem Zuhause.'
  },
  {
    icon: Ruler,
    title: 'Maßarbeit & Planung',
    text: 'Individuelle Beratung, exakte Aufmaße und durchdachte Verlegebilder – stimmig bis ins Detail.'
  },
  {
    icon: ShieldCheck,
    title: 'Erfahrung & Garantie',
    text: 'Langjährige Projekterfahrung und transparente Gewährleistung – für maximale Sicherheit.'
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Warum Fuhrmann Parkett?</h2>
            <p className="mt-5 text-neutral-700">Wir verbinden Designverständnis mit meisterlicher Ausführung. Das Ergebnis: Böden mit Charakter, die Räume definieren.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm"
              >
                <div className="h-12 w-12 rounded-xl bg-neutral-900 text-amber-400 flex items-center justify-center">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-neutral-700 text-sm leading-6">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
