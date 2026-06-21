import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, ShieldCheck, Sparkles, Truck, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceCatalogue } from '../data/services'

const heroBackground = '/assets/images/new-home-wallpaper.jpg'
const heroLogo = '/assets/logos/logo.png'

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
    label: 'Visual Standards',
    sublabel: 'Since 2018',
  },
  {
    Icon: ShieldCheck,
    label: 'Satisfaction Guaranteed',
    sublabel: 'Guaranteed',
  },
]

const packageBadges = {
  'vvs-haus-special': ['Most Popular', 'Recommended for first-time customers'],
  'showroom-refresh': ['Most Comprehensive'],
}

const specialistPreviews = [
  {
    title: 'Paint Correction & Polishing',
    copy: 'Restore gloss and clarity while reducing light swirl marks and paint imperfections.',
    cta: 'Explore Paint Correction',
  },
  {
    title: 'Ceramic Coatings',
    copy: 'Long-lasting protection designed to enhance gloss and defend your vehicle’s finish.',
    cta: 'Explore Ceramic Coatings',
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

function SectionIntro({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-['Orbitron'] text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-white sm:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
          {copy}
        </p>
      ) : null}
    </div>
  )
}

function PackagePreviewCard({ packageData, index }) {
  const badges = packageBadges[packageData.slug] ?? []

  return (
    <Link
      className="group flex min-h-full flex-col border border-white/[0.12] bg-[#090909]/88 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.36)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_24px_90px_rgba(0,217,255,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      to="/services"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="font-['Orbitron'] text-lg font-semibold tracking-[0.14em] text-cyan-300">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-right font-['Orbitron'] text-base font-semibold uppercase tracking-[0.16em] text-cyan-300">
          {packageData.price}
        </span>
      </div>

      <h3 className="font-['Orbitron'] text-lg font-semibold uppercase leading-snug tracking-[0.08em] text-white">
        {packageData.title}
      </h3>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
        {packageData.duration}
      </p>
      <p className="mt-5 flex-1 text-sm leading-7 text-white/68">
        {packageData.description}
      </p>

      {badges.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              className="border border-cyan-300/25 bg-cyan-300/[0.06] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cyan-200"
              key={badge}
            >
              {badge}
            </span>
          ))}
        </div>
      ) : null}

      <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition group-hover:text-cyan-200">
        View Package
        <ChevronRight
          aria-hidden="true"
          className="text-cyan-300 transition group-hover:translate-x-1"
          size={16}
        />
      </span>
    </Link>
  )
}

