import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Kontakt & Beratung</h2>
            <p className="mt-4 text-neutral-700">Lassen Sie uns über Ihr Projekt sprechen. Wir beraten Sie persönlich und erstellen ein maßgeschneidertes Angebot.</p>
            <div className="mt-8 space-y-3 text-neutral-700">
              <p><strong>Fuhrmann Parkett</strong></p>
              <p>Telefon: 089 / 123 45 67</p>
              <p>E-Mail: kontakt@fuhrmann-parkett.de</p>
              <p>Öffnungszeiten: Mo–Fr 9:00–17:00 Uhr</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
              onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank! Wir melden uns zeitnah.'); }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-800">Vor- und Nachname</label>
                  <input type="text" required className="mt-2 w-full rounded-xl border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800">E-Mail</label>
                  <input type="email" required className="mt-2 w-full rounded-xl border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800">Telefon</label>
                  <input type="tel" className="mt-2 w-full rounded-xl border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800">Leistungsbereich</label>
                  <select className="mt-2 w-full rounded-xl border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900">
                    <option>Parkettverlegung</option>
                    <option>Parkettrenovierung / Schleifen / Versiegeln</option>
                    <option>Vinyl- und Designböden</option>
                    <option>Treppensanierung</option>
                    <option>Beratung & Planung</option>
                    <option>Verkauf hochwertiger Bodenbeläge</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-neutral-800">Projektbeschreibung</label>
                  <textarea rows="5" className="mt-2 w-full rounded-xl border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900" placeholder="Größe, Materialwunsch, Ort, Zeitraum..." />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800">Angebot anfordern</button>
                <a href="#" className="text-neutral-900 hover:text-neutral-700 font-medium">Jetzt Beratung erhalten</a>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
