import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useId, useState } from 'react'
import { Link } from 'react-router-dom'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'
import { cardReveal, premiumEase, subtleStagger } from '../../utils/animations'

function InclusionGroup({ items = [], title }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()
  const prefersReducedMotion = useReducedMotionPreference()

  if (!items.length) {
    return null
  }

  return (
    <div className="border border-white/10 bg-black/20">
      <button
        aria-controls={contentId}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {title}
        <ChevronDown
          aria-hidden="true"
          className={[
            'shrink-0 text-cyan-300 transition duration-300',
            isOpen ? 'rotate-180' : '',
          ].join(' ')}
          size={18}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className="overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.28, ease: premiumEase }}
          >
            <motion.ul
              className="grid gap-2 border-t border-white/10 px-4 py-4 text-sm leading-6 text-white/68"
              id={contentId}
              initial="hidden"
              variants={prefersReducedMotion ? {} : subtleStagger}
              animate="visible"
            >
              {items.map((item) => (
                <motion.li
                  className="flex gap-3"
                  key={item}
                  variants={prefersReducedMotion ? {} : cardReveal}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,217,255,0.65)]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function PackageCard({ badges = [], packageData, tone = 'standard' }) {
  const prefersReducedMotion = useReducedMotionPreference()
  const {
    additionalDescription,
    description,
    duration,
    exterior,
    importantNote,
    interior,
    price,
    recommendedFrequency,
    title,
  } = packageData

  const isFeatured = tone === 'featured'

  return (
    <motion.article
      className={[
        'relative flex h-full min-h-full flex-col overflow-hidden border bg-[#070707]/92 shadow-[0_22px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/55',
        isFeatured
          ? 'border-cyan-300/50 shadow-[0_0_46px_rgba(0,217,255,0.14)]'
          : 'border-white/[0.12]',
      ].join(' ')}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.992 }}
    >
      {isFeatured ? (
        <motion.span
          aria-hidden="true"
          animate={prefersReducedMotion ? undefined : { x: ['-120%', '120%'] }}
          className="pointer-events-none absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
          transition={{ duration: 3.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.5 }}
        />
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          {badges.map((badge) => (
            <span
              className="border border-cyan-300/50 bg-cyan-300/10 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-cyan-200"
              key={badge}
            >
              {badge}
            </span>
          ))}
          {recommendedFrequency ? (
            <span className="border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-white/66">
              {recommendedFrequency}
            </span>
          ) : null}
        </div>

        <h3 className="font-['Orbitron'] text-xl font-semibold uppercase leading-tight tracking-[0.08em] text-white">
          {title}
        </h3>

        <div className="mt-5 grid gap-3 border-y border-white/10 py-4 sm:grid-cols-2">
          <div>
            <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/45">
              Price
            </p>
            <p className="mt-1 font-['Orbitron'] text-lg font-semibold uppercase tracking-[0.12em] text-cyan-300">
              {price}
            </p>
          </div>
          {duration ? (
            <div>
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/45">
                Duration
              </p>
              <p className="mt-1 text-sm font-semibold text-white/80">{duration}</p>
            </div>
          ) : null}
        </div>

        <p className="mt-5 text-sm leading-7 text-white/70">{description}</p>
        {additionalDescription ? (
          <p className="mt-3 text-sm leading-7 text-white/58">{additionalDescription}</p>
        ) : null}
        {importantNote ? (
          <p className="mt-5 border-l-2 border-cyan-300/80 bg-cyan-300/[0.06] px-4 py-3 text-sm leading-6 text-white/78">
            {importantNote}
          </p>
        ) : null}

        <div className="mt-6 grid gap-3">
          <InclusionGroup items={exterior} title="Exterior Inclusions" />
          <InclusionGroup items={interior} title="Interior Inclusions" />
        </div>

        <div className="mt-auto pt-6">
          <Link
            className="group inline-flex h-14 w-full items-center justify-center gap-3 border border-cyan-300/65 bg-black/35 px-6 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_24px_rgba(0,217,255,0.13)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_34px_rgba(0,217,255,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            to="/contact"
          >
            Book This Package
            <ChevronRight
              aria-hidden="true"
              className="text-cyan-300 transition group-hover:translate-x-1"
              size={16}
            />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default PackageCard
