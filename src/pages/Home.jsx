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
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: 'easeOut' },
  },
}

function Home() {
  return (
    <section className="relative left-1/2 h-svh min-h-[720px] w-screen -translate-x-1/2 overflow-hidden bg-[#050505] px-5 pb-4 pt-24 text-white sm:px-8 lg:min-h-[760px] lg:px-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#111111_46%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_31%,rgba(0,217,255,0.22),transparent_22rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.35)_28%,rgba(5,5,5,0.18)_50%,rgba(5,5,5,0.42)_72%,rgba(5,5,5,0.9)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#050505] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/78 to-transparent" />

      <motion.img
        alt="VVS Haus branded mobile detailing van"
        animate={{ opacity: 0.68, x: 0, scale: 1 }}
        className="absolute bottom-[9.8rem] left-[-9rem] hidden w-[44rem] max-w-none object-contain shadow-[0_34px_120px_rgba(0,0,0,0.65)] xl:block 2xl:left-[-4rem] 2xl:w-[50rem]"
        initial={{ opacity: 0, x: -46, scale: 0.98 }}
        src={vanImage}
        transition={{ duration: 1.15, ease: 'easeOut' }}
      />

      <motion.img
        alt="Premium Mercedes vehicle detailed by VVS Haus"
        animate={{ opacity: 0.7, x: 0, scale: 1 }}
        className="absolute bottom-[9.8rem] right-[-10rem] hidden w-[45rem] max-w-none object-contain shadow-[0_34px_120px_rgba(0,0,0,0.7)] lg:block 2xl:right-[-4rem] 2xl:w-[51rem]"
        initial={{ opacity: 0, x: 46, scale: 0.98 }}
        src={vehicleImage}
        transition={{ duration: 1.15, ease: 'easeOut' }}
      />

      <motion.div
        animate="visible"
        className="relative z-10 mx-auto flex h-full max-w-[92rem] flex-col items-center justify-end text-center"
        initial="hidden"
        variants={container}
      >
        <div className="flex w-full flex-1 flex-col items-center justify-center pb-2 pt-4">
          <motion.div
            className="relative mb-2 flex h-48 w-48 items-center justify-center sm:h-60 sm:w-60 lg:h-[18rem] lg:w-[18rem]"
            variants={item}
          >
            <div className="absolute inset-8 bg-cyan-300/12 blur-3xl" />
            <img
              alt="VVS Haus diamond"
              className="relative h-full w-full object-contain drop-shadow-[0_0_30px_rgba(0,217,255,0.62)]"
              src={diamondLogo}
            />
          </motion.div>

          <motion.p
            className="mb-2 font-['Orbitron'] text-sm uppercase tracking-[0.6em] text-white/86 sm:text-base lg:text-xl"
            variants={item}
          >
            Precision
          </motion.p>

          <motion.h1
            className="max-w-6xl font-['Orbitron'] text-[clamp(2.2rem,6.2vw,4.55rem)] font-medium uppercase leading-none tracking-[0.15em] text-white"
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
            className="mt-7 flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:justify-center"
            variants={item}
          >
            <Link
              className="group inline-flex items-center justify-center gap-3 border border-cyan-300/70 bg-black/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_34px_rgba(0,217,255,0.24)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_48px_rgba(0,217,255,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
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
              className="group inline-flex items-center justify-center gap-3 border border-white/25 bg-black/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/65 hover:text-cyan-200 hover:shadow-[0_0_32px_rgba(0,217,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
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
            className="mt-5 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,217,255,0.65)]"
            variants={item}
          >
            <ChevronDown aria-hidden="true" size={24} strokeWidth={1.7} />
          </motion.div>
        </div>

        <motion.div
          className="grid w-full border-y border-white/10 bg-black/35 shadow-[0_0_50px_rgba(0,217,255,0.08)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
          variants={item}
        >
          {featureStrip.map(({ Icon, label, sublabel }) => (
            <div
              className="flex items-center justify-center gap-4 border-white/10 px-4 py-4 text-left sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0"
              key={label}
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
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home
