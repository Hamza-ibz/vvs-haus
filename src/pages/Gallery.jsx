import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Gem,
  Image as ImageIcon,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import GalleryCard from '../components/ui/GalleryCard'
import gallery, { transformations } from '../data/gallery'

const trustItems = [
  {
    title: 'Real Results',
    text: 'No filters. Just detail.',
    Icon: ImageIcon,
  },
  {
    title: 'German Precision',
    text: 'Perfection in every detail.',
    Icon: Gem,
  },
  {
    title: 'Trusted Quality',
    text: 'Premium products. Proven results.',
    Icon: ShieldCheck,
  },
]

const filters = ['All', 'Exterior', 'Interior', 'Transformations', 'Our Setup']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionTitle({ children }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-10 bg-cyan-300/55" />
      <h2 className="relative font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.42em] text-white">
        {children}
        <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,217,255,0.9)]" />
      </h2>
      <span className="h-px w-10 bg-cyan-300/55" />
    </div>
  )
}

function TransformationPanel({ after, before, title }) {
  return (
    <article className="group relative aspect-[1.7] overflow-hidden border border-white/12 bg-[#111111] shadow-[0_18px_60px_rgba(0,0,0,0.34)] transition duration-300 hover:border-cyan-300/45">
      <img
        alt={`${title} before`}
        className="absolute inset-0 h-full w-1/2 object-cover brightness-[0.62] contrast-[1.1] grayscale"
        src={before}
      />
      <img
        alt={`${title} after`}
        className="absolute inset-y-0 right-0 h-full w-1/2 object-cover brightness-[0.92] contrast-[1.08]"
        src={after}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.35)]" />
      <span className="absolute bottom-4 left-7 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-white">
        Before
      </span>
      <span className="absolute bottom-4 right-7 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-white">
        After
      </span>
    </article>
  )
}

function Gallery() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] pt-32 sm:pt-36 lg:pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#050505]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] to-transparent"
        />

        <div className="relative mx-auto grid min-h-[29rem] max-w-[92rem] items-center gap-8 px-6 pb-9 sm:px-8 lg:grid-cols-[0.66fr_1fr] lg:px-16 2xl:px-20">
          <motion.div
            animate="visible"
            className="max-w-xl pt-8 lg:pt-12"
            initial="hidden"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.p
              className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-cyan-300"
              variants={fadeUp}
            >
              Our Gallery
            </motion.p>
            <motion.h1
              className="font-['Orbitron'] text-4xl font-semibold uppercase leading-[1.16] tracking-[0.05em] text-white sm:text-5xl lg:text-[3.4rem]"
              variants={fadeUp}
            >
              Built Different.
              <br />
              Results That <span className="text-cyan-300">Speak.</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-md text-base leading-8 text-white/78 sm:text-lg"
              variants={fadeUp}
            >
              Real transformations. Real results. Every detail, perfected.
            </motion.p>

            <motion.div
              className="mt-9 grid gap-4 sm:grid-cols-3"
              variants={fadeUp}
            >
              {trustItems.map(({ Icon, text, title }) => (
                <div className="flex items-center gap-3 border-r border-white/10 pr-4 last:border-r-0" key={title}>
                  <Icon aria-hidden="true" className="shrink-0 text-cyan-300" size={30} strokeWidth={1.45} />
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-white/62">{text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0, scale: 1 }}
            className="relative hidden self-end lg:block"
            initial={{ opacity: 0, x: 28, scale: 1.02 }}
            transition={{ delay: 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative ml-auto h-[25rem] overflow-hidden">
              <img
                alt="VVS Haus van and Mercedes showcasing gallery results"
                className="h-full w-full object-cover object-center brightness-[1.14] contrast-[1.08] saturate-[1.05]"
                src="/assets/images/van-car.jpg"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0)_18%,rgba(5,5,5,0)_78%,#050505_100%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,rgba(5,5,5,0)_18%,rgba(5,5,5,0)_76%,#050505_100%)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] px-6 py-8 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,217,255,0.1),transparent_24rem),linear-gradient(135deg,#050505_0%,#070707_44%,#111111_68%,#050505_100%)]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <SectionTitle>Transformations</SectionTitle>
          <div className="relative mt-8">
            <button
              aria-label="Previous transformation"
              className="absolute -left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/65 text-cyan-200 shadow-[0_0_24px_rgba(0,217,255,0.14)] xl:inline-flex"
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={18} />
            </button>
            <motion.div
              className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
              initial="hidden"
              transition={{ staggerChildren: 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
            >
              {transformations.map((item) => (
                <motion.div key={item.id} variants={fadeUp}>
                  <TransformationPanel {...item} />
                </motion.div>
              ))}
            </motion.div>
            <button
              aria-label="Next transformation"
              className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/65 text-cyan-200 shadow-[0_0_24px_rgba(0,217,255,0.14)] xl:inline-flex"
              type="button"
            >
              <ChevronRight aria-hidden="true" size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-6 py-8 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(0,217,255,0.1),transparent_26rem),linear-gradient(225deg,#050505_0%,#070707_42%,#111111_66%,#050505_100%)]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <SectionTitle>Gallery</SectionTitle>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter, index) => (
              <button
                className={[
                  'min-w-28 border px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition duration-300',
                  index === 0
                    ? 'border-cyan-300/70 bg-cyan-300/8 text-cyan-200 shadow-[0_0_22px_rgba(0,217,255,0.14)]'
                    : 'border-white/10 bg-black/20 text-white/70 hover:border-cyan-300/45 hover:text-cyan-200',
                ].join(' ')}
                key={filter}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div
            className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
            initial="hidden"
            transition={{ staggerChildren: 0.05 }}
            viewport={{ once: true, amount: 0.12 }}
            whileInView="visible"
          >
            {gallery.map((item) => (
              <motion.div key={item.id} variants={fadeUp}>
                <GalleryCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 px-6 py-7 sm:px-8 lg:px-16 2xl:px-20">
        <div className="absolute inset-0 opacity-55" aria-hidden="true">
          <img
            alt=""
            className="h-full w-full object-cover object-center brightness-[1.05] contrast-[1.1]"
            src="/assets/images/mercedes-back.jpg"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.86)_0%,rgba(5,5,5,0.62)_48%,rgba(5,5,5,0.88)_100%)]"
        />
        <div className="relative mx-auto flex max-w-[92rem] flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.1em] text-white sm:text-3xl">
              Your Car Deserves The <span className="text-cyan-300">VVS Finish.</span>
            </h2>
            <p className="mt-3 text-base text-white/72">
              Book your detail today and see the difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Link
              className="group inline-flex min-w-72 items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-9 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)]"
              to="/contact"
            >
              Book Your Detail
              <ChevronRight aria-hidden="true" className="text-cyan-300 transition group-hover:translate-x-1" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
