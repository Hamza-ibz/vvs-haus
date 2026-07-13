import { motion } from 'framer-motion'
import {
  CalendarDays,
  CheckCircle,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import InformationPanel from '../components/services/InformationPanel'
import PackageCard from '../components/services/PackageCard'
import PriceList from '../components/services/PriceList'
import { serviceCatalogue } from '../data/services'

const {
  additionalServices,
  ceramicCoatings,
  coreDetailingPackages,
  fleetMaintenance,
  importantInformation,
  paintCorrectionAndPolishing,
  refreshServices,
} = serviceCatalogue

const heroFeatures = [
  {
    title: 'Mobile Service',
    text: 'We come to you',
    Icon: CalendarDays,
  },
  {
    title: 'Visual Standards',
    text: 'Established 2018',
    Icon: ShieldCheck,
  },
  {
    title: 'Satisfaction',
    text: 'Guaranteed',
    Icon: ShieldCheck,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionTitle({ children, eyebrow }) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-cyan-300/55" />
        <h2 className="relative font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.42em] text-white">
          {children}
          <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,217,255,0.9)]" />
        </h2>
        <span className="h-px w-10 bg-cyan-300/55" />
      </div>
    </div>
  )
}

function InclusionList({ items = [] }) {
  return (
    <ul className="mt-5 grid gap-2 text-sm leading-6 text-white/68">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <CheckCircle
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-cyan-300"
            size={17}
            strokeWidth={1.7}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function RefreshCard({ service }) {
  return (
    <article className="border border-white/[0.12] bg-[#070707]/90 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.34)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 sm:p-6">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-['Orbitron'] text-lg font-semibold uppercase tracking-[0.1em] text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/45">
            Refresh Service
          </p>
        </div>
        <p className="font-['Orbitron'] text-lg font-semibold uppercase tracking-[0.12em] text-cyan-300">
          {service.price}
        </p>
      </div>
      <InclusionList items={service.includes} />
    </article>
  )
}

function Services() {
  const packageBadges = {
    'vvs-haus-special': ['Most Popular', 'Recommended for First-Time Customers'],
    'showroom-refresh': ['Most Comprehensive Package'],
  }

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
              In Every <span className="text-cyan-300">Detail</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-md text-base leading-8 text-white/78 sm:text-lg"
              variants={fadeUp}
            >
              Professional mobile detailing services delivered to you, wherever you are.
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
          <SectionTitle eyebrow="Packages">Core Detailing Packages</SectionTitle>

          <motion.div
            className="mt-12 grid items-stretch gap-5 xl:grid-cols-3"
            initial="hidden"
            transition={{ staggerChildren: 0.08 }}
            viewport={{ once: true, amount: 0.16 }}
            whileInView="visible"
          >
            {coreDetailingPackages.map((packageData) => (
              <motion.div className="h-full" key={packageData.id} variants={fadeUp}>
                <PackageCard
                  badges={packageBadges[packageData.slug] ?? []}
                  packageData={packageData}
                  tone={packageData.slug === 'vvs-haus-special' ? 'featured' : 'standard'}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070707] px-6 py-10 sm:px-8 lg:px-16 2xl:px-20">
        <div className="mx-auto max-w-[92rem]">
          <SectionTitle>Refresh Services</SectionTitle>
          <motion.div
            className="mt-10 grid gap-5 lg:grid-cols-2"
            initial="hidden"
            transition={{ staggerChildren: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
          >
            {refreshServices.map((service) => (
              <motion.div key={service.id} variants={fadeUp}>
                <RefreshCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-6 py-11 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(0,217,255,0.09),transparent_25rem)]"
        />
        <div className="relative mx-auto grid max-w-[92rem] gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
              Paint Correction & Polishing
            </p>
            <h2 className="mt-4 font-['Orbitron'] text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-white">
              Paint Enhancement
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              {paintCorrectionAndPolishing.introduction}
            </p>
            <div className="mt-7 border border-white/10 bg-[#070707]/90 p-5">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-['Orbitron'] text-lg font-semibold uppercase tracking-[0.1em] text-white">
                    {paintCorrectionAndPolishing.featuredService.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">
                    {paintCorrectionAndPolishing.featuredService.description}
                  </p>
                </div>
                <p className="font-['Orbitron'] text-lg font-semibold uppercase tracking-[0.12em] text-cyan-300">
                  {paintCorrectionAndPolishing.featuredService.price}
                </p>
              </div>
              <InclusionList items={paintCorrectionAndPolishing.featuredService.includes} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <PriceList
              items={paintCorrectionAndPolishing.additionalPolishingServices}
              title="Additional Polishing Services"
            />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070707] px-6 py-11 sm:px-8 lg:px-16 2xl:px-20">
        <div className="mx-auto grid max-w-[92rem] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
              Ceramic Coatings
            </p>
            <h2 className="mt-4 font-['Orbitron'] text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-white">
              Long-Lasting Protection
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              {ceramicCoatings.introduction}
            </p>
            <div className="mt-7 border border-white/10 bg-black/20 p-5">
              <h3 className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.14em] text-white">
                All Ceramic Coating Packages Include
              </h3>
              <InclusionList items={ceramicCoatings.allPackagesInclude} />
            </div>
            <p className="mt-5 border-l-2 border-cyan-300 bg-cyan-300/[0.07] px-4 py-3 text-sm font-semibold leading-6 text-white">
              {ceramicCoatings.importantNote}
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 md:grid-cols-2"
            initial="hidden"
            transition={{ staggerChildren: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
          >
            <motion.div variants={fadeUp}>
              <PriceList
                items={ceramicCoatings.protectionPackages}
                title="Protection Packages"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <PriceList
                items={ceramicCoatings.additionalCeramicProtection}
                title="Additional Ceramic Protection"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-6 py-11 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(0,217,255,0.08),transparent_24rem)]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <SectionTitle>Additional Services</SectionTitle>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 18 }}
            viewport={{ once: true, amount: 0.18 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <PriceList items={additionalServices} />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070707] px-6 py-11 sm:px-8 lg:px-16 2xl:px-20">
        <motion.div
          className="mx-auto grid max-w-[92rem] gap-8 border border-cyan-300/24 bg-cyan-300/[0.045] p-6 shadow-[0_0_44px_rgba(0,217,255,0.1)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-8"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
              Fleet Maintenance
            </p>
            <h2 className="mt-4 font-['Orbitron'] text-3xl font-semibold uppercase tracking-[0.08em] text-white">
              {fleetMaintenance.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
              {fleetMaintenance.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {fleetMaintenance.suitableFor.map((item) => (
                <li
                  className="border border-white/10 bg-black/25 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/72"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link
            className="group inline-flex items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-8 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            to="/contact"
          >
            Request a Bespoke Quote
            <ChevronRight
              aria-hidden="true"
              className="text-cyan-300 transition group-hover:translate-x-1"
              size={18}
            />
          </Link>
        </motion.div>
      </section>

      <section className="bg-[#050505] px-6 py-10 sm:px-8 lg:px-16 2xl:px-20">
        <div className="mx-auto max-w-[92rem]">
          <InformationPanel items={importantInformation} />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 px-6 py-7 sm:px-8 lg:px-16 2xl:px-20">
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
              Setting the Standard Since 2018.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Link
              className="group inline-flex min-w-72 items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-9 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
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
