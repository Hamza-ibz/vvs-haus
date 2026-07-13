import { motion } from 'framer-motion'
import {
  CalendarDays,
  ChevronRight,
  Clock,
  ExternalLink,
  Home,
  MapPin,
  ShieldCheck,
} from 'lucide-react'

import BookingForm from '../components/contact/BookingForm'
import SocialIcon from '../components/ui/SocialIcon'
import { serviceCatalogue } from '../data/services'
import { socialLinks } from '../data/socialLinks'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

const {
  coreDetailingPackages,
  importantInformation,
  paintCorrectionAndPolishing,
  refreshServices,
} = serviceCatalogue

const packageOptions = [
  ...coreDetailingPackages.map((service) => service.title),
  ...refreshServices.map((service) => service.title),
  paintCorrectionAndPolishing.featuredService.title,
  'Ceramic Coating',
  'Fleet Maintenance',
  'Bespoke Quote',
]

const bookingInformation = importantInformation.filter(({ id }) =>
  [
    'pricing-basis',
    'photos-videos',
    'booking-deposit',
    'travel-charges',
    'congestion-zone',
    'results-vary',
  ].includes(id),
)

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const trustItems = [
  {
    title: 'Easy Booking',
    text: 'Quick & simple online booking',
    Icon: CalendarDays,
  },
  {
    title: 'Fully Insured',
    text: 'Your vehicle is in safe hands',
    Icon: ShieldCheck,
  },
  {
    title: 'Fast Response',
    text: 'We respond promptly',
    Icon: Clock,
  },
]

const serviceAreaPoints = [
  {
    title: 'Mobile Service',
    text: 'Professional detailing delivered to your chosen location.',
    Icon: MapPin,
  },
  {
    title: 'Bethnal Green Service Radius',
    text: 'Additional travel charges may apply beyond 5 miles.',
    Icon: Home,
  },
  {
    title: 'Congestion Zone',
    text: 'Locations within the Congestion Zone are subject to a £15 surcharge.',
    Icon: Clock,
  },
]

const mapLabels = [
  {
    label: 'Travel Charges May Apply',
    className: 'right-5 top-[25%] text-right sm:right-[8%] sm:top-[30%]',
    connector: 'right-[22%] top-[32%] h-px w-16 rotate-[168deg] sm:w-20',
  },
  {
    label: 'Mobile Detailing',
    className: 'left-5 bottom-[19%] sm:left-[14%] sm:bottom-[25%]',
    connector: 'left-[26%] bottom-[31%] h-px w-14 rotate-[-18deg] sm:w-20',
  },
  {
    label: 'Congestion Zone Surcharge',
    className: 'right-5 bottom-[15%] text-right sm:right-[8%] sm:bottom-[22%]',
    connector: 'right-[26%] bottom-[28%] h-px w-14 rotate-[20deg] sm:w-20',
  },
]

