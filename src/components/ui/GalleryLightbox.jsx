import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'
import { modalReveal, reducedMotionVariants } from '../../utils/animations'

function GalleryLightbox({
  item,
  items,
  onClose,
  onNext,
  onPrevious,
}) {
  const prefersReducedMotion = useReducedMotionPreference()

  useEffect(() => {
    if (!item) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNext()
      if (event.key === 'ArrowLeft') onPrevious()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose, onNext, onPrevious])

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 px-4 py-6 backdrop-blur-xl"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            aria-labelledby="gallery-lightbox-title"
            aria-modal="true"
            animate="visible"
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col border border-white/12 bg-[#050505] shadow-[0_0_70px_rgba(0,217,255,0.14)]"
            exit="exit"
            initial="hidden"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            variants={prefersReducedMotion ? reducedMotionVariants : modalReveal}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <div>
                <h2
                  className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.16em] text-white sm:text-base"
                  id="gallery-lightbox-title"
                >
                  {item.title}
                </h2>
                {item.description ? (
                  <p className="mt-1 text-xs leading-5 text-white/58">{item.description}</p>
                ) : null}
              </div>
              <button
                aria-label="Close gallery image"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-white/12 text-white transition hover:border-cyan-300/60 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                onClick={onClose}
                type="button"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black">
              <motion.img
                animate={{ opacity: 1 }}
                alt={item.alt}
                className="max-h-[72vh] w-full object-contain"
                initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
                key={item.id}
                src={item.image}
                transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
              />

              {items.length > 1 ? (
                <>
                  <motion.button
                    aria-label="Previous gallery image"
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-cyan-300/50 bg-black/62 text-cyan-200 shadow-[0_0_24px_rgba(0,217,255,0.18)] backdrop-blur-xl transition hover:border-cyan-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:left-5"
                    onClick={onPrevious}
                    type="button"
                    whileHover={prefersReducedMotion ? undefined : { x: -3, scale: 1.04 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
                  >
                    <ChevronLeft aria-hidden="true" size={22} />
                  </motion.button>
                  <motion.button
                    aria-label="Next gallery image"
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-cyan-300/50 bg-black/62 text-cyan-200 shadow-[0_0_24px_rgba(0,217,255,0.18)] backdrop-blur-xl transition hover:border-cyan-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:right-5"
                    onClick={onNext}
                    type="button"
                    whileHover={prefersReducedMotion ? undefined : { x: 3, scale: 1.04 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
                  >
                    <ChevronRight aria-hidden="true" size={22} />
                  </motion.button>
                </>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default GalleryLightbox
