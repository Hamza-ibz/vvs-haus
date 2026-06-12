import { motion } from 'framer-motion'
import {
  CalendarDays,
  ChevronRight,
  Droplet,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import ServiceCard from '../components/ui/ServiceCard'
import services from '../data/services'

const heroFeatures = [
  {
    title: 'Mobile Service',
    text: 'We come to you',
    Icon: CalendarDays,
  },
  {
    title: 'German Precision',
    text: 'Perfection in detail',
    Icon: ShieldCheck,
  },
  {
    title: 'Satisfaction',
    text: 'Guaranteed',
    Icon: ShieldCheck,
  },
]

const processSteps = [
  {
    title: 'Book',
    text: 'Choose your service and preferred time.',
    Icon: CalendarDays,
  },
  {
    title: 'We Come To You',
    text: 'We arrive fully equipped at your location.',
    Icon: Truck,
  },
  {
    title: 'Detailing',
    text: 'We detail your vehicle with precision & care.',
    Icon: Droplet,
  },
  {
    title: 'Perfection',
    text: 'You get a flawless finish every time.',
    Icon: ShieldCheck,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionTitle({ children }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-10 bg-cyan-300/55" />
      <h2 className="relative font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.42em] text-white">
        {children}
        <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,217,255,0.9)]" />
      </h2>
      <span className="h-px w-10 bg-cyan-300/55" />
    </div>
  )
}

function Services() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] pt-32 sm:pt-36 lg:pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#050505]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] to-transparent"
        />

        <div className="relative mx-auto grid min-h-[29rem] max-w-[92rem] items-center gap-8 px-6 pb-10 sm:px-8 lg:grid-cols-[0.68fr_1fr] lg:px-16 2xl:px-20">
          <motion.div
            animate="visible"
            className="max-w-xl pt-8 lg:pt-14"
            initial="hidden"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.p
              className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-cyan-300"
              variants={fadeUp}
            >
              Our Services
            </motion.p>
            <motion.h1
              className="font-['Orbitron'] text-4xl font-semibold uppercase leading-[1.18] tracking-[0.05em] text-white sm:text-5xl lg:text-6xl"
              variants={fadeUp}
            >
              Precision
              <br />
              In Every <span className="text-cyan-300">Detail.</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-md text-base leading-8 text-white/78 sm:text-lg"
              variants={fadeUp}
            >
              Professional mobile detailing services delivered to you. Wherever you are.
            </motion.p>

            <motion.div
              className="mt-9 grid gap-4 sm:grid-cols-3"
              variants={fadeUp}
            >
              {heroFeatures.map(({ Icon, text, title }) => (
                <div className="flex items-center gap-3 border-r border-white/10 pr-4 last:border-r-0" key={title}>
                  <Icon aria-hidden="true" className="shrink-0 text-cyan-300" size={30} strokeWidth={1.45} />
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-white/62">{text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0, scale: 1 }}
            className="relative hidden self-end lg:block"
            initial={{ opacity: 0, x: 28, scale: 1.02 }}
            transition={{ delay: 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative ml-auto h-[25rem] overflow-hidden">
              <img
                alt="VVS Haus mobile detailing van and Mercedes in a cinematic studio"
                className="h-full w-full object-cover object-center brightness-[1.12] contrast-[1.08] saturate-[1.05]"
                src="/assets/images/van-car.jpg"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0)_18%,rgba(5,5,5,0)_78%,#050505_100%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,rgba(5,5,5,0)_18%,rgba(5,5,5,0)_76%,#050505_100%)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-6 py-11 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(0,217,255,0.1),transparent_28rem)]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <SectionTitle>Our Services</SectionTitle>

          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
            initial="hidden"
            transition={{ staggerChildren: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
          >
            {services.map((service, index) => (
              <motion.div key={service.id} variants={fadeUp}>
                <ServiceCard {...service} index={index} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link
              className="group inline-flex min-w-64 items-center justify-center gap-3 border border-cyan-300/65 bg-black/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_24px_rgba(0,217,255,0.13)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_34px_rgba(0,217,255,0.24)]"
              to="/contact"
            >
              View Packages
              <ChevronRight aria-hidden="true" className="text-cyan-300 transition group-hover:translate-x-1" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070707] px-6 py-8 sm:px-8 lg:px-16 2xl:px-20">
        <div className="mx-auto max-w-[92rem]">
          <SectionTitle>Our Process</SectionTitle>

          <motion.div
            className="mt-10 grid gap-7 lg:grid-cols-4"
            initial="hidden"
            transition={{ staggerChildren: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
          >
            {processSteps.map(({ Icon, text, title }, index) => (
              <motion.div
                className="relative flex items-center gap-5 lg:pr-8"
                key={title}
                variants={fadeUp}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/75 font-['Orbitron'] text-sm text-white shadow-[0_0_18px_rgba(0,217,255,0.14)]">
                  {index + 1}
                </span>
                <Icon aria-hidden="true" className="shrink-0 text-cyan-300" size={32} strokeWidth={1.45} />
                <div>
                  <h3 className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/66">{text}</p>
                </div>
                {index < processSteps.length - 1 ? (
                  <ChevronRight
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-cyan-300/75 lg:block"
                    size={18}
                  />
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 px-6 py-7 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-55"
        >
          <img
            alt=""
            className="h-full w-full object-cover object-center brightness-[1.05] contrast-[1.1]"
            src="/assets/images/mercedes-back.jpg"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.82)_0%,rgba(5,5,5,0.58)_48%,rgba(5,5,5,0.84)_100%)]"
        />
        <div className="relative mx-auto flex max-w-[92rem] flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.1em] text-white sm:text-3xl">
              Ready For That <span className="text-cyan-300">VVS Finish?</span>
            </h2>
            <p className="mt-3 text-base text-white/72">
              Book your detail today and experience the difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Link
              className="group inline-flex min-w-72 items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-9 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)]"
              to="/contact"
            >
              Book Your Detail
              <ChevronRight aria-hidden="true" className="text-cyan-300 transition group-hover:translate-x-1" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
