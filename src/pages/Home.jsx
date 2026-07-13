import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ChevronDown, ChevronRight, ShieldCheck, Sparkles, Truck, Wrench } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'
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
  const heroImageRef = useRef(null)
  const prefersReducedMotion = useReducedMotionPreference()

  useEffect(() => {
    if (prefersReducedMotion || !heroImageRef.current) return undefined

    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    if (!desktopQuery.matches) return undefined

    const heroImage = heroImageRef.current
    let removePointerMove
    const ctx = gsap.context(() => {
      const handlePointerMove = (event) => {
        const x = ((event.clientX / window.innerWidth) - 0.5) * 16
        const y = ((event.clientY / window.innerHeight) - 0.5) * 10

        gsap.to(heroImage, {
          duration: 1.25,
          ease: 'power3.out',
          overwrite: 'auto',
          x,
          y,
        })
      }

      window.addEventListener('pointermove', handlePointerMove, { passive: true })
      removePointerMove = () => window.removeEventListener('pointermove', handlePointerMove)
    }, heroImageRef)

    return () => {
      removePointerMove?.()
      gsap.killTweensOf(heroImage)
      ctx.revert()
    }
  }, [prefersReducedMotion])

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="relative left-1/2 min-h-[100svh] w-screen -translate-x-1/2 overflow-hidden bg-[#050505] px-5 pb-0 pt-20 text-white sm:px-8 sm:pt-24 lg:h-svh lg:min-h-[700px] lg:px-12 lg:pb-5">
      <motion.img
        alt="VVS Haus cinematic mobile detailing background"
        animate={{ opacity: 1, scale: 1.025 }}
        className="absolute inset-0 hidden h-full w-full object-cover object-[center_56%] brightness-[1.3] contrast-[1.08] lg:block"
        initial={{ opacity: 0, scale: 1.06 }}
        ref={heroImageRef}
        src={heroBackground}
        transition={{ duration: 1.3, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.02)_25%,rgba(5,5,5,0.18)_53%,rgba(5,5,5,0.86)_100%)] lg:bg-[linear-gradient(180deg,rgba(5,5,5,0.34)_0%,rgba(5,5,5,0.06)_34%,rgba(5,5,5,0.1)_60%,rgba(5,5,5,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_31%,rgba(0,217,255,0.055),transparent_18rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.16)_0%,rgba(5,5,5,0.02)_26%,rgba(5,5,5,0)_50%,rgba(5,5,5,0.02)_74%,rgba(5,5,5,0.18)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,5,5,0.38)_0%,rgba(5,5,5,0.08)_28%,rgba(5,5,5,0.04)_50%,rgba(5,5,5,0.09)_72%,rgba(5,5,5,0.44)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050505]/54 to-transparent lg:h-44 lg:from-[#050505]/70" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050505]/95 via-[#050505]/58 to-transparent lg:h-64 lg:from-[#050505]/82 lg:via-[#050505]/42" />
      <motion.div
        aria-hidden="true"
        animate={{ x: ['-120%', '120%'], opacity: [0, 0.32, 0] }}
        className="absolute top-[40%] h-px w-1/2 rotate-[-12deg] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-[1px]"
        initial={{ x: '-120%', opacity: 0 }}
        transition={{ delay: 1.1, duration: 4.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 }}
      />

      <motion.div
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-[92rem] flex-col items-center justify-start text-center lg:h-full lg:min-h-0 lg:justify-end"
        initial="hidden"
        variants={container}
      >
        <div className="flex w-full flex-1 flex-col items-center justify-start pb-4 pt-3 sm:pt-4 lg:mt-10 lg:justify-center lg:pb-1 lg:pt-0">
          <motion.div
            className="relative -mx-5 mb-4 block w-[calc(100%+2.5rem)] overflow-visible sm:-mx-8 sm:mb-5 sm:w-[calc(100%+4rem)] lg:hidden"
            variants={item}
          >
            <img
              alt="VVS Haus branded van and black Mercedes in a cinematic detailing studio"
              className="h-auto w-full max-w-none object-contain brightness-[1.25] contrast-[1.1]"
              src={heroBackground}
            />
            <div className="absolute left-1/2 top-[10%] w-[50vw] max-w-[11.25rem] -translate-x-1/2 sm:top-[11%] sm:max-w-[14rem]">
              <motion.img
                alt="VVS Haus diamond"
                animate={{
                  filter: [
                    'drop-shadow(0 0 14px rgba(0,217,255,0.58))',
                    'drop-shadow(0 0 22px rgba(0,217,255,0.72))',
                    'drop-shadow(0 0 14px rgba(0,217,255,0.58))',
                  ],
                  y: [0, -5, 0],
                }}
                className="h-auto w-full object-contain"
                src={heroLogo}
                transition={{
                  filter: { duration: 4.8, ease: 'easeInOut', repeat: Infinity },
                  y: { duration: 5.8, ease: 'easeInOut', repeat: Infinity },
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="relative hidden items-center justify-center overflow-visible lg:-mb-16 lg:flex lg:h-[34rem] lg:w-[34rem] 2xl:-mb-20 2xl:h-[36rem] 2xl:w-[36rem]"
            variants={item}
          >
            <div className="relative h-full w-full overflow-visible lg:translate-y-16 lg:overflow-hidden">
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
            className="mb-2 font-['Orbitron'] text-sm uppercase tracking-[0.42em] text-white/86 sm:text-base sm:tracking-[0.5em] lg:text-2xl lg:tracking-[0.58em]"
            variants={item}
          >
            Precision
          </motion.p>

          <motion.h1
            className="max-w-6xl whitespace-nowrap font-['Orbitron'] text-[clamp(1.72rem,7.9vw,2.45rem)] font-medium uppercase leading-tight tracking-[0.075em] text-white sm:text-[clamp(2.2rem,6.6vw,3.05rem)] sm:tracking-[0.12em] lg:text-[clamp(2rem,5vw,3.95rem)] lg:leading-none lg:tracking-[0.15em]"
            variants={item}
          >
            Mobile <span className="text-cyan-300 drop-shadow-[0_0_22px_rgba(0,217,255,0.45)]">Detailing</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-[20rem] text-[0.68rem] uppercase leading-6 tracking-[0.14em] text-white/72 sm:max-w-2xl sm:text-xs sm:tracking-[0.18em] lg:max-w-3xl lg:text-sm lg:tracking-[0.22em]"
            variants={item}
          >
            Professional Mobile Detailing. Setting the Standard Since 2018.
          </motion.p>

          <motion.div
            className="mt-5 flex w-full max-w-[45rem] flex-col gap-3 sm:max-w-[38rem] sm:flex-row sm:justify-center sm:gap-4 lg:mt-6"
            variants={item}
          >
            <Link
              className="group inline-flex min-h-12 flex-1 items-center justify-center gap-3 border border-cyan-300/70 bg-black/40 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_34px_rgba(0,217,255,0.24)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_48px_rgba(0,217,255,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:min-h-16 sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.18em]"
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
              className="group inline-flex min-h-12 flex-1 items-center justify-center gap-3 border border-white/25 bg-black/30 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/65 hover:text-cyan-200 hover:shadow-[0_0_32px_rgba(0,217,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:min-h-16 sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.18em]"
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
            className="mt-3 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,217,255,0.65)] lg:mt-4"
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
          className="-mx-5 grid w-[calc(100%+2.5rem)] shrink-0 grid-cols-4 border-y border-white/10 bg-black/48 shadow-[0_0_50px_rgba(0,217,255,0.08)] backdrop-blur-xl sm:mx-0 sm:w-full lg:bg-black/32"
          variants={item}
        >
          {featureStrip.map(({ Icon, label, sublabel }) => (
            <motion.div
              className="flex min-h-[8.6rem] flex-col items-center justify-start gap-3 border-r border-white/10 px-2 py-5 text-center last:border-r-0 sm:min-h-[9.5rem] sm:px-4 sm:py-6 lg:min-h-0 lg:flex-row lg:justify-center lg:py-4 lg:text-left"
              key={label}
              whileHover={{ y: -3 }}
            >
              <Icon
                aria-hidden="true"
                className="h-7 w-7 shrink-0 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,217,255,0.45)] sm:h-8 sm:w-8"
                size={32}
                strokeWidth={1.55}
              />
              <div>
                <p className="font-['Orbitron'] text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs sm:tracking-[0.16em]">
                  {label}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-white/52 sm:mt-2 sm:text-xs sm:tracking-[0.16em]">
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
