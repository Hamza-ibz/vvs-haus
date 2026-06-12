import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const logoSrc = '/assets/logos/logo.png'

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.section
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex min-h-svh items-center justify-center overflow-hidden bg-[#050505] px-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.14),transparent_34%),linear-gradient(180deg,#050505_0%,#111111_50%,#050505_100%)]" />
          <motion.div
            animate={{ opacity: [0.25, 0.75, 0.25], scale: [0.92, 1.08, 0.92] }}
            className="absolute h-56 w-56 rounded-full border border-cyan-300/20 shadow-[0_0_70px_rgba(0,217,255,0.24)] sm:h-72 sm:w-72"
            transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
          />
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex flex-col items-center gap-7"
            initial={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 18px rgba(0, 217, 255, 0.18))',
                  'drop-shadow(0 0 34px rgba(0, 217, 255, 0.45))',
                  'drop-shadow(0 0 18px rgba(0, 217, 255, 0.18))',
                ],
                opacity: [0.82, 1, 0.82],
              }}
              className="relative"
              transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
            >
              <img
                alt="VVS Haus"
                className="h-24 w-24 object-contain sm:h-32 sm:w-32"
                src={logoSrc}
              />
              <motion.span
                animate={{ x: ['-140%', '140%'] }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                transition={{ duration: 1.45, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.35 }}
              />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.45, 1, 0.45] }}
              className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-300 to-transparent sm:w-44"
              transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity }}
            />
          </motion.div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  )
}

export default LoadingScreen
