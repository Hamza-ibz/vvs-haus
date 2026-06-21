import { motion } from 'framer-motion'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'
import {
  reducedMotionVariants,
  staggerContainer,
  viewportOnce,
} from '../../utils/animations'

function StaggerContainer({
  as = 'div',
  children,
  className = '',
  variants = staggerContainer,
  viewport = viewportOnce,
}) {
  const prefersReducedMotion = useReducedMotionPreference()
  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={className}
      initial="hidden"
      variants={prefersReducedMotion ? reducedMotionVariants : variants}
      viewport={viewport}
      whileInView="visible"
    >
      {children}
    </Component>
  )
}

export default StaggerContainer
