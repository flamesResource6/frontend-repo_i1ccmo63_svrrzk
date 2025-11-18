import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1616596872434-831f7b094ea7?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560185009-dddeb820c7b8?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505692795793-20f543407193?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582582621957-2acec05ecb00?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590681628994-12da8fb2ee05?q=80&w=1600&auto=format&fit=crop',
]

export default function Showcase() {
  return (
    <section id="referenzen" className="relative py-20 sm:py-28 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Ausgewählte Referenzen</h2>
          <p className="mt-4 text-neutral-700">Einblicke in realisierte Projekte – sorgfältig geplant, präzise umgesetzt. Modern, zeitlos, wertstabil.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl bg-neutral-200 aspect-[4/3] ring-1 ring-neutral-200"
            >
              <img src={src} alt="Luxuriöses Interieur mit Parkett" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
