import { motion } from 'framer-motion'

const heroImage = '/assets/images/mercedes-back.jpg'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.14,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

function Hero() {
  return (
    <section className="relative left-1/2 min-h-svh w-screen -translate-x-1/2 overflow-hidden bg-[#050505] text-left">
      <motion.img
        alt="VVS Haus Mercedes detailing"
        animate={{ scale: 1.05 }}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        src={heroImage}
        transition={{ duration: 8, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.82)_34%,rgba(5,5,5,0.42)_68%,rgba(5,5,5,0.74)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_46%,rgba(0,217,255,0.18),transparent_28rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <motion.div
        animate="visible"
        className="relative z-10 flex min-h-svh items-center px-6 py-24 sm:px-10 lg:px-16"
        initial="hidden"
        variants={container}
      >
        <div className="max-w-4xl">
          <motion.p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300 sm:text-sm"
            variants={item}
          >
            Professional Mobile Detailing
          </motion.p>
          <motion.h1
            className="font-['Orbitron'] text-4xl font-semibold uppercase leading-[1.05] tracking-[0.06em] text-white sm:text-6xl lg:text-7xl"
            variants={item}
          >
            Premium Mobile Detailing, Delivered To You
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
            variants={item}
          >
            Luxury vehicle care for owners who expect every detail to be flawless.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            variants={item}
          >
            <a
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/70 bg-cyan-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_34px_rgba(0,217,255,0.28)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_48px_rgba(0,217,255,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              href="#booking"
            >
              Book Your Detail
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/55 hover:text-cyan-200 hover:shadow-[0_0_32px_rgba(0,217,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              href="#services"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