function Contact() {
  const prefersReducedMotion = useReducedMotionPreference()

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

        <div className="relative mx-auto grid min-h-[29rem] max-w-[92rem] items-center gap-8 px-6 pb-9 sm:px-8 lg:grid-cols-[0.64fr_1fr] lg:px-16 2xl:px-20">
          <motion.div
            animate="visible"
            className="max-w-xl pt-8 lg:pt-12"
            initial="hidden"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.p
              className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-cyan-300"
              variants={fadeUp}
            >
              Get In Touch
            </motion.p>
            <motion.h1
              className="font-['Orbitron'] text-4xl font-semibold uppercase leading-[1.16] tracking-[0.05em] text-white sm:text-5xl lg:text-[3.35rem]"
              variants={fadeUp}
            >
              We Come To You.
              <br />
              You <span className="text-cyan-300">Relax.</span>
            </motion.h1>
            <motion.span
              className="mt-6 block h-px w-14 bg-cyan-300 shadow-[0_0_18px_rgba(0,217,255,0.65)]"
              variants={fadeUp}
            />
            <motion.p
              className="mt-6 max-w-md text-base leading-8 text-white/78"
              variants={fadeUp}
            >
              To request a booking, please complete the form with your vehicle,
              location, desired service, and preferred appointment details.
            </motion.p>

            <motion.div
              className="mt-9 grid gap-4 sm:grid-cols-3"
              variants={fadeUp}
            >
              {trustItems.map(({ Icon, text, title }) => (
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
                alt="VVS Haus mobile detailing van and Mercedes ready for booking"
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

      <section className="grid border-b border-white/10 bg-[#050505] lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="border-b border-white/10 px-6 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-16 2xl:pl-20"
          initial={{ opacity: 0, x: -18 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <BookingForm packageOptions={packageOptions} />
        </motion.div>

        <motion.div
          className="px-6 py-10 sm:px-8 lg:px-12"
          initial={{ opacity: 0, x: 18 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.08em] text-white">
            Contact Details
          </h2>
          <div className="mt-7 border border-white/12 bg-black/30 p-6">
            <p className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Follow <span className="text-cyan-300">Our Work</span>
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              See our latest details, vehicle transformations and behind-the-scenes content.
            </p>

            <motion.div
              className="mt-6 grid gap-3 sm:grid-cols-2"
              initial="hidden"
              transition={{ staggerChildren: 0.06 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
            >
              {socialLinks.map((social) => (
                <motion.a
                  aria-label={`Follow VVS Haus on ${social.name}`}
                  className="group flex min-h-20 items-center justify-between gap-4 border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/55 hover:bg-cyan-300/[0.055] hover:shadow-[0_0_26px_rgba(0,217,255,0.13)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                  href={social.url}
                  key={social.name}
                  rel="noopener noreferrer"
                  target="_blank"
                  variants={fadeUp}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/[0.06] text-cyan-200 transition group-hover:border-cyan-200 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.18)]">
                      <SocialIcon className="h-4 w-4" name={social.name} />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white">
                        {social.name}
                      </span>
                      <span className="mt-1 block text-xs text-white/52">{social.handle}</span>
                    </span>
                  </span>
                  <ExternalLink
                    aria-hidden="true"
                    className="shrink-0 text-cyan-300/75 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-200"
                    size={15}
                    strokeWidth={1.7}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 border border-cyan-300/24 bg-cyan-300/[0.045] p-6 shadow-[0_0_34px_rgba(0,217,255,0.1)]">
            <h3 className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Important Booking Information
            </h3>
            <ul className="mt-5 grid gap-3">
              {bookingInformation.map(({ id, text }) => (
                <li className="flex gap-3 text-sm leading-6 text-white/72" key={id}>
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-cyan-300"
                    size={17}
                    strokeWidth={1.7}
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] px-6 py-11 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_66%_54%,rgba(0,217,255,0.12),transparent_30rem)]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="text-center">
            <h2 className="font-['Orbitron'] text-3xl font-semibold uppercase tracking-[0.1em] text-white sm:text-4xl">
              We Come To <span className="text-cyan-300">You</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
              VVS Haus provides professional mobile detailing from Bethnal Green, E2.
              Travel charges may apply to appointments beyond a 5-mile radius.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
            <div className="space-y-8">
              {serviceAreaPoints.map(({ Icon, text, title }) => (
                <div className="flex gap-5" key={title}>
                  <Icon aria-hidden="true" className="mt-1 shrink-0 text-cyan-300" size={38} strokeWidth={1.35} />
                  <div>
                    <h3 className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.12em] text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/66">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative min-h-[25rem] overflow-hidden bg-[#030303]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]"
              />
              <motion.div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70 bg-cyan-300/[0.07] shadow-[0_0_48px_rgba(0,217,255,0.2)] sm:h-[23rem] sm:w-[23rem]"
                animate={prefersReducedMotion ? undefined : { opacity: [0.76, 1, 0.76], scale: [1, 1.025, 1] }}
                transition={{ duration: 5.8, ease: 'easeInOut', repeat: Infinity }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-300/45 shadow-[0_0_34px_rgba(0,217,255,0.14)]"
                animate={prefersReducedMotion ? undefined : { opacity: [0.62, 0.95, 0.62], scale: [1, 1.055, 1] }}
                transition={{ duration: 4.8, ease: 'easeInOut', repeat: Infinity }}
              />
              <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-[calc(100%+1.35rem)] flex-col items-center text-center">
                <span className="font-['Orbitron'] text-base font-semibold uppercase tracking-[0.08em] text-white sm:text-xl">
                  Bethnal Green
                </span>
              </div>
              <motion.span
                aria-hidden="true"
                animate={prefersReducedMotion ? undefined : { opacity: [0.65, 1, 0.65], scale: [1, 1.2, 1] }}
                className="absolute left-1/2 top-1/2 z-20 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200 bg-cyan-300/20 shadow-[0_0_22px_rgba(0,217,255,0.8)]"
                transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity }}
              />
              <div className="absolute left-5 top-5 z-20 max-w-52 sm:left-6 sm:top-6">
                <p className="text-[0.58rem] uppercase leading-5 tracking-[0.18em] text-white/44 sm:text-[0.62rem]">
                  Decorative radius visual,
                  <br />
                  not a precise coverage map
                </p>
                <span className="mt-3 block h-px w-14 bg-cyan-300 shadow-[0_0_14px_rgba(0,217,255,0.65)]" />
              </div>
              <div className="absolute left-5 top-[31%] z-20 max-w-[10rem] sm:left-[9%] sm:top-[34%]">
                <p className="font-['Orbitron'] text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white">
                  5 Mile Radius
                </p>
                <p className="mt-3 text-xs leading-5 text-white/55">
                  Locations within
                  <br />
                  5 mile radius to
                  <br />
                  <span className="font-semibold text-cyan-300">Bethnal Green</span>
                </p>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-px w-20 bg-gradient-to-r from-cyan-300/70 to-transparent"
                />
              </div>
              {mapLabels.map(({ className, connector, label }) => (
                <div key={label}>
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute z-10 hidden origin-center bg-gradient-to-r from-cyan-300/45 to-transparent shadow-[0_0_12px_rgba(0,217,255,0.25)] sm:block',
                      connector,
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'absolute z-20 max-w-36 font-["Orbitron"] text-[0.58rem] font-semibold uppercase leading-5 tracking-[0.12em] text-white/82 sm:text-[0.62rem]',
                      className,
                    ].join(' ')}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 px-6 py-7 sm:px-8 lg:px-16 2xl:px-20">
        <div className="absolute inset-0 opacity-55" aria-hidden="true">
          <img
            alt=""
            className="h-full w-full object-cover object-center brightness-[1.05] contrast-[1.1]"
            src="/assets/images/mercedes-back.jpg"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.64)_48%,rgba(5,5,5,0.9)_100%)]"
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
              Submit your booking request and we will contact you to confirm availability,
              pricing, and the next steps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <button
              className="group inline-flex min-w-72 items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-9 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              onClick={() => document.getElementById('booking-form')?.scrollIntoView({ block: 'start' })}
              type="button"
            >
              Book A Detail
              <ChevronRight aria-hidden="true" className="text-cyan-300 transition group-hover:translate-x-1" size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