function Home() {
  const corePackages = serviceCatalogue.coreDetailingPackages
  const fleet = serviceCatalogue.fleetMaintenance

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="relative left-1/2 h-svh min-h-[700px] w-screen -translate-x-1/2 overflow-hidden bg-[#050505] px-5 pb-4 pt-24 text-white sm:px-8 lg:min-h-0 lg:px-12">
      <motion.img
        alt="VVS Haus cinematic mobile detailing background"
        animate={{ opacity: 1, scale: 1.025 }}
        className="absolute inset-0 h-full w-full object-cover object-[center_56%] brightness-[1.3] contrast-[1.08]"
        initial={{ opacity: 0, scale: 1.06 }}
        src={heroBackground}
        transition={{ duration: 1.3, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.34)_0%,rgba(5,5,5,0.06)_34%,rgba(5,5,5,0.1)_60%,rgba(5,5,5,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_31%,rgba(0,217,255,0.055),transparent_18rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.38)_0%,rgba(5,5,5,0.08)_28%,rgba(5,5,5,0.04)_50%,rgba(5,5,5,0.09)_72%,rgba(5,5,5,0.44)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#050505]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505]/82 via-[#050505]/42 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: ['-120%', '120%'], opacity: [0, 0.32, 0] }}
        className="absolute top-[40%] h-px w-1/2 rotate-[-12deg] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-[1px]"
        initial={{ x: '-120%', opacity: 0 }}
        transition={{ delay: 1.1, duration: 4.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 }}
      />

      <motion.div
        animate="visible"
        className="relative z-10 mx-auto flex h-full max-w-[92rem] flex-col items-center justify-end text-center"
        initial="hidden"
        variants={container}
      >
        <div className="flex w-full flex-1 flex-col items-center justify-center pb-1 pt-2 lg:mt-10 lg:pt-0">
          <motion.div
            className="relative -mb-6 flex h-[16.5rem] w-[16.5rem] items-center justify-center overflow-visible sm:-mb-9 sm:h-[23rem] sm:w-[23rem] lg:-mb-16 lg:h-[34rem] lg:w-[34rem] 2xl:-mb-20 2xl:h-[36rem] 2xl:w-[36rem]"
            variants={item}
          >
            <div className="relative h-full w-full translate-y-9 overflow-hidden sm:translate-y-12 lg:translate-y-16">
              <motion.img
                alt="VVS Haus diamond"
                animate={{
                  filter: [
                    'drop-shadow(0 0 14px rgba(0,217,255,0.58))',
                    'drop-shadow(0 0 22px rgba(0,217,255,0.72))',
                    'drop-shadow(0 0 14px rgba(0,217,255,0.58))',
                  ],
                  y: [0, -7, 0],
                }}
                className="relative h-full w-full object-contain drop-shadow-[0_0_14px_rgba(0,217,255,0.58)]"
                src={heroLogo}
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
            </div>
          </motion.div>

          <motion.p
            className="mb-2 font-['Orbitron'] text-base uppercase tracking-[0.58em] text-white/86 sm:text-lg lg:text-2xl"
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
            Professional Mobile Detailing. Setting the Standard Since 2018.
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

      <motion.section
        className="border-b border-white/10 px-6 py-16 sm:px-8 lg:px-12"
        initial="hidden"
        variants={container}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="visible"
      >
        <motion.div className="mx-auto max-w-[92rem]" variants={item}>
          <SectionIntro
            copy="VVS Haus delivers professional mobile detailing built around quality, convenience, and attention to detail. From regular maintenance to full vehicle transformations, every service is completed to a high visual standard."
            eyebrow="Visual Vehicle Standards"
            title="Setting The Standard Since 2018."
          />
          <div className="mt-8 flex justify-center">
            <Link
              className="group inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/55 hover:text-cyan-200 hover:shadow-[0_0_32px_rgba(0,217,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              to="/about"
            >
              Our Story
              <ChevronRight
                aria-hidden="true"
                className="text-cyan-300 transition group-hover:translate-x-1"
                size={16}
              />
            </Link>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="px-6 py-16 sm:px-8 lg:px-12"
        initial="hidden"
        variants={container}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
      >
        <div className="mx-auto max-w-[92rem]">
          <motion.div variants={item}>
            <SectionIntro
              copy="A focused preview of the core VVS Haus packages. The full service catalogue, inclusions, add-ons, and booking notes live on the Services page."
              eyebrow="Main Packages"
              title="Professional Mobile Detailing"
            />
          </motion.div>

          <motion.div
            className="mt-10 grid gap-5 lg:grid-cols-3"
            variants={container}
          >
            {corePackages.map((packageData, index) => (
              <motion.div key={packageData.id} variants={item}>
                <PackagePreviewCard index={index} packageData={packageData} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-9 flex justify-center" variants={item}>
            <Link
              className="group inline-flex items-center justify-center gap-3 border border-cyan-300/70 bg-black/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(0,217,255,0.16)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              to="/services"
            >
              View All Services
              <ChevronRight
                aria-hidden="true"
                className="text-cyan-300 transition group-hover:translate-x-1 group-hover:text-black"
                size={17}
              />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-white/10 bg-[#070707] px-6 py-14 sm:px-8 lg:px-12"
        initial="hidden"
        variants={container}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        <div className="mx-auto grid max-w-[92rem] gap-5 lg:grid-cols-2">
          {specialistPreviews.map((preview) => (
            <motion.article
              className="group border border-white/[0.12] bg-[#050505]/80 p-7 shadow-[0_18px_70px_rgba(0,0,0,0.34)] transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_24px_90px_rgba(0,217,255,0.14)]"
              key={preview.title}
              variants={item}
            >
              <Sparkles
                aria-hidden="true"
                className="mb-6 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,217,255,0.45)]"
                size={34}
                strokeWidth={1.45}
              />
              <h2 className="font-['Orbitron'] text-xl font-semibold uppercase tracking-[0.08em] text-white">
                {preview.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">
                {preview.copy}
              </p>
              <Link
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 transition group-hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                to="/services"
              >
                {preview.cta}
                <ChevronRight aria-hidden="true" size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="px-6 py-16 sm:px-8 lg:px-12"
        initial="hidden"
        variants={container}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
      >
        <motion.div
          className="mx-auto grid max-w-[92rem] gap-8 border border-cyan-300/20 bg-[#090909]/90 p-7 shadow-[0_0_54px_rgba(0,217,255,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
          variants={item}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
              Business Care
            </p>
            <h2 className="mt-4 font-['Orbitron'] text-3xl font-semibold uppercase tracking-[0.08em] text-white">
              {fleet.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              Discounted maintenance packages are available for fleets of two or more vehicles on a regular 1–2 week schedule.
            </p>
            <Link
              className="group mt-8 inline-flex items-center justify-center gap-3 border border-cyan-300/70 bg-black/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              to="/contact"
            >
              Request A Bespoke Quote
              <ChevronRight
                aria-hidden="true"
                className="text-cyan-300 transition group-hover:translate-x-1 group-hover:text-black"
                size={16}
              />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {fleet.suitableFor.map((itemLabel) => (
              <div
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-4"
                key={itemLabel}
              >
                <ShieldCheck
                  aria-hidden="true"
                  className="shrink-0 text-cyan-300"
                  size={20}
                  strokeWidth={1.55}
                />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-white/82">
                  {itemLabel}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="border-t border-white/10 bg-[linear-gradient(90deg,rgba(0,217,255,0.08),transparent_32%,transparent_68%,rgba(0,217,255,0.06))] px-6 py-14 sm:px-8 lg:px-12"
        initial="hidden"
        variants={container}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="visible"
      >
        <motion.div
          className="mx-auto flex max-w-[92rem] flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left"
          variants={item}
        >
          <div>
            <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.08em] text-white sm:text-3xl">
              Ready For That <span className="text-cyan-300">VVS Finish?</span>
            </h2>
            <p className="mt-3 text-base text-white/68">
              Professional mobile detailing delivered to you.
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Setting the Standard Since 2018.
            </p>
          </div>
          <Link
            className="group inline-flex min-h-14 items-center justify-center gap-3 border border-cyan-300/70 bg-black/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(0,217,255,0.16)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            to="/contact"
          >
            Book Your Detail
            <ChevronRight
              aria-hidden="true"
              className="text-cyan-300 transition group-hover:translate-x-1 group-hover:text-black"
              size={17}
            />
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home
