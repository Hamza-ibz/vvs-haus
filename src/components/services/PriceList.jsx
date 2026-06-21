import { motion } from 'framer-motion'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'
import { fadeRight, subtleStagger } from '../../utils/animations'

function PriceList({ items = [], title }) {
  const prefersReducedMotion = useReducedMotionPreference()

  if (!items.length) {
    return null
  }

  return (
    <motion.div
      className="border border-white/10 bg-[#070707]/82 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.28)]"
      initial={prefersReducedMotion ? false : 'hidden'}
      viewport={{ once: true, amount: 0.2 }}
      variants={prefersReducedMotion ? undefined : subtleStagger}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
    >
      {title ? (
        <h3 className="mb-4 font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.16em] text-white">
          {title}
        </h3>
      ) : null}
      <dl className="divide-y divide-white/10">
        {items.map(({ id, price, title: itemTitle }) => (
          <motion.div
            className="grid gap-2 py-3 transition duration-300 hover:translate-x-1 hover:text-cyan-100 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
            key={id}
            variants={prefersReducedMotion ? undefined : fadeRight}
          >
            <dt className="text-sm font-medium text-white/78">{itemTitle}</dt>
            <dd className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.12em] text-cyan-300 sm:text-right">
              {price}
            </dd>
          </motion.div>
        ))}
      </dl>
    </motion.div>
  )
}

export default PriceList
