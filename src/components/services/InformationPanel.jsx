import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'
import { cardReveal, subtleStagger } from '../../utils/animations'

function InformationPanel({ items = [], title = 'Important Information' }) {
  const prefersReducedMotion = useReducedMotionPreference()

  if (!items.length) {
    return null
  }

  return (
    <motion.aside
      className="border border-cyan-300/28 bg-cyan-300/[0.045] p-5 shadow-[0_0_46px_rgba(0,217,255,0.1)] sm:p-6"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      viewport={{ once: true, amount: 0.24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-300/45 bg-black/30 text-cyan-300">
          <Info aria-hidden="true" size={21} strokeWidth={1.7} />
        </span>
        <h2 className="font-['Orbitron'] text-lg font-semibold uppercase tracking-[0.14em] text-white">
          {title}
        </h2>
      </div>
      <motion.ul
        className="grid gap-3 md:grid-cols-2"
        initial={prefersReducedMotion ? false : 'hidden'}
        variants={prefersReducedMotion ? undefined : subtleStagger}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
      >
        {items.map(({ id, text }) => (
          <motion.li
            className="flex gap-3 text-sm leading-6 text-white/72"
            key={id}
            variants={prefersReducedMotion ? undefined : cardReveal}
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,217,255,0.65)]" />
            <span>{text}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  )
}

export default InformationPanel
