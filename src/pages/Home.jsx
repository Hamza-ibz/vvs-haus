import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, ShieldCheck, Sparkles, Truck, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

const vanImage = '/assets/images/van-with-logo.jpg'
const vehicleImage = '/assets/images/mercedes-back.jpg'
const diamondLogo = '/assets/logos/logo-diamond-transparent.png'

const featureStrip = [
  {
    Icon: Truck,
    label: 'Mobile Service',
    sublabel: 'We come to you',
  },
  {
    Icon: Sparkles,
    label: 'Premium Products',
    sublabel: 'Only the best',
  },
  {
    Icon: Wrench,
    label: 'German Precision',
    sublabel: 'Perfection in detail',
  },
  {
    Icon: ShieldCheck,
    label: 'Satisfaction Guaranteed',
    sublabel: 'Guaranteed',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.11,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: 'easeOut' },
  },
}

function Home() {
  return (
    <section className="relative left-1/2 h-svh min-h-[700px] w-screen -translate-x-1/2 overflow-hidden bg-[#050505] px-5 pb-4 pt-24 text-white sm:px-8 lg:min-h-0 lg:px-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#111111_46%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,217,255,0.12),transparent_17rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.35)_28%,rgba(5,5,5,0.18)_50%,rgba(5,5,5,0.42)_72%,rgba(5,5,5,0.9)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#050505] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/78 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: ['-120%', '120%'], opacity: [0, 0.32, 0] }}
        className="absolute top-[40%] h-px w-1/2 rotate-[-12deg] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-[1px]"
        initial={{ x: '-120%', opacity: 0 }}
        transition={{ delay: 1.1, duration: 4.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 }}
      />

      <motion.img
        alt="VVS Haus branded mobile detailing van"
        animate={{ opacity: 0.74, x: 0, scale: 1, y: [0, -5, 0] }}
        className="absolute bottom-[8.6rem] left-[-9.5rem] hidden w-[46rem] max-w-none object-contain shadow-[0_34px_120px_rgba(0,0,0,0.7)] xl:block 2xl:left-[-4.5rem] 2xl:w-[52rem]"
        initial={{ opacity: 0, x: -46, scale: 0.98 }}
        src={vanImage}
        transition={{
          duration: 1.15,
          ease: 'easeOut',
          y: { delay: 1.2, duration: 8.5, ease: 'easeInOut', repeat: Infinity },
        }}
      />

      <motion.img
        alt="Premium Mercedes vehicle detailed by VVS Haus"
        animate={{ opacity: 0.76, x: 0, scale: 1, y: [0, -4, 0] }}
        className="absolute bottom-[8.6rem] right-[-10.5rem] hidden w-[47rem] max-w-none object-contain shadow-[0_34px_120px_rgba(0,0,0,0.72)] lg:block 2xl:right-[-4rem] 2xl:w-[53rem]"
        initial={{ opacity: 0, x: 46, scale: 0.98 }}
        src={vehicleImage}
        transition={{
          duration: 1.15,
          ease: 'easeOut',
          y: { delay: 1.45, duration: 7.8, ease: 'easeInOut', repeat: Infinity },
        }}
      />

      <motion.div
        animate="visible"
        className="relative z-10 mx-auto flex h-full max-w-[92rem] flex-col items-center justify-end text-center"
        initial="hidden"
        variants={container}
      >
        <div className="flex w-full flex-1 flex-col items-center justify-center pb-1 pt-2 lg:pt-8">
          <motion.div
            className="relative mb-0 flex h-[13.5rem] w-[13.5rem] items-center justify-center overflow-hidden sm:h-[18rem] sm:w-[18rem] lg:h-[23rem] lg:w-[23rem] 2xl:h-[25rem] 2xl:w-[25rem]"
            variants={item}
          >
            <motion.img
              alt="VVS Haus diamond"
              animate={{
                filter: [
                  'drop-shadow(0 0 18px rgba(0,217,255,0.7))',
                  'drop-shadow(0 0 28px rgba(0,217,255,0.82))',
                  'drop-shadow(0 0 18px rgba(0,217,255,0.7))',
                ],
                y: [0, -7, 0],
              }}
              className="relative h-full w-full object-contain drop-shadow-[0_0_18px_rgba(0,217,255,0.7)]"
              src={diamondLogo}
              transition={{
                filter: { duration: 4.8, ease: 'easeInOut', repeat: Infinity },
                y: { duration: 5.8, ease: 'easeInOut', repeat: Infinity },
              }}
            />
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [0, 1, 0, 0, 1, 0], x: ['-145%', '145%', '145%', '-145%', '-145%', '145%'] }}
              className="pointer-events-none absolute inset-y-10 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-sm"
              initial={{ x: '-145%' }}
              transition={{ delay: 1.5, duration: 6.8, ease: 'easeInOut', repeat: Infinity }}
            />
          </motion.div>

          <motion.p
            className="mb-2 font-['Orbitron'] text-sm uppercase tracking-[0.58em] text-white/86 sm:text-base lg:text-lg"
            variants={item}
          >
            Precision
          </motion.p>

          <motion.h1
            className="max-w-6xl font-['Orbitron'] text-[clamp(2rem,5vw,3.95rem)] font-medium uppercase leading-none tracking-[0.15em] text-white"
            variants={item}
          >
            Mobile <span className="text-cyan-300 drop-shadow-[0_0_22px_rgba(0,217,255,0.45)]">Detailing</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-3xl text-xs uppercase leading-6 tracking-[0.22em] text-white/72 sm:text-sm"
            variants={item}
          >
            Luxury care. German precision. Built different.
          </motion.p>

          <motion.div
            className="mt-6 flex w-full max-w-[38rem] flex-col gap-4 sm:flex-row sm:justify-center"
            variants={item}
          >
            <Link
              className="group inline-flex min-h-16 flex-1 items-center justify-center gap-3 border border-cyan-300/70 bg-black/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_34px_rgba(0,217,255,0.24)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_48px_rgba(0,217,255,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              to="/contact"
            >
              Book Your Detail
              <ChevronRight
                aria-hidden="true"
                className="text-cyan-300 transition group-hover:translate-x-1 group-hover:text-black"
                size={18}
              />
            </Link>
            <Link
              className="group inline-flex min-h-16 flex-1 items-center justify-center gap-3 border border-white/25 bg-black/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/65 hover:text-cyan-200 hover:shadow-[0_0_32px_rgba(0,217,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              to="/services"
            >
              View Services
              <ChevronRight
                aria-hidden="true"
                className="text-cyan-300 transition group-hover:translate-x-1"
                size={18}
              />
            </Link>
          </motion.div>

          <motion.div
            className="mt-4 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,217,255,0.65)]"
            variants={item}
          >
            <motion.div
              animate={{ opacity: [0.65, 1, 0.65], y: [0, 6, 0] }}
              transition={{ delay: 1.1, duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
            >
              <ChevronDown aria-hidden="true" size={24} strokeWidth={1.7} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid w-full shrink-0 border-y border-white/10 bg-black/32 shadow-[0_0_50px_rgba(0,217,255,0.08)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
          variants={item}
        >
          {featureStrip.map(({ Icon, label, sublabel }) => (
            <motion.div
              className="flex items-center justify-center gap-4 border-white/10 px-4 py-4 text-left sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0"
              key={label}
              whileHover={{ y: -3 }}
            >
              <Icon
                aria-hidden="true"
                className="shrink-0 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,217,255,0.45)]"
                size={32}
                strokeWidth={1.55}
              />
              <div>
                <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  {label}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/52">
                  {sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home
