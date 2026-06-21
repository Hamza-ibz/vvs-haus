export const premiumEase = [0.22, 1, 0.36, 1]

export const viewportOnce = {
  once: true,
  amount: 0.2,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: premiumEase },
  },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: premiumEase },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: 34 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.66, ease: premiumEase },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: -34 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.66, ease: premiumEase },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: premiumEase },
  },
}

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.04, clipPath: 'inset(0 0 12% 0)' },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.9, ease: premiumEase },
  },
}

export const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: premiumEase },
  },
}

export const modalReveal = {
  hidden: { opacity: 0, scale: 0.98, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.22, ease: premiumEase },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 12,
    transition: { duration: 0.18, ease: premiumEase },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const subtleStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
}

export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
}
