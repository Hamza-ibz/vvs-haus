import { motion } from 'framer-motion'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'
import {
  fadeUp,
  reducedMotionVariants,
  viewportOnce,
} from '../../utils/animations'

function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  variants = fadeUp,
  viewport = viewportOnce,
}) {
  const prefersReducedMotion = useReducedMotionPreference()
  const Component = motion[as] ?? motion.div
  const activeVariants = prefersReducedMotion ? reducedMotionVariants : variants

  return (
    <Component
      className={className}
      initial="hidden"
      variants={activeVariants}
      viewport={viewport}
      whileInView="visible"
      {...(!prefersReducedMotion && delay
        ? { transition: { delay } }
        : {})}
    >
      {children}
    </Component>
  )
}

export default Reveal
