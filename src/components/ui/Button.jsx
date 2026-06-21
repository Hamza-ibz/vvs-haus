import { motion } from 'framer-motion'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'

const variants = {
  primary:
    'border-cyan-300/70 bg-cyan-300 text-black shadow-[0_0_28px_rgba(0,217,255,0.22)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_40px_rgba(0,217,255,0.35)]',
  secondary:
    'border-white/15 bg-white/[0.03] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-cyan-300/55 hover:text-cyan-200 hover:shadow-[0_0_32px_rgba(0,217,255,0.18)]',
}

function Button({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}) {
  const variantClass = variants[variant] ?? variants.primary
  const prefersReducedMotion = useReducedMotionPreference()

  return (
    <motion.button
      className={[
        'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em]',
        'transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300',
        variantClass,
        className,
      ].join(' ')}
      type={type}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
