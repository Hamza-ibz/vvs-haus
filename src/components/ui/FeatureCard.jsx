import { motion } from 'framer-motion'
import { isValidElement } from 'react'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'

function FeatureCard({ icon, title, description, className = '' }) {
  const Icon = icon && !isValidElement(icon) ? icon : null
  const prefersReducedMotion = useReducedMotionPreference()

  return (
    <motion.article
      className={[
        'group rounded-2xl border border-white/10 bg-[#111111]/80 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.3)]',
        'transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.05]',
        className,
      ].join(' ')}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
    >
      {Icon || icon ? (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-300 shadow-[0_0_26px_rgba(0,217,255,0.16)] transition duration-300 group-hover:border-cyan-300/55 group-hover:bg-cyan-300/15">
          {Icon ? <Icon aria-hidden="true" size={22} strokeWidth={1.8} /> : icon}
        </div>
      ) : null}
      {title ? (
        <h3 className="mb-3 font-['Orbitron'] text-lg font-semibold uppercase tracking-[0.08em] text-white">
          {title}
        </h3>
      ) : null}
      {description ? (
        <p className="text-sm leading-7 text-white/62">{description}</p>
      ) : null}
    </motion.article>
  )
}

export default FeatureCard
